/**
 * Created by luwenwei on 18/3/18.
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../../../../providers/httpService';
import { RootViewCoverService } from '../../../provider/eventEmitService';
import {IonicPage,LoadingController} from "ionic-angular";

@IonicPage({
    name : 'day-rcmd-music-page',
    segment:'everyDayRecommendMusic',
    defaultHistory: ['discover-music-page']/*默认路由历史记录,如果不设置,当别人通过url进入本页面时,左上角不会有返回按钮*/
})
@Component({
    selector:'day-rcmd-music',
    templateUrl: 'everyDayRecommendMusic.html',
    providers:[HttpService],
    styleUrls: ['./style.scss']
})
export class EveryDayRecommendMusicPage implements OnInit{
    @ViewChild('dayRcmdMusicNav') dayRcmdMusicNav
    dayRcmdMusicList:Array<any>=[]
    constructor(
        public loadingCtrl:LoadingController,
        private http:HttpService,
        private rootViewCoverService:RootViewCoverService
    ) {
        
    }
    
    ngOnInit() {
        this.dayRcmdMusicNav.setBackButtonText("");
        this.getDayRcmdMusic();
    }

    getDayRcmdMusic() {
        let loading = this.loadingCtrl.create({
            content: '正在加载...',
            duration: 10000, //单位是毫秒
        });
        loading.present()
        let promise = this.http.getData({url:'recommend/songs'});
        promise.then(function(res):any{
            this.dayRcmdMusicList = res.recommend;
            loading.dismiss();
        }.bind(this))
    }

    playMusic($index) {
        this.rootViewCoverService.globalRootViewCover.emit({component:'play-music-page',params:{data:this.dayRcmdMusicList,index:$index}});
    }
}