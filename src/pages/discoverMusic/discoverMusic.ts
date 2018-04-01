/**
 * Created by luwenwei on 18/3/10.
 */
import { Component,OnInit,ViewChild } from '@angular/core';
import { HttpService } from '../../providers/httpService';
import { NavController } from 'ionic-angular';
import { RootViewCoverService } from './provider/eventEmitService';
import { AuthService } from '../../providers/authService';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'discover-music-page',
    segment:'discover-music-page'
})
@Component({
    selector:'discover-music',
    templateUrl: 'discoverMusic.html',
    styles:['./discoverMusic.scss'],
    providers:[HttpService]
})
export class DiscoverMusicPage implements OnInit{
    // this tells the tabs component which Pages
    // should be each tab's root Page
    musicTab:string = 'd-music-page'
    videosTab:string = 'videos-page'
    radioTab:string = 'radio-page'
    constructor(
        private http:HttpService,
        private rootViewCoverService:RootViewCoverService,
        private navCtrl:NavController,
        private authService:AuthService
        ) {
    }

    ngOnInit() {
        this.rootViewCoverService.rootViewCover.subscribe((data)=>{
            this.currentViewFade(data)
        })/*订阅覆盖当前组件事件，该服务必须是单例*/
    }

    currentViewFade(data) {
        this.navCtrl.push(data.component,{data:data.params});/*component组件会覆盖当前跟组件*/
    }

    ionViewCanEnter() {
        let loginState = this.authService.getLoginState();
        if(loginState){
            return true;
        }
        this.rootViewCoverService.setRoot.emit({component:'login-page'})
        return false;
    }
}