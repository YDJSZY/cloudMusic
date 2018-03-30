import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpService } from '../../../../../providers/httpService';
import {IonicPage,NavController,NavParams} from "ionic-angular";
import { RootViewCoverService } from '../../../provider/eventEmitService';

@IonicPage({
    name : 'play-radio-page',
    segment:'play-radio-page'
})
@Component({
    selector:'play-radio',
    templateUrl: './playRadio.html',
    styleUrls:['/playRadio.scss']
})
export class PlayRadioPage implements OnInit{
    radioPrograms:Array<any> = []
    currentRadioIndex:number = 0
    radioData:any = {}
    musicUrl:string = ''
    playingMusic:boolean = false
    constructor(
        public navCtrl:NavController,
        public rootViewCoverService:RootViewCoverService,
        public http:HttpService,
        public navParams:NavParams
    ) {

    }

    ngOnInit() {
        this.radioPrograms = this.navParams.get('data');
        this.currentRadioIndex = this.navParams.get('index');
        this.radioData = this.radioPrograms[this.currentRadioIndex];
        this.getRadioUrl(this.radioData.mainSong.id)
        console.log(this.radioData)
    }

    getRadioUrl(id:number) {
        let promise = this.http.getData({url:'music/url',params:{id:id}})
        promise.then(function (res):any{
            this.musicUrl = res.data[0].url;
        }.bind(this))
    }

    changePlayStatus(value) {
        this.playingMusic = value
    }

    switchMusic(type) {
        if(type === 'next') {
            let nextIndex = ++this.currentRadioIndex;
            if(nextIndex >= this.radioPrograms.length) nextIndex = this.currentRadioIndex = 0;
            this.radioData = this.radioPrograms[nextIndex];
        }else{
            let previousIndex = --this.currentRadioIndex;
            if(previousIndex < 0) previousIndex = this.currentRadioIndex = this.radioPrograms.length - 1;
            this.radioData = this.radioPrograms[previousIndex];
        }
        this.getRadioUrl(this.radioData.mainSong.id);
    }

    showComment() {

    }
}