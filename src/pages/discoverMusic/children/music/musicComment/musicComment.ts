/**
 * Created by luwenwei on 18/3/31.
 */
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../../providers/httpService';
import {IonicPage,NavController,NavParams} from "ionic-angular";
import { RootViewCoverService } from '../../../provider/eventEmitService';

@IonicPage({
    name : 'music-comment-page',
    segment:'music-comment-page'
})
@Component({
    selector:'music-comment',
    templateUrl: './musicComment.html',
    styles:['./musicComment.scss']
})
export class MusicCommentPage implements OnInit {
    radioMes:any = {}
    commentData:any = {}
    constructor(public navCtrl:NavController,
                public rootViewCoverService:RootViewCoverService,
                public http:HttpService,
                public navParams:NavParams) {

    }

    ngOnInit() {
        this.radioMes = this.navParams.get('data')
        this.getComments(this.radioMes.id)
    }

    getComments(id) {
        let promise = this.http.getData({url:'comment/music',params:{id:id}});
        promise.then(function (res):any{
            this.commentData = res;/*电台评论*/
        }.bind(this))
    }
}