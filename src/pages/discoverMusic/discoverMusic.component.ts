/**
 * Created by luwenwei on 18/3/10.
 */
import { Component,OnInit,ViewChild } from '@angular/core';
import { HttpService } from '../../providers/httpService';
import { NavController } from 'ionic-angular';
import { DiscoverRootPage} from './root';
import { RootViewCoverService } from './provider/eventEmitService';

@Component({
    selector:'discover-music',
    templateUrl: 'discoverMusic.html',
    providers:[HttpService]
})
export class DiscoverMusicPage implements OnInit{
    // this tells the tabs component which Pages
    // should be each tab's root Page
    @ViewChild('discoverMusicNav') nav: NavController
    rootPage: any =  DiscoverRootPage
    constructor(private http:HttpService,private rootViewCoverService:RootViewCoverService) {
        this.http = http;
    }

    ngOnInit() {
        this.rootViewCoverService.rootViewCover.subscribe((component)=>{
            this.currentViewFade(component)
        })/*订阅覆盖当前组件事件，该服务必须是单例*/

        let loginPromise = this.http.getData({url:"login/cellphone/",params:{phone:"18649685236",password:"1314520ZY"}});
        loginPromise.then(()=>{}).catch((e)=>{console.error(e)});
    }

    currentViewFade(component) {
        this.nav.push(component);/*component组件会覆盖当前跟组件*/
    }
}