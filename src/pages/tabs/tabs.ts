/**
 * Created by luwenwei on 18/3/10.
 */
import { Component,ViewChild,OnInit } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import { RootViewCoverService } from '../discoverMusic/provider/eventEmitService';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'tabs-page',
    segment : 'tab'
})
@Component({
    selector:'tabMain',
    templateUrl: 'tabs.html',
})
export class TabsPage implements OnInit{
    // this tells the tabs component which Pages
    // should be each tab's root Page
    @ViewChild('globalRootNav') nav: NavController
    tab1Root:any = 'discover-music-page';
    tab2Root:any = 'my-music-page';
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