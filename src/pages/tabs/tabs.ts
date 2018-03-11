/**
 * Created by luwenwei on 18/3/10.
 */
import { Component } from '@angular/core';
import { DiscoverMusicPage } from '../discoverMusic/discoverMusic';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root = DiscoverMusicPage;

    constructor() {

    }
}