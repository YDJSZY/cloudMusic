import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpService } from '../../../../../providers/httpService';
import {IonicPage,NavController, NavParams} from "ionic-angular";

@IonicPage({
    name : 'radio-detail-page',
    segment:'radio-detail-page'
})
@Component({
    selector:'radio-detail',
    templateUrl: './radioDetail.html',
    styleUrls:['/radioDetail.scss']
})
export class RadioDetailPage implements OnInit{
    @ViewChild('radioDetailNav') radioDetailNav
    constructor(
        public http:HttpService,
        public navCtrl:NavController,
        public navParams:NavParams
    ) {

    }

    ngOnInit() {
        this.radioDetailNav.setBackButtonText("");
        let id = this.navParams.get('data').id;
        this.getRadioDetail(id);
    }

    getRadioDetail(id) {
        let radioDetailPromise = this.http.getData({'url':'dj/detail?',params:{rid:id}})
    }
}