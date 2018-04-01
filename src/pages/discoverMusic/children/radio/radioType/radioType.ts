import { Component,OnInit,ViewChild } from '@angular/core';
import { NavController,LoadingController,IonicPage } from 'ionic-angular';
import { HttpService } from '../../../../../providers/httpService';

@IonicPage({
    name : 'radio-type-page',
    segment:'radio-type-page'
})
@Component({
    selector:'radio-type',
    templateUrl: './radioType.html',
    styles:['./radioType.scss']
})
export class RadioTypePage implements OnInit{
    @ViewChild('radioTypeNav') radioTypeNav
    radioAllType:Array<any> = []
    constructor(
        public navCtrl:NavController,
        public loadingCtrl:LoadingController,
        public http:HttpService
    ) {

    }

    ngOnInit() {
        this.radioTypeNav.setBackButtonText("");
        this.getCategory()
    }

    getCategory() {
        let promise = this.http.getData({url:'dj/catelist'});
        promise.then(function (res) :any{
            this.radioAllType = res.categories;
        }.bind(this))
    }
}