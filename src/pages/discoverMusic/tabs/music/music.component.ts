/**
 * Created by luwenwei on 18/3/10.
 */
import { Component, OnInit } from '@angular/core';
import { NavController, App, ViewController } from 'ionic-angular';
import { HttpService } from '../../../../providers/httpService';
import { MoreMusicListPage } from './moreMusicList.component';

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
    constructor(public nav: NavController,public appCtrl:App,public viewCtrl:ViewController,private http: HttpService) {
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
        //this.viewCtrl.dismiss();
        //this.appCtrl.getRootNav().push(MoreMusicListPage);
        this.nav.push(MoreMusicListPage);
    }
}