/**
 * Created by luwenwei on 18/3/18.
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../../../../providers/httpService';
import { RootViewCoverService } from '../../../provider/eventEmitService';
import {IonicPage,LoadingController} from "ionic-angular";

@IonicPage({
    name : 'personal-fm-page',
    segment:'personalFm',
    defaultHistory: ['discover-music-page']
})
@Component({
    selector:'personal-fm-page',
    templateUrl: 'personalFm.html',
    providers:[HttpService],
    styleUrls: ['./style.scss']
})
export class PersonalFmPage implements OnInit{
    @ViewChild('personalFmNav') personalFmNav
    musicUrl:string
    personalFmData:any={}
    personalFmDataList:Array<any>=[]
    fmMusicData:any={}
    offset:number=0
    currentMusicIndex:number=0
    constructor(
        public loadingCtrl:LoadingController,
        private http:HttpService,
        private rootViewCoverService:RootViewCoverService
    ) {
        
    }
    
    ngOnInit() {
        this.personalFmNav.setBackButtonText("");
        this.getPersonalFm();
    }

    getPersonalFm() {
        let loading = this.loadingCtrl.create({
            content: '正在加载...',
            duration: 10000, //单位是毫秒
        });
        loading.present()
        let promise = this.http.getData({url:'personal_fm',params:{offset:this.offset}});
        promise.then(function(res):any{
            this.personalFmDataList = res.data;
            this.personalFmData = this.personalFmDataList[this.currentMusicIndex];
            this.getMusicUrl();
            loading.dismiss();
        }.bind(this))
    }

    getMusicUrl() {
        let id = this.personalFmData.id;
        let promise = this.http.getData({url:'music/url',params:{id:id}});
        promise.then(function(res):any{
            this.fmMusicData = res.data[0];
            this.musicUrl = 'http://music.163.com/song/media/outer/url?id=' + this.fmMusicData.id + '.mp3';
        }.bind(this))
    }

    switchMusic(type) {
        if(type === 'next') {
            let nextIndex = ++this.currentMusicIndex;
            if(nextIndex >= this.personalFmDataList.length) nextIndex = this.currentMusicIndex = 0;
            this.personalFmData = this.personalFmDataList[nextIndex];
        }else{
            let previousIndex = --this.currentMusicIndex;
            if(previousIndex < 0) previousIndex = this.currentMusicIndex = this.personalFmDataList.length - 1;
            this.personalFmData = this.personalFmDataList[previousIndex];
        }
        this.getMusicUrl();
    }
}