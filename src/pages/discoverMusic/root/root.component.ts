/**
 * Created by luwenwei on 18/3/12.
 */
import { Component } from '@angular/core';
import { MusicPage } from '../tabs/music/music.component';
import { RadioPage } from '../tabs/radio/radio.component';
import { VideosPage } from '../tabs/videos/videos.component';
import { HttpService } from '../../../providers/httpService';
import { NavController } from 'ionic-angular';

@Component({
    templateUrl: './root.html',
    providers:[HttpService],
    styleUrls:['/root.scss']
})
export class DiscoverRootPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    musicTab = MusicPage;
    hobbyTab = VideosPage;
    radioTab = RadioPage;
    constructor(public nav:NavController,private http:HttpService) {
        this.http = http;
    }
}