/**
 * Created by luwenwei on 18/3/22.
 */
import { Component,OnInit } from '@angular/core';
import { HttpService } from '../../providers/httpService';
import { ModalController,NavController } from 'ionic-angular';
import { AuthService} from '../../providers/authService';
import {IonicPage} from "ionic-angular";

@IonicPage({
    name : 'login-page',
    segment:'login-page'
})
@Component({
    selector:'login-page',
    templateUrl: 'login.html',
    styles:['./login.scss'],
    providers:[HttpService]
})
export class LoginPage implements OnInit{
    constructor(
        public http:HttpService,
        public modalCtrl:ModalController,
        public navCtrl:NavController,
        private authService:AuthService
    ) {
        
    }

    loginByTel() {
        let modal = this.modalCtrl.create('tel-login',{callback:this.gotoHomePage.bind(this)});
        modal.onWillDismiss(data => {
            //console.log(this.navCtrl.)
        })
        modal.present();
    }

    gotoHomePage() {
        this.navCtrl.push('tabs-page')
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