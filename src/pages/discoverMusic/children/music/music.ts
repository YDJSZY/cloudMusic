/**
 * Created by luwenwei on 18/3/10.
 */
import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { HttpService } from '../../../../providers/httpService';
import { RootViewCoverService } from '../../provider/eventEmitService';
import {IonicPage,Content} from "ionic-angular";

@IonicPage({
    name : 'd-music-page',
    segment:'d-music-page'
})
@Component({
    selector:'music',
    templateUrl: 'music.html',
    providers:[HttpService],
    styles: ['./music.scss']
})
export class MusicPage implements OnInit,AfterViewInit{
    @ViewChild('slideBanners') slideBanners
    @ViewChild(Content) content: Content;
    getDataSuccess:boolean = false
    banners: Array<any>=[]
    introMusicList: Array<any>=[]
    singlePlayList: Array<any>=[]
    recommendMV: Array<any>=[]
    loading:any
    constructor(
        public nav: NavController,
        public loadingCtrl: LoadingController,
        private http: HttpService,
        private rootViewCoverService: RootViewCoverService
    ) {
        this.http = http;
    }

    ngOnInit() {
        this.showLoading();
        this.getData();
    }

    ngAfterViewInit() {
        /*this.contentEle = this.content.getNativeElement()
        let h = this.tabRef.getNativeElement().querySelector('.tabbar').offsetHeight;*/
        setTimeout(()=>{
            this.content.getNativeElement().getElementsByClassName('scroll-content')[0].style.marginTop = 42 + 'px !important'
        },2000)
    }

    showLoading() {
        this.loading = this.loadingCtrl.create({
            content: '正在加载数据...',
            duration: 10000, //单位是毫秒
        });
        this.loading.present()
    }

    getData() {
        let bannersPromise = this.http.getData({url:"banner"});

        let recommendPromise = this.http.getData({url:"recommend/resource"});

        let singlePlayPromise = this.http.getData({url:"personalized/privatecontent"});

        let recommendMVPromise = this.http.getData({url:"personalized/mv"});

        Promise.all([bannersPromise,recommendPromise,singlePlayPromise,recommendMVPromise]).then(function (res):any{
            this.loading.dismiss();
            this.banners = res[0].banners;
            this.introMusicList = res[1].recommend;
            this.singlePlayList = res[2].result;
            this.recommendMV = res[3].result;
            this.getDataSuccess = true;
        }.bind(this))
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
        this.rootViewCoverService.rootViewCover.emit({component:'more-music-list'});
    }/*查看更多推荐歌单*/

    checkMoreSinglePlay() {
        this.rootViewCoverService.rootViewCover.emit({component:'more-single-play-page'})
    }/*查看更多独家放送*/

    musicListDetail(list) {/*查看某歌单具体歌曲列表*/
        let obj = {id:list.id,avatarUrl:list.creator.avatarUrl,nickname:list.creator.nickname,name:list.name,picUrl:list.picUrl,playcount:list.playcount}
        this.rootViewCoverService.rootViewCover.emit({component:'recd-music-list-page',params:obj});
    }

    dayRecommendMusic() {/*查看每日推荐歌曲*/
        this.rootViewCoverService.rootViewCover.emit({component:'day-rcmd-music-page'})
    }

    personalFm() {/*查看私人FM*/
        this.rootViewCoverService.rootViewCover.emit({component:'personal-fm-page'})
    }

    rankingList() {
        this.rootViewCoverService.rootViewCover.emit({component:'ranking-list-page'})
    }

    searchMusic() {
        this.rootViewCoverService.rootViewCover.emit({component:'search-page'})
    }

    playMv(mvId) {/*播放mv*/
        this.rootViewCoverService.globalRootViewCover.emit({component:'play-mv-page',params:{mvId:mvId}})
    }
}