/**
 * Created by luwenwei on 18/3/22.
 */
import { Component } from '@angular/core';
import { HttpService } from '../../providers/httpService';
import { ModalController } from 'ionic-angular';
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
export class LoginPage {
    constructor(
        public http:HttpService,
        public modalCtrl:ModalController
    ) {
        
    }

    loginByTel() {
        let modal = this.modalCtrl.create('tel-login');
        modal.onDidDismiss(data => {
           
        });
        modal.present();
    }
}