import { Component,OnInit,ViewChild } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { HttpService } from '../../../../../providers/httpService';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'ranking-list-detail-page',
    segment:'ranking-list-detail'
})
@Component({
    selector:'ranking-list-detail',
    templateUrl: 'rankingListDetail.html',
    styleUrls: ['/rankingListDetail.scss'],
    providers:[HttpService]
})
export class RankingListDetailPage implements OnInit{
    @ViewChild('rankingListDetailNav') rankingListDetailNav
    musicListInfo:any = {}
    constructor(public navCtrl: NavController,public http:HttpService,public navParams:NavParams) {

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
            this.musicListInfo = res.playlist
        }.bind(this))
    }
}