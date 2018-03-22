/**
 * Created by luwenwei on 18/3/13.
 */
import { Component,OnInit } from '@angular/core';
import { ViewController,NavParams,NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { HttpService } from '../../../providers/httpService';

@IonicPage({
    name:'tel-login'
})
@Component({
    templateUrl: 'telLogin.html',
    styleUrls:['/style.scss'],
    providers:[HttpService]
})
export class TelLoginPage implements OnInit{
    telNum:number
    password:any
    constructor(
        public navCtrl:NavController,
        private viewCtrl:ViewController,
        public http:HttpService){
    }

    ngOnInit() {
        
    }

    hideModal() {
        this.viewCtrl.dismiss();
    }

    login() {
        let loginPromise = this.http.getData({url:"login/cellphone/",params:{phone:this.telNum,password:this.password}});
        loginPromise.then(function(res):any{
            if(res.code == 200) {
                this.navCtrl.push('tabs-page')
            }
        }.bind(this)).catch((e)=>{console.error(e)});
    }
}