import { NgModule } from '@angular/core';
import { MusicModule } from './tabs/music/music.module';
import { RadioModule } from './tabs/radio/radio.module';
import { VideoModule } from './tabs/videos/video.module'
import { DiscoverMusicPage } from './discoverMusic.component';
import { DiscoverRootPage } from './root/root.component'
import { IonicModule } from 'ionic-angular';
import { RootViewCoverService } from './provider/eventEmitService';

@NgModule({
    declarations: [DiscoverMusicPage,DiscoverRootPage],
    entryComponents:[DiscoverMusicPage,DiscoverRootPage],/*入口组件*/
    imports: [MusicModule,IonicModule,RadioModule,VideoModule],
    providers:[RootViewCoverService]/*让服务成为单例模式，服务于本模块下的所有组件*/
})
export class DiscoverMusicModule { }
