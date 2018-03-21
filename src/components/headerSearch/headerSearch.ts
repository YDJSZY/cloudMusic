import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'header-search',
    templateUrl: 'headerSearch.html'
})
export class HeaderSearchComponent {


    constructor(private navCtrl:NavController) {
    }

    searchMusic() {
        this.navCtrl.push('search-page');
    }

}
