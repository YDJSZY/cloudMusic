import { Component,ViewChild,OnInit } from '@angular/core';
import { LoadingController,ModalController } from 'ionic-angular';
import { HttpService } from '../../../../providers/httpService';
import { AllMusicListTypePage } from './allMusicListType/allMusicListType';

@Component({
    templateUrl: 'moreMusicList.html',
})
export class MoreMusicListPage implements OnInit{
    @ViewChild('musicListNav') musicListNav
    introMusicList:Array<any>=[]
    allMusicList:Array<any>=[]
    currentPage:number=0
    infiniteScroll:any
    btnTitle:string="全部歌单"

    constructor(
        public loadingCtrl:LoadingController,
        public modalCtrl:ModalController,
        private http:HttpService,
    ) {
    }

    ngOnInit() {
        this.musicListNav.setBackButtonText("");
        this.loadMusicList();
    }

    changeMusicType(type:string) {
        this.btnTitle = type;
    }

    loadMusicList() {
        let loading = this.loadingCtrl.create({
            content: '正在加载歌单...',
            duration: 10000, //单位是毫秒
        });
        loading.present()

        let musicListPromise = this.http.getData({url:"personalized",params:{limit:"100"}});
        musicListPromise.then(function(res):any{
            this.allMusicList = res.result;
            this.getPage(this.currentPage);
            loading.dismiss();
        }.bind(this))
    }

    getPage(page:number=0) {
        let start = page,end;
        if(page !== 0) {
            start+=1;
        }
        end = start + 10;
        if(page === 9) return this.infiniteScroll.enable(false);
        this.introMusicList = this.introMusicList.concat(this.allMusicList.slice(start,end));
        if(this.infiniteScroll) this.infiniteScroll.complete();
        if(page === 9) this.infiniteScroll.enable(false);
    }

    loadMoreMusicList(infiniteScroll) {
        if(this.currentPage === 9) return;
        if(!this.infiniteScroll) this.infiniteScroll = infiniteScroll;
        ++this.currentPage;
        setTimeout(()=>{
            this.getPage(this.currentPage);
        },1000)
    }

    checkAllMusicListType() {
        let modal = this.modalCtrl.create(AllMusicListTypePage);
        modal.present();
    }
}