/**
 * Created by luwenwei on 18/3/10.
 */
import { Component,OnInit } from '@angular/core';
import { NavController,LoadingController,IonicPage } from 'ionic-angular';
import { HttpService } from '../../../../providers/httpService';
import { RootViewCoverService } from '../../provider/eventEmitService';

@IonicPage({
    name : 'videos-page',
    segment:'videos-page'
})
@Component({
    selector:'videos',
    templateUrl: './videos.html',
    styleUrls:['/videos.scss']
})
export class VideosPage implements OnInit{
    // this tells the tabs component which Pages
    // should be each tab's root Page
    videosData:Array<any> = []
    constructor(
        public http:HttpService,
        public navCtrl:NavController,
        public loadingCtrl:LoadingController,
        private rootViewCoverService:RootViewCoverService
    ) {
    }

    ngOnInit() {
        this.getVideos();
    }

    getVideos(refresher = null) {
        let loading = this.loadingCtrl.create({
            content: '正在加载数据...',
            duration: 10000, //单位是毫秒
        });
        if(!refresher) loading.present();
        let videoPromise = this.http.getData({url:'mv/first',params:{limit:20}});
        videoPromise.then(function (res):any{
            loading.dismiss();
            if(refresher) refresher.complete();
            this.videosData = res.data;
        }.bind(this))
    }

    playMv(mvId) {
        this.rootViewCoverService.globalRootViewCover.emit({component:'play-mv-page',params:{mvId:mvId}})
    }

    doRefresh(refresher) {
        this.getVideos(refresher)
    }
}