import { Component,ViewChild,OnInit } from '@angular/core';
import { LoadingController,ModalController,NavController } from 'ionic-angular';
import { HttpService } from '../../../../../providers/httpService';
import { RootViewCoverService } from '../../../provider/eventEmitService';
import { IonicPage } from 'ionic-angular';

@IonicPage({
    name:'more-music-list',
    segment:'more-music-list',
    defaultHistory: ['discover-music-page','d-music-page']/*默认路由历史记录,如果不设置,当别人通过url进入本页面时,左上角不会有返回按钮*/
})
@Component({
    templateUrl: 'moreMusicList.html',
    providers:[HttpService]
})
export class MoreMusicListPage implements OnInit{
    @ViewChild('musicListNav') musicListNav
    introMusicList:Array<any>=[]
    allMusicList:Array<any>=[]
    currentPage:number=0
    infiniteScroll:any
    currentSelectMusicListType={name:'全部歌单',str:'all'}

    constructor(
        public loadingCtrl:LoadingController,
        public modalCtrl:ModalController,
        public navCtrl:NavController,
        private http:HttpService,
        private rootViewCoverService:RootViewCoverService
    ) {
    }

    ngOnInit() {
        this.musicListNav.setBackButtonText("");
        this.loadMusicList();
    }

    loadMusicList(tag:string='全部') {
        this.currentPage = 0;
        this.introMusicList = [];
        let loading = this.loadingCtrl.create({
            content: '正在加载歌单...',
            duration: 10000, //单位是毫秒
        });
        loading.present()

        let musicListPromise = this.http.getData({url:"personalized",params:{limit:"100",tag:tag}});
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
        let modal = this.modalCtrl.create('all-music-type-page',this.currentSelectMusicListType);
        modal.onDidDismiss(data => {
            if(!data) return;
            this.currentSelectMusicListType = data;
            this.loadMusicList(data.name)
        });
        modal.present();
    }

    changeMusicType(type:any) {
        this.currentSelectMusicListType = type;
        this.loadMusicList(type.name)
    }

    openHighqualityMusic() {/*去精品歌单*/
        this.navCtrl.push('highquality-music-page');
    }

    musicListDetail(list) {/*查看某歌单具体歌曲列表*/
        let obj = {id:list.id,name:list.name,picUrl:list.picUrl,playount:list.playCount}
        this.rootViewCoverService.rootViewCover.emit({component:'recd-music-list-page',params:{data:obj}});
    }
}