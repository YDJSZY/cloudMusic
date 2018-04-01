/**
 * Created by luwenwei on 18/3/10.
 */
import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpService } from '../../../../providers/httpService';
import {IonicPage,NavController,LoadingController} from "ionic-angular";
import { RootViewCoverService } from '../../provider/eventEmitService';

@IonicPage({
    name : 'radio-page',
    segment:'radio-page'
})
@Component({
    selector:'radio',
    templateUrl: './radio.html',
    styles:['./radio.scss']
})
export class RadioPage implements OnInit{
    @ViewChild('slideBanners') slideBanners
    banners:Array<any> = []
    recommendRadio:Array<any> = []
    audioBook:Array<any> = []
    knowledgeAbility:Array<any> = []
    businessRadio:Array<any> = []
    historyRadio:Array<any> = []
    loading:any
    getDataSuccess:boolean = false
    constructor(
        public http:HttpService,
        public navCtrl:NavController,
        public rootViewCoverService:RootViewCoverService,
        public loadingCtrl:LoadingController
    ) {
    }

    ngOnInit() {
        this.showLoading()
        this.getData();
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

        let recommendRadioPromise = this.http.getData({url:"dj/recommend"});

        let audioBookPromise = this.http.getData({url:"dj/recommend/type?type=10001"});

        let knowledgePromise = this.http.getData({url:"dj/recommend/type?type=453050"});

        let businessPromise = this.http.getData({url:"dj/recommend/type?type=453051"});

        let historyRadioPromise = this.http.getData({url:"dj/recommend/type?type=11"});

        Promise.all([
            bannersPromise,
            recommendRadioPromise,
            audioBookPromise,
            knowledgePromise,
            businessPromise,
            historyRadioPromise
        ]).then(function (res):any{
            this.loading.dismiss();
            this.banners = res[0].banners;
            this.recommendRadio = res[1].djRadios;
            this.audioBook = res[2].djRadios;
            this.knowledgeAbility = res[3].djRadios;
            this.businessRadio = res[4].djRadios;
            this.historyRadio = res[5].djRadios;
            this.getDataSuccess = true;
        }.bind(this))
    }

    ionViewDidEnter() {
        if(this.slideBanners) {
            this.slideBanners.startAutoplay();
        }
    }

    ionViewWillLeave(){
        this.slideBanners.stopAutoplay();/*当切换到别的页面时暂停轮播，不然待会回来不会自动轮播，不知道为什么*/
    }

    showRadioType() {
        this.rootViewCoverService.rootViewCover.emit({component:'radio-type-page'});
    }

    radioDetail(id) {
        this.rootViewCoverService.rootViewCover.emit({component:'radio-detail-page',params:{id:id}});
    }
}