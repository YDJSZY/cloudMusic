/**
 * Created by luwenwei on 18/3/10.
 */
import { Component, OnInit } from '@angular/core';
import { NavController, App, ViewController } from 'ionic-angular';
import { HttpService } from '../../../../providers/httpService';
import { MoreMusicListPage } from './moreMusicList/moreMusicList.component';
import { SinglePlayPage } from './singlePlay/singlePlay.component';
import { RcmdMusicListDetailPage } from './recommendMusicListDetail/recommendMusicListDetail.component';
import { RootViewCoverService } from '../../provider/eventEmitService';

@Component({
    selector:'music',
    templateUrl: 'music.html',
    providers:[HttpService],
    styleUrls: ['/music.scss']
})
export class MusicPage implements OnInit{
    // this tells the tabs component which Pages
    // should be each tab's root Page
    banners: Array<any>=[]
    introMusicList: Array<any>=[]
    singlePlayList: Array<any>=[]
    constructor(
        public nav: NavController,
        public appCtrl:App,
        public viewCtrl:ViewController,
        private http: HttpService,
        private rootViewCoverService:RootViewCoverService
    ) {
        this.http = http;
    }

    ngOnInit() {
        let bannersPromise = this.http.getData({url:"banner"});
        bannersPromise.then(function (res):any{
            this.banners = res.banners;
        }.bind(this)).catch((e)=>{console.error(e)});

        let recommendPromise = this.http.getData({url:"recommend/resource"});
        recommendPromise.then(function (res):any{
            this.introMusicList = res.recommend;
        }.bind(this)).catch((e)=>{console.error(e)});

        let singlePlayPromise = this.http.getData({url:"personalized/privatecontent"});
        singlePlayPromise.then(function (res):any{
            this.singlePlayList = res.result;
        }.bind(this)).catch((e)=>{console.error(e)});

    }

    checkMoreMusicList() {
        this.rootViewCoverService.rootViewCover.emit({component:MoreMusicListPage});
    }

    checkMoreSinglePlay() {
        this.rootViewCoverService.rootViewCover.emit({component:SinglePlayPage});
    }

    musicListDetail(list) {
        let obj = {id:list.id,avatarUrl:list.creator.avatarUrl,nickname:list.creator.nickname,name:list.name,picUrl:list.picUrl,playcount:list.playcount}
        this.rootViewCoverService.rootViewCover.emit({component:RcmdMusicListDetailPage,params:{data:obj}});
    }
}