import { Component } from '@angular/core';
import {IonicPage,NavController} from "ionic-angular";

@IonicPage({
    name : 'my-music',
    //segment:'musics'
})
@Component({
    selector:'myMusic',
    templateUrl: './myMusic.html'
})
export class MyMusicPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    constructor(public navCtrl:NavController) {
    }

    goto() {
        this.navCtrl.push('more-music-list')
    }
}