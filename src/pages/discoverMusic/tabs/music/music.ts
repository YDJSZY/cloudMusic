/**
 * Created by luwenwei on 18/3/10.
 */
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../providers/httpService';

@Component({
    selector:'music',
    templateUrl: 'music.html',
    providers:[HttpService],
    styleUrls: ['/music.scss']
})
export class MusicPage implements OnInit{
    // this tells the tabs component which Pages
    // should be each tab's root Page
    banners: any
    introMusicList: Array<any>
    constructor(private http:HttpService) {
        this.http = http;
    }

    ngOnInit() {
        let bannersPromise = this.http.getData({url:"banner"});
        bannersPromise.then(function (res):any{
            this.banners = res.banner;
        }.bind(this));
        let recommendPromise = this.http.getData({url:"recommend/resource"});
        recommendPromise.then(function (res):any{
            this.introMusicList = res.recommend;
        }.bind(this));
    }
}