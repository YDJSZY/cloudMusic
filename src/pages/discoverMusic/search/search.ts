/**
 * Created by luwenwei on 18/3/18.
 */
import { Component,ViewChild,AfterViewInit,ElementRef,Renderer } from '@angular/core';
import {IonicPage,NavController} from "ionic-angular";

@IonicPage({
    name : 'search-page'
})
@Component({
    selector:'search',
    templateUrl: 'search.html',
    styleUrls:['./style.scss']
})
export class SearchPage implements AfterViewInit{
    @ViewChild('searchInput') searchInput:ElementRef
    constructor(private navCtrl:NavController,private renderer: Renderer) {
        
    }

    ngAfterViewInit() {
         // with 0 it will trigger a validation error instantly
    }

    ionViewDidEnter() {
        setTimeout(()=>{
            this.searchInput.nativeElement.focus();
        }, 1500);
    }

    cancelSearch() {
        this.navCtrl.pop();
    }
}