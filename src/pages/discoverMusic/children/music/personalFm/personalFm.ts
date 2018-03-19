/**
 * Created by luwenwei on 18/3/18.
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../../../../providers/httpService';
import { RootViewCoverService } from '../../../provider/eventEmitService';
import {IonicPage,LoadingController} from "ionic-angular";

@IonicPage({
    name : 'personal-fm-page'
})
@Component({
    selector:'personal-fm-page',
    templateUrl: 'personalFm.html',
    providers:[HttpService],
    styleUrls: ['/style.scss']
})
export class PersonalFmPage implements OnInit{
    @ViewChild('personalFmNav') personalFmNav
    personalFmData:any={}
    fmMusicData:any={}
    offset:number=0
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
            this.personalFmData = res.data[0];
            this.getMusicUrl(this.personalFmData.id);
            loading.dismiss();
        }.bind(this))
    }

    getMusicUrl(id) {
        let promise = this.http.getData({url:'music/url',params:{id:id}});
        promise.then(function(res):any{
            this.fmMusicData = res.data[0];
            this.setMusicAudio()
        }.bind(this))
    }

    setMusicAudio() {
        let media:any;
        media = document.getElementById('wy_fm_music')
        media.src = 'http://music.163.com/song/media/outer/url?id=' + this.fmMusicData.id + '.mp3';
        media.load();
        media.play();
        media.addEventListener('pause',()=>{

        });
        media.addEventListener('play',()=>{

        });
    }
}