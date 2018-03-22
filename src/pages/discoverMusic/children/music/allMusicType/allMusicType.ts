/**
 * Created by luwenwei on 18/3/13.
 */
import { Component,OnInit } from '@angular/core';
import { ViewController,NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';

@IonicPage({
    name:'all-music-type-page'
})
@Component({
    templateUrl: 'allMusicType.html',
    styleUrls:['/style.scss']
})
export class AllMusicTypePage implements OnInit{
    currentSelect:string='all'
    musicListType:Array<any>=[
        {
            title:"语种",
            iconName:"ios-globe-outline",
            list:[
                {
                    name:"华语",
                    str:"chinese",
                    hot:true
                },
                {
                    name:"欧美",
                    str:"europe_and_america"
                },
                {
                    name:"日语",
                    str:"japanese"
                },
                {
                    name:"韩语",
                    str:"korean"
                },
                {
                    name:"粤语",
                    str:"cantonese"
                },
                {
                    name:"小语种",
                    str:"rare"
                }
            ]
        }
    ]
    constructor(private viewCtrl:ViewController,private navParams:NavParams){
        this.currentSelect = navParams.get("str")
    }

    ngOnInit() {
        
    }

    hideModal() {
        this.viewCtrl.dismiss();
    }

    selectMusicList(type) {
        this.currentSelect = type.str;
        this.viewCtrl.dismiss(type);
    }
}