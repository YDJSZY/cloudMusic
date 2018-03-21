import { Component,OnInit,ViewChild } from '@angular/core';
import { NavController} from 'ionic-angular';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'ranking-list-page',
    segment:'ranking-list'
})
@Component({
    selector:'ranking-list',
    templateUrl: 'rankingList.html',
    styleUrls: ['/rankingList.scss']
})
export class RankingListPage implements OnInit{
    @ViewChild('rankingListNav') rankingListNav
    listData:Array<any>=[
        {bgImg:'/assets/imgs/fast_hot_list.jpg',id:3},
        {bgImg:'/assets/imgs/hot_songs_list.jpg',id:1},
        {bgImg:'/assets/imgs/new_ele_list.jpg',id:4},
        {bgImg:'/assets/imgs/new_songs_list.jpg',id:0},
        {bgImg:'/assets/imgs/self_create_list.jpg',id:2},
        {bgImg:'/assets/imgs/uk_list.jpg',id:5}
    ]
    constructor(public navCtrl: NavController) {

    }

    ngOnInit() {
        this.rankingListNav.setBackButtonText("");
    }

    checkListDetail(id) {
        this.navCtrl.push('ranking-list-detail-page',{id:id})
    }
}