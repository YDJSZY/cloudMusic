/**
 * Created by luwenwei on 18/3/12.
 */
import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs.component';
@Component({
    templateUrl: './root.html',
})
export class GlobalRootPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    @ViewChild('globalRootNav') nav: NavController
    rootPage: any =  TabsPage
    constructor() {

    }
}