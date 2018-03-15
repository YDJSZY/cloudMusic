import { Component,OnInit,ViewChild } from '@angular/core';
import { HttpService } from '../../../../../providers/httpService';

@Component({
    templateUrl: 'singlePlay.html',
    styleUrls:['/style.scss']
})
export class SinglePlayPage implements OnInit{
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