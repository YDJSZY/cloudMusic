/**
 * Created by luwenwei on 18/3/13.
 */
import { Component,OnInit } from '@angular/core';
import { ViewController,NavParams,NavController,ToastController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';
import { HttpService } from '../../../providers/httpService';
import { AuthService} from '../../../providers/authService';

@IonicPage({
    name:'tel-login'
})
@Component({
    templateUrl: 'telLogin.html',
    styles:['./style.scss'],
    providers:[HttpService]
})
export class TelLoginPage implements OnInit{
    telNum:number
    password:any
    goToHomePage:Function
    constructor(
        public navCtrl:NavController,
        public viewCtrl:ViewController,
        public toastCtrl:ToastController,
        public http:HttpService,
        public navParams:NavParams,
        private authService:AuthService){
    }

    ngOnInit() {
        let callback = this.navParams.get('callback');
        this.goToHomePage = callback;
    }

    hideModal(data) {
        this.viewCtrl.dismiss(data);
    }

    login() {
        if(!this.telNum){
            return this.createToast('请填写用户名')
        }
        if(!this.password){
            return this.createToast('请输入密码')
        }
        let loginPromise = this.http.getData({url:"login/cellphone/",params:{phone:this.telNum,password:this.password}});
        loginPromise.then(function(res):any{
            if(res.code == 200) {
                this.authService.setLoginState({isLogin:true,userId:res.account.id});
                this.goToHomePage();
                this.hideModal(true);
            }else{
                this.createToast('用户名或密码错误');
            }
        }.bind(this)).catch((e)=>{console.error(e)});
    }

    createToast(message:string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        })
        toast.present();
    }
}