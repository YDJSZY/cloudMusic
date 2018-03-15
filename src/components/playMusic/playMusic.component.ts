/**
 * Created by luwenwei on 18/3/15.
 */
import { Component,OnInit,ViewChild } from '@angular/core';
import { HttpService } from '../../providers/httpService';
import { NavController,NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'playMusic.html',
    styleUrls:['/style.scss']
})
export class PlayMusicPage implements OnInit{
    @ViewChild('playMusicNav') playMusicNav
    constructor(
        private http:HttpService,
        private navCtrl:NavController,
        private navParams:NavParams
    ) {

    }

    ngOnInit() {
    }
}