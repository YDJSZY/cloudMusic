/**
 * Created by luwenwei on 18/3/24.
 */
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { HttpService } from '../../providers/httpService';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'play-mv-page',
    segment:'play-mv-page'
})
@Component({
    selector:'play-mv',
    templateUrl: 'playMV.html',
    providers:[HttpService],
    styleUrls: ['/playMV.scss']
})
export class PlayMVPage implements OnInit{
    @ViewChild('musicMV') musicMV:ElementRef
    mvUrlData:Object
    mvType:string='240'
    constructor(
        public http:HttpService,
        private navCtrl:NavController,
        private navParams:NavParams
    ) {
        
    }
    
    ngOnInit() {
        let mvId = this.navParams.get('mvId');
        this.getMvUrl(mvId);
    }

    getMvUrl(mvId) {
        let promise = this.http.getData({url:'mv',params:{mvid:mvId}});
        promise.then(function (res):any{
            this.mvUrlData = res.data.brs
           /* this.musicMV.nativeElement.src = 'http://localhost:8101/mv/url?url=' + this.mvUrlData[this.mvType];
            this.musicMV.nativeElement.load();
            this.musicMV.nativeElement.play();*/
        }.bind(this))
    }

    playMv() {
        this.musicMV.nativeElement.play();
    }

    goBack(e) {
        e.stopPropagation();
        this.navCtrl.pop();
    }
}