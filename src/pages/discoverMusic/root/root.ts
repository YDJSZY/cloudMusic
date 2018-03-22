/**
 * Created by luwenwei on 18/3/12.
 */
import { Component } from '@angular/core';
import { HttpService } from '../../../providers/httpService';
import { NavController } from 'ionic-angular';
import { RootViewCoverService } from '../provider/eventEmitService';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'discover-root-page'
})
@Component({
    templateUrl: './root.html',
    providers:[HttpService],
    styleUrls:['./root.scss']
})
export class DiscoverRootPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    musicTab = 'd-music-page';/*发现音乐-音乐*/
    /*hobbyTab = VideosPage;
    radioTab = RadioPage;*/
    constructor(
        public nav:NavController,
        public rootViewCoverService:RootViewCoverService,
        private http:HttpService
    ) {
        this.http = http;
    }

    searchMusic() {
        this.rootViewCoverService.rootViewCover.emit({component:'search-page'});
    }
}