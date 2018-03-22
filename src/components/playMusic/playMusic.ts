/**
 * Created by luwenwei on 18/3/15.
 */
import { Component,OnInit,ViewChild,AfterViewInit,ElementRef } from '@angular/core';
import { HttpService } from '../../providers/httpService';
import { NavController,NavParams } from 'ionic-angular';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'play-music-page'
})
@Component({
    templateUrl: 'playMusic.html',
    styleUrls:['./style.scss'],
    providers:[HttpService]
})
export class PlayMusicPage implements OnInit,AfterViewInit{
    @ViewChild('playMusicNav') playMusicNav
    musicData:any
    musicList:Array<any>
    musicUrlData:any
    playingMusic:boolean = false
    musicUrl:string
    currentMusicIndex:number
    constructor(
        private http:HttpService,
        private navCtrl:NavController,
        private navParams:NavParams
    ) {

    }

    ngOnInit() {
        this.playMusicNav.setBackButtonText("");
        this.musicList = this.navParams.get('data');
        this.currentMusicIndex = this.navParams.get('index')
        this.musicData = this.musicList[this.currentMusicIndex];
        this.getMusicUrl();
    }

    ngAfterViewInit() {
    }

    changePlayStatus(value) {
        this.playingMusic = value
    }

    setMusicAudio() {
        this.musicUrl = 'http://music.163.com/song/media/outer/url?id=' + this.musicUrlData.id + '.mp3';
    }

    getMusicUrl() {
        let promise = this.http.getData({url:"music/url",params:{id:this.musicData.id}});
        promise.then(function (res):any{
            this.musicUrlData = res.data[0];
            this.setMusicAudio();
        }.bind(this)).catch((e)=>{console.error(e)});
    }

    switchMusic(type) {
        if(type === 'next') {
            let nextIndex = ++this.currentMusicIndex;
            if(nextIndex >= this.musicList.length) nextIndex = this.currentMusicIndex = 0;
            this.musicData = this.musicList[nextIndex];
        }else{
            let previousIndex = --this.currentMusicIndex;
            if(previousIndex < 0) previousIndex = this.currentMusicIndex = this.musicList.length - 1;
            this.musicData = this.musicList[previousIndex];
        }
        this.getMusicUrl();
    }
}