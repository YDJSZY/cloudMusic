/**
 * Created by luwenwei on 18/3/13.
 */
import { Component,OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'allMusicListType.html',
    styleUrls:['/style.scss']
})
export class AllMusicListTypePage implements OnInit{
    constructor(private viewCtrl:ViewController){
        
    }

    ngOnInit() {
        
    }

    hideModal() {
        this.viewCtrl.dismiss();
    }
}