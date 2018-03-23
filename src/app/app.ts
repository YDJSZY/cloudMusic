import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { HttpService } from '../providers/httpService';
import { AuthService } from '../providers/authService';

@Component({
    templateUrl: 'app.html',
    styleUrls:['/app.scss'],
    providers:[HttpService]
})
export class MyApp {
    @ViewChild(Nav) nav:Nav;

    rootPage:string = '';

    pages:Array<{title:string, component:any}>;

    constructor(
        public platform:Platform,
        public statusBar:StatusBar,
        public splashScreen:SplashScreen,
        public http:HttpService,
        private authService:AuthService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.login();
        });
    }
    
    login() {
        let isLogin = this.authService.getLoginState();
        if(isLogin){
            this.rootPage = 'tabs-page';
        }else{
            this.rootPage = 'login-page';
        }
       
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
