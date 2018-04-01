import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService } from '../../providers/httpService';
import { AuthService } from '../../providers/authService';
import { RootViewCoverService } from '../../pages/discoverMusic/provider/eventEmitService'
import {IonicPage,AlertController} from "ionic-angular";

@IonicPage({
    name : 'account-page',
    segment:'account-page'
})
@Component({
    selector:'account',
    templateUrl: 'account.html',
    providers:[HttpService],
    styles: ['./account.scss']
})
export class AccountPage implements OnInit {
    @ViewChild('accountNav') accountNav
    userMessage: Object
    constructor(public navCtrl: NavController,
                public rootViewCoverService: RootViewCoverService,
                private http: HttpService,
                private authService: AuthService,
                private alertCtrl: AlertController) {
        this.http = http;
    }

    ngOnInit() {
        let userId = this.authService.getUserMessage().userId;
        this.getUserMesDetail(userId)
    }

    getUserMesDetail(userId:number) {
        let promise = this.http.getData({url:'user/detail',params:{uid:userId}});
        promise.then(function (res):any{
            this.userMessage = res;
        }.bind(this))
    }

    logout() {
        let alert = this.alertCtrl.create({
            title: '网易云音乐',
            subTitle:'确定退出当前账号吗?',
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {

                    }
                },
                {
                    text: '确定',
                    handler: () => {
                        this.authService.logout();
                        this.rootViewCoverService.setRoot.emit({component:'login-page'})
                    }
                }
            ]
        });
        alert.present();
    }
}