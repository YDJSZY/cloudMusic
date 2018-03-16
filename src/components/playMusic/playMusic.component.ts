/**
 * Created by luwenwei on 18/3/15.
 */
import { Component,OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { HttpService } from '../../providers/httpService';
import { NavController,NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'playMusic.html',
    styleUrls:['/style.scss'],
    providers:[HttpService]
})
export class PlayMusicPage implements OnInit,AfterViewInit{
    @ViewChild('playMusicNav') playMusicNav
    musicData:any
    musicUrlData:any
    playingMusic:boolean = false
    constructor(
        private http:HttpService,
        private navCtrl:NavController,
        private navParams:NavParams
    ) {

    }

    ngOnInit() {
        this.playMusicNav.setBackButtonText("");
        this.musicData = this.navParams.get('data');
        console.log(this.musicData)
        this.getMusicUrl();
    }

    ngAfterViewInit() {

    }

    setMusicAudio() {
        let media:any;
        media = document.getElementById('wy_music')
        media.src = 'http://music.163.com/song/media/outer/url?id=' + this.musicUrlData.id + '.mp3';
        media.load();
        media.play();
        this.playingMusic = true;
        media.addEventListener('pause',()=>{
            this.playingMusic = false;
        });
        media.addEventListener('play',()=>{
            this.playingMusic = true;
        });
    }

    getMusicUrl() {
        let promise = this.http.getData({url:"music/url",params:{id:this.musicData.id}});
        promise.then(function (res):any{
            this.musicUrlData = res.data[0];
            this.setMusicAudio();
        }.bind(this)).catch((e)=>{console.error(e)});
    }
}