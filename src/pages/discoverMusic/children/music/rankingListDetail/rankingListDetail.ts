import { Component,OnInit,ViewChild } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { HttpService } from '../../../../../providers/httpService';
import { RootViewCoverService } from '../../../provider/eventEmitService';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'ranking-list-detail-page',
    segment:'ranking-list-detail'
})
@Component({
    selector:'ranking-list-detail',
    templateUrl: 'rankingListDetail.html',
    styles: ['./rankingListDetail.scss'],
    providers:[HttpService]
})
export class RankingListDetailPage implements OnInit{
    @ViewChild('rankingListDetailNav') rankingListDetailNav
    musicListInfo:any = {}
    coverImg:Object = {}
    constructor(
        public navCtrl: NavController,
        public http:HttpService,
        public navParams:NavParams,
        public rootViewCoverService:RootViewCoverService
    ) {

    }

    ngOnInit() {
        let idx:number;
        this.rankingListDetailNav.setBackButtonText("");
        idx = this.navParams.get('id');
        this.getMusicList(idx);
    }

    getMusicList(id) {
        let promise = this.http.getData({url:'top/list',params:{idx:id}});
        promise.then(function (res):any{
            this.musicListInfo = res.playlist;
            this.setCoverImgStyle();
        }.bind(this))
    }

    setCoverImgStyle() {
        this.coverImg = {
            'background':`url('${this.musicListInfo.coverImgUrl}') no-repeat`,
            'background-size':'100% 100%'
        }
    }

    playMusic(index) {
        this.rootViewCoverService.globalRootViewCover.emit({component:'play-music-page',params:{data:this.musicListInfo.tracks,index:index}});
    }
}