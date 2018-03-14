import { Component,ViewChild,OnInit} from '@angular/core';
import { LoadingController,ModalController } from 'ionic-angular';
import { HttpService } from '../../../../../providers/httpService';

@Component({
    templateUrl: 'highqualityMusicList.html',
})
export class HighqualityMusicListPage implements OnInit{
    @ViewChild('highqualityMusicListNav') highqualityMusicListNav
    hqMusicList:Array<any>=[]
    constructor(
        public loadingCtrl:LoadingController,
        public modalCtrl:ModalController,
        private http:HttpService,
    ) {

    }

    ngOnInit() {
        this.highqualityMusicListNav.setBackButtonText("");
        this.loadHighqualityMusic();
    }

    loadHighqualityMusic(tag:string='全部') {
        let loading = this.loadingCtrl.create({
            content: '正在加载...',
            duration: 10000, //单位是毫秒
        });
        loading.present()

        let promise = this.http.getData({url:"top/playlist/highquality",params:{limit:"10",tag:tag}});
        promise.then(function(res):any{
            this.hqMusicList = res.playlists;
            //this.getPage(this.currentPage);
            loading.dismiss();
        }.bind(this))
    }
}