/**
 * Created by luwenwei on 18/3/18.
 */
import { Component,ViewChild,AfterViewInit,ElementRef,Renderer } from '@angular/core';
import {IonicPage,NavController,LoadingController} from "ionic-angular";
import { HttpService } from '../../../providers/httpService';
import { RootViewCoverService } from '../provider/eventEmitService';

@IonicPage({
    name : 'search-page'
})
@Component({
    selector:'search',
    templateUrl: 'search.html',
    styles:['./style.scss']
})
export class SearchPage implements AfterViewInit{
    @ViewChild('searchInput') searchInput:ElementRef
    keyword:string
    searchResults:Array<any> = []
    loading:any
    constructor(
        private navCtrl:NavController,
        private http: HttpService,
        private loadingCtrl:LoadingController,
        private rootViewCoverService:RootViewCoverService) {
        
    }

    ngAfterViewInit() {

    }

    ionViewDidEnter() {

    }

    cancelSearch() {
        this.navCtrl.pop();
    }

    search() {
        if(!this.keyword) return;
        this.showLoading();
        this.searchResults = [];
        let searchPromise = this.http.getData({url:'search',params:{keywords:this.keyword}});
        searchPromise.then(function (res):any{
            this.loading.dismiss();
            this.searchResults = res.result.songs;
        }.bind(this))
    }

    showLoading() {
        this.loading = this.loadingCtrl.create({
            content: '正在加载...',
            duration: 10000, //单位是毫秒
        });
        this.loading.present()
    }

    playMusic(index) {
        this.rootViewCoverService.globalRootViewCover.emit({component:'play-music-page',params:{data:this.searchResults,index:index}});
    }

    clearKeyword() {
        this.keyword = '';
    }
}