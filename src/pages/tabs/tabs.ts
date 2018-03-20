/**
 * Created by luwenwei on 18/3/10.
 */
import { Component,ViewChild,OnInit } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import { RootViewCoverService } from '../discoverMusic/provider/eventEmitService';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'tabs-page',
    segment : 'tab'/*我把它设置为tabs,发现每次刷新浏览器都会跳到首页,暂不清楚为什么*/
})
@Component({
    selector:'tabMain',
    templateUrl: 'tabs.html',
})
export class TabsPage implements OnInit{
    // this tells the tabs component which Pages
    // should be each tab's root Page
    @ViewChild('globalRootNav') nav: NavController
    discoverMusic:string = 'discover-music-page';
    myMusic:string = 'my-music';
    constructor(
        public appCtrl: App,
        private rootViewCoverService: RootViewCoverService) {

    }

    ngOnInit() {
        this.rootViewCoverService.globalRootViewCover.subscribe((data) => {
            this.currentViewFade(data)
        })
    }

    currentViewFade(data) {
        this.appCtrl.getRootNav().push(data.component,data.params);
    }
}