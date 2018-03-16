/**
 * Created by luwenwei on 18/3/10.
 */
import { Component,ViewChild,OnInit } from '@angular/core';
import { DiscoverMusicPage } from '../discoverMusic/discoverMusic.component';
import { MyMusicPage } from '../myMusic/myMusic.component';
import { NavController,App } from 'ionic-angular';
import { RootViewCoverService } from '../discoverMusic/provider/eventEmitService';
@Component({
    selector:'tabMain',
    templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit{
    // this tells the tabs component which Pages
    // should be each tab's root Page
    @ViewChild('globalRootNav') nav: NavController
    tab1Root:any = DiscoverMusicPage;
    tab2Root:any = MyMusicPage;
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