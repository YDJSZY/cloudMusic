import { Component,OnInit,ViewChild } from '@angular/core';
import { HttpService } from '../../../../../providers/httpService';
import { NavController,NavParams,LoadingController } from 'ionic-angular';
import { RootViewCoverService } from '../../../provider/eventEmitService';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'recd-music-list-page',
    segment:'recommendMusicListDetail'
})
@Component({
    templateUrl: 'recommendMusicListDetail.html',
    styles:['./style.scss'],
    providers:[HttpService]
})
export class RcmdMusicListDetailPage implements OnInit{
    @ViewChild('rcmdMusicListNav') rcmdMusicListNav
    musicList:any={}
    musicListInfo:any={}
    loading:any
    constructor(
        private http:HttpService,
        private navCtrl:NavController,
        private navParams:NavParams,
        private loadingCtrl:LoadingController,
        private rootViewCoverService:RootViewCoverService
    ) {

    }

    ngOnInit() {
        this.musicListInfo = this.navParams.get("data");
        console.log(this.musicListInfo)
        this.rcmdMusicListNav.setBackButtonText("");
        this.getMusicList();
    }

    getMusicList() {
        this.showLoading();
        let promise = this.http.getData({url:"playlist/detail",params:{id:this.musicListInfo.id,limit:20}});
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

    playMusic(index) {
        //this.navCtrl.push('play-music-page',{data:this.musicList.tracks,index:index})
        this.rootViewCoverService.globalRootViewCover.emit({component:'play-music-page',params:{data:this.musicList.tracks,index:index}});
    }
}