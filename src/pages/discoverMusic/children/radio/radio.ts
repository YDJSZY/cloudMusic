/**
 * Created by luwenwei on 18/3/10.
 */
import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpService } from '../../../../providers/httpService';
import {IonicPage,NavController} from "ionic-angular";
import { RootViewCoverService } from '../../provider/eventEmitService';

@IonicPage({
    name : 'radio-page',
    segment:'radio-page'
})
@Component({
    selector:'radio',
    templateUrl: './radio.html',
    styleUrls:['/radio.scss']
})
export class RadioPage implements OnInit{
    @ViewChild('slideBanners') slideBanners
    banners:Array<any> = []
    recommendRadio:Array<any> = []
    audioBook:Array<any> = []
    knowledgeAbility:Array<any> = []
    businessRadio:Array<any> = []
    historyRadio:Array<any> = []
    constructor(
        public http:HttpService,
        public navCtrl:NavController,
        public rootViewCoverService:RootViewCoverService
    ) {
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        let bannersPromise = this.http.getData({url:"banner"});
        bannersPromise.then(function(res):any{
            this.banners = res.banners;
        }.bind(this));

        let recommendRadioPromise = this.http.getData({url:"dj/recommend"});
        recommendRadioPromise.then(function (res):any{
            this.recommendRadio = res.djRadios
        }.bind(this));

        let audioBookPromise = this.http.getData({url:"dj/recommend/type?type=10001"});
        audioBookPromise.then(function (res):any{
            this.audioBook = res.djRadios
        }.bind(this));

        let knowledgePromise = this.http.getData({url:"dj/recommend/type?type=453050"});
        knowledgePromise.then(function (res):any{
            this.knowledgeAbility = res.djRadios
        }.bind(this));

        let businessPromise = this.http.getData({url:"dj/recommend/type?type=453051"});
        businessPromise.then(function (res):any{
            this.businessRadio = res.djRadios
        }.bind(this));

        let historyRadioPromise = this.http.getData({url:"dj/recommend/type?type=11"});
        historyRadioPromise.then(function (res):any{
            this.historyRadio = res.djRadios
        }.bind(this));
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