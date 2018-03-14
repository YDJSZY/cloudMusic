import { Component,ViewChild,OnInit} from '@angular/core';
import { LoadingController,AlertController } from 'ionic-angular';
import { HttpService } from '../../../../../providers/httpService';
import musicList from './musicList';
@Component({
    templateUrl: 'highqualityMusicList.html',
})
export class HighqualityMusicListPage implements OnInit{
    @ViewChild('highqualityMusicListNav') highqualityMusicListNav
    hqMusicList:Array<any>=[]
    currentMusicType:Object = {name:'全部',field:'all'}
    constructor(
        public loadingCtrl:LoadingController,
        public alertCtrl:AlertController,
        private http:HttpService
    ) {

    }

    ngOnInit() {
        this.highqualityMusicListNav.setBackButtonText("");
        this.loadHighqualityMusic();
    }

    loadHighqualityMusic(cat:string='全部') {
        this.hqMusicList = []
        let loading = this.loadingCtrl.create({
            content: '正在加载...',
            duration: 10000, //单位是毫秒
        });
        loading.present()

        let promise = this.http.getData({url:"top/playlist/highquality",params:{limit:"10",cat:cat}});
        promise.then(function(res):any{
            this.hqMusicList = res.playlists;
            //this.getPage(this.currentPage);
            loading.dismiss();
        }.bind(this))
    }

    presentPrompt() {
        for(let d of musicList){
            d.checked = false;
            if(d.field === this.currentMusicType.field){
                d.checked = true;
            }
        }
        let alert = this.alertCtrl.create({
            title: '筛选歌单',
            subTitle: '已选择: '+ this.currentMusicType.name,
            inputs: musicList,
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: data => {
                        this.currentMusicType = data;
                        this.loadHighqualityMusic(data.name)
                    }
                }
            ]
        });
        alert.present();
    }
}