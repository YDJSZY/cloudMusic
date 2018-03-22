import { Component,OnInit,ViewChild } from '@angular/core';
import { HttpService } from '../../../../../providers/httpService';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'more-single-play-page',
    segment:'moreSinglePlay',
    defaultHistory: ['discover-music-page']/*默认路由历史记录,如果不设置,当别人通过url进入本页面时,左上角不会有返回按钮*/
})
@Component({
    templateUrl: 'singlePlay.html',
    styleUrls:['/style.scss'],
    providers:[HttpService]
})
export class MoreSinglePlayPage implements OnInit{
    @ViewChild('singlePlayNav') singlePlayNav
    singlePlayList:Array<any>=[]
    constructor(private http:HttpService) {

    }

    ngOnInit() {
        this.singlePlayNav.setBackButtonText("");
        this.getSinglePlay();
    }

    getSinglePlay() {
        let singlePlayPromise = this.http.getData({url:"personalized/privatecontent"});
        singlePlayPromise.then(function (res):any{
            this.singlePlayList = res.result;
        }.bind(this)).catch((e)=>{console.error(e)});
    }
}