/**
 * Created by luwenwei on 18/3/10.
 */
import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpService } from '../../../../providers/httpService';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'radio-page',
    segment:'radio-page'
})
@Component({
    selector:'radio',
    templateUrl: './radio.html'
})
export class RadioPage implements OnInit{
    @ViewChild('slideBanners') slideBanners
    banners:Array<any> = []
    constructor(
        public http:HttpService
    ) {
    }

    ngOnInit() {
        let bannersPromise = this.http.getData({url:"banner"});
        bannersPromise.then((res):any=>{
            this.banners = res.banners;
        })
    }

    ionViewDidEnter() {
        if(this.slideBanners) {
            this.slideBanners.startAutoplay();
        }
    }

    ionViewWillLeave(){
        this.slideBanners.stopAutoplay();/*当切换到别的页面时暂停轮播，不然待会回来不会自动轮播，不知道为什么*/
    }
}