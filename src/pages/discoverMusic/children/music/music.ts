/**
 * Created by luwenwei on 18/3/10.
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService } from '../../../../providers/httpService';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'd-music-page',
    segment:'d-music-page'
})
@Component({
    selector:'music',
    templateUrl: 'music.html',
    providers:[HttpService],
    styleUrls: ['/music.scss']
})
export class MusicPage implements OnInit{
    @ViewChild('slideBanners') slideBanners
    banners: Array<any>=[]
    introMusicList: Array<any>=[]
    singlePlayList: Array<any>=[]
    recommendMV: Array<any>=[]
    constructor(
        public nav: NavController,
        private http: HttpService
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

        let recommendMVPromise = this.http.getData({url:"personalized/mv"});
        recommendMVPromise.then(function (res):any{
            this.recommendMV = res.result;
        }.bind(this)).catch((e)=>{console.error(e)});

    }

    ionViewWillEnter() {

    }

    ionViewDidEnter() {
        if(this.slideBanners) {
            this.slideBanners.startAutoplay();
        }
    }

    ionViewWillLeave(){
        this.slideBanners.stopAutoplay();/*当切换到别的页面时暂停轮播，不然待会回来不会自动轮播，不知道为什么*/
    }

    checkMoreMusicList() {
        this.nav.push('more-music-list')
        //this.rootViewCoverService.rootViewCover.emit({component:'more-music-list'});
    }/*查看更多推荐歌单*/

    checkMoreSinglePlay() {
        this.nav.push('more-single-play-page');
    }/*查看更多独家放送*/

    musicListDetail(list) {/*查看某歌单具体歌曲列表*/
        let obj = {id:list.id,avatarUrl:list.creator.avatarUrl,nickname:list.creator.nickname,name:list.name,picUrl:list.picUrl,playcount:list.playcount}
        this.nav.push('recd-music-list-page',{data:obj});
    }

    dayRecommendMusic() {/*查看每日推荐歌曲*/
        this.nav.push('day-rcmd-music-page');
    }

    personalFm() {/*查看私人FM*/
        this.nav.push('personal-fm-page');
    }

    rankingList() {
        this.nav.push('ranking-list-page');
    }

    searchMusic() {
        this.nav.push('search-page');
    }

    playMv(mvId) {/*播放mv*/
        this.nav.push('play-mv-page',{mvId:mvId});
    }
}