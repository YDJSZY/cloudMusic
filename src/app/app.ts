import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { HttpService } from '../providers/httpService';
import { AuthService } from '../providers/authService';
//import appStyle from './app.scss';
//import 'lib-flexible/flexible.js';

@Component({
    templateUrl: 'app.html',
    styles:['./app.scss'],
    providers:[HttpService]
})
export class MyApp {
    @ViewChild(Nav) nav:Nav;
    pages:Array<{title:string, component:any}>;
    rootPage:string
    constructor(
        public platform:Platform,
        public statusBar:StatusBar,
        public splashScreen:SplashScreen,
        public http:HttpService,
        private authService:AuthService
    ) {
        this.initializeApp();
        this.rootPage = this.authService.getLoginState() ? 'tabs-page' : 'login-page';
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
