/**
 * Created by luwenwei on 18/3/10.
 */
import { Component,OnInit,ViewChild } from '@angular/core';
import { HttpService } from '../../providers/httpService';
import { NavController, NavParams } from 'ionic-angular';
import { MoreMusicListPage } from './tabs/music/moreMusicList.component';
import { DiscoverRootPage} from './root';

@Component({
    selector:'discover-music',
    templateUrl: 'discoverMusic.html',
    providers:[HttpService]
})
export class DiscoverMusicPage implements OnInit{
    // this tells the tabs component which Pages
    // should be each tab's root Page
    @ViewChild('myNav') nav: NavController
    rootPage: any =  DiscoverRootPage
    constructor(private http:HttpService) {
        this.http = http;
    }

    ngOnInit() {
        let loginPromise = this.http.getData({url:"login/cellphone/",params:{phone:"18649685236",password:"1314520ZY"}});
        loginPromise.then(()=>{}).catch((e)=>{console.error(e)})
    }
}