import { Component,OnInit,ViewChild } from '@angular/core';
import { HttpService } from '../../../../../providers/httpService';
import { NavController,NavParams,LoadingController } from 'ionic-angular';

@Component({
    templateUrl: 'recommendMusicListDetail.html',
    styleUrls:['/style.scss']
})
export class RcmdMusicListDetailPage implements OnInit{
    @ViewChild('rcmdMusicListNav') rcmdMusicListNav
    musicList:Array<any>=[]
    musicListInfo:any={}
    constructor(
        private http:HttpService,
        private navCtrl:NavController,
        private navParams:NavParams,
        private loadingCtrl:LoadingController
    ) {

    }

    ngOnInit() {
        this.musicListInfo = this.navParams.get("data");
        this.rcmdMusicListNav.setBackButtonText("");
        this.getMusicList();
    }

    getMusicList() {
        this.showLoading();
        let promise = this.http.getData({url:"playlist/detail",params:{id:this.musicListInfo.id}});
        promise.then(function (res):any{
            this.loading.dismiss();
            this.musicList = res.result;
        }.bind(this)).catch((e)=>{console.error(e)});
    }

    showLoading() {
        this.loading = this.loadingCtrl.create({
            content: '正在加载...',
            duration: 10000, //单位是毫秒
        });
        this.loading.present()
    }

    playMusic(music) {
        console.log(music)
    }
}