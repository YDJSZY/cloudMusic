/**
 * Created by luwenwei on 18/3/10.
 */
import { Component,OnInit } from '@angular/core';
import { MusicPage } from './tabs/music/music.component';
import { RadioPage } from './tabs/radio/radio.component';
import { VideosPage } from './tabs/videos/videos.component';
import { HttpService } from '../../providers/httpService';

@Component({
    selector:'discover-music',
    templateUrl: 'discoverMusic.html',
    providers:[HttpService]
})
export class DiscoverMusicPage implements OnInit{
    // this tells the tabs component which Pages
    // should be each tab's root Page
    musicTab = MusicPage;
    hobbyTab = VideosPage;
    radioTab = RadioPage;
    constructor(private http:HttpService) {
        this.http = http;
    }

    ngOnInit() {
        let loginPromise = this.http.getData({url:"login/cellphone/",params:{phone:"18649685236",password:"1314520ZY"}});
        loginPromise.then(()=>{}).catch((e)=>{console.error(e)})
    }
}