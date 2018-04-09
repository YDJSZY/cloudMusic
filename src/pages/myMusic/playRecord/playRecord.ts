import { Component,OnInit } from '@angular/core';
import {IonicPage,NavController,LoadingController} from "ionic-angular";
import { HttpService } from '../../../providers/httpService';
import { AuthService } from '../../../providers/authService';
import { RootViewCoverService } from '../../discoverMusic/provider/eventEmitService';

@IonicPage({
    name : 'play-record',
    //segment:'musics'
})
@Component({
    selector:'play-record',
    templateUrl: './playRecord.html',
    providers:[HttpService]
})
export class PlayRecordPage implements OnInit{
    records:Array<any> = []
    songList:Array<any> = []
    loading:any
    constructor(
        public navCtrl:NavController,
        public loadingCtrl:LoadingController,
        public http:HttpService,
        private authService:AuthService,
        private rootViewCoverService:RootViewCoverService
        ) {
    }

    ngOnInit() {

    }

    ionViewDidLoad() {
        this.showLoading();
        this.getRecords();
    }

    showLoading() {
        this.loading = this.loadingCtrl.create({
            content: '正在加载...',
            duration: 10000, //单位是毫秒
        });
        this.loading.present()
    }

    getRecords() {
        let userMes = this.authService.getUserMessage();
        let recordPromise = this.http.getData({'url':'user/record',params:{uid:userMes.userId,type:0}});
        recordPromise.then(function (res):any{
            this.loading.dismiss();
            this.records = res.allData;
            this.collectSongList()
        }.bind(this))
    }

    collectSongList() {
        for(let item of this.records){
            item.song.album = item.song.al;
            item.song.artists = item.song.ar;
            this.songList.push(item.song)
        }
    }

    playMusic(index) {
        this.rootViewCoverService.globalRootViewCover.emit({component:'play-music-page',params:{data:this.songList,index:index}});
    }
}