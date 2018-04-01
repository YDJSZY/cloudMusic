import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpService } from '../../../../../providers/httpService';
import {IonicPage,NavController, NavParams} from "ionic-angular";
import { RootViewCoverService } from '../../../provider/eventEmitService';

@IonicPage({
    name : 'radio-detail-page',
    segment:'radio-detail-page'
})
@Component({
    selector:'radio-detail',
    templateUrl: './radioDetail.html',
    styles:['./radioDetail.scss']
})
export class RadioDetailPage implements OnInit{
    @ViewChild('radioDetailNav') radioDetailNav
    radioDetailMes:Object = {}
    radioProgram:any
    currentSelect:string = 'radioOrder'
    constructor(
        public http:HttpService,
        public navCtrl:NavController,
        public navParams:NavParams,
        public rootViewCoverService:RootViewCoverService
    ) {

    }

    ngOnInit() {
        this.radioDetailNav.setBackButtonText("");
        let id = this.navParams.get('data').id;
        this.getRadioDetail(id);
    }

    getRadioDetail(id) {
        let radioDetailPromise = this.http.getData({'url':'dj/detail?',params:{rid:id}});
        radioDetailPromise.then(function (res):any{
            this.radioDetailMes = res.djRadio
        }.bind(this))

        let programPromise = this.http.getData({'url':'dj/program',params:{rid:id}});
        programPromise.then(function (res):any{
            this.radioProgram = res;
        }.bind(this))
    }

    switchShowMes(type:string){
        this.currentSelect = type;
    }

    getDuration(time:number):string {
        let m = Math.floor(time / 60000);
        let _s = time % 60000;
        let s = Math.floor(_s / 1000);
        return m + ':' + s;
    }

    playRadio(index) {
        this.rootViewCoverService.globalRootViewCover.emit({component:'play-radio-page',params:{data:this.radioProgram.programs,index:index}});
    }
}