import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {DiscoverMusicPage} from '../pages/discoverMusic/discoverMusic';
import { TabsPage } from '../pages/tabs/tabs';
import { MusicPage } from '../pages/discoverMusic/tabs/music/music';
import { RadioPage } from '../pages/discoverMusic/tabs/radio/radio';
import { VideosPage } from '../pages/discoverMusic/tabs/videos/videos';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        DiscoverMusicPage,
        TabsPage,
        MusicPage,
        RadioPage,
        VideosPage
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        DiscoverMusicPage,
        TabsPage,
        MusicPage,
        RadioPage,
        VideosPage
    ],
    providers: [
        HttpClientModule,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
