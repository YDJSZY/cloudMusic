import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HttpClientModule,HttpClient } from '@angular/common/http';

import {MyApp} from './app';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { RootViewCoverService } from '../pages/discoverMusic/provider/eventEmitService';
import { SharedModule } from '../sharedModule/sharedModule'

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        SharedModule,
        HttpClientModule,
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        RootViewCoverService,
        HttpClientModule,
        HttpClient,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ],
    exports:[SharedModule]
})
export class AppModule {
}
