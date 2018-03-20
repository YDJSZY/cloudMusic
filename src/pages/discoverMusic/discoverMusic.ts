/**
 * Created by luwenwei on 18/3/10.
 */
import { Component,OnInit,ViewChild } from '@angular/core';
import { HttpService } from '../../providers/httpService';
import { NavController } from 'ionic-angular';
import { RootViewCoverService } from './provider/eventEmitService';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'discover-music-page',
    segment:'discover-music-page'
})
@Component({
    selector:'discover-music',
    templateUrl: 'discoverMusic.html',
    providers:[HttpService]
})
export class DiscoverMusicPage implements OnInit{
    // this tells the tabs component which Pages
    // should be each tab's root Page
    musicTab:any = 'd-music-page'
    constructor(
        private http:HttpService,
        private rootViewCoverService:RootViewCoverService,
        private navCtrl:NavController
        ) {
        this.http = http;
    }

    ngOnInit() {
        this.rootViewCoverService.rootViewCover.subscribe((data)=>{
            this.currentViewFade(data)
        })/*订阅覆盖当前组件事件，该服务必须是单例*/

        let loginPromise = this.http.getData({url:"login/cellphone/",params:{phone:"18649685236",password:"1314520ZY"}});
        loginPromise.then(()=>{}).catch((e)=>{console.error(e)});
    }

    currentViewFade(data) {
        this.navCtrl.push(data.component,data.params);/*component组件会覆盖当前跟组件*/
    }

    searchMusic() {
        this.rootViewCoverService.rootViewCover.emit({component:'search-page'});
    }
}