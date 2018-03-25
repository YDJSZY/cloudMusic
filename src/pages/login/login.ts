/**
 * Created by luwenwei on 18/3/22.
 */
import { Component,OnInit } from '@angular/core';
import { HttpService } from '../../providers/httpService';
import { ModalController,NavController,ViewController } from 'ionic-angular';
import { AuthService} from '../../providers/authService';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'login-page',
    segment:'login-page'
})
@Component({
    selector:'login-page',
    templateUrl: 'login.html',
    styleUrls:['/login.scss'],
    providers:[HttpService]
})
export class LoginPage implements OnInit{
    constructor(
        public http:HttpService,
        public modalCtrl:ModalController,
        public navCtrl:NavController,
        public viewCtrl:ViewController,
        private authService:AuthService
    ) {
        
    }

    loginByTel() {
        let modal = this.modalCtrl.create('tel-login');
        modal.onWillDismiss(data => {
            //console.log(this.navCtrl.)
            if(data) this.navCtrl.push('tabs-page');
        })
        modal.present();
    }

    ngOnInit() {

    }

    ionViewCanEnter():boolean {
        let loginState = this.authService.getLoginState();
        if(loginState){
            console.log(loginState)
            this.navCtrl.setRoot('tabs-page');
            return false;
        }
        return true;
    }
}