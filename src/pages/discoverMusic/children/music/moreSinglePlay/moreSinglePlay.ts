import { Component,OnInit,ViewChild } from '@angular/core';
import { HttpService } from '../../../../../providers/httpService';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'more-single-play-page'
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