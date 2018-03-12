import { NgModule } from '@angular/core';
import { MusicModule } from './tabs/music/music.module';
import { RadioModule } from './tabs/radio/radio.module';
import { VideoModule } from './tabs/videos/video.module'
import { DiscoverMusicPage } from './discoverMusic.component';
import { DiscoverRootPage } from './root'
import { IonicModule } from 'ionic-angular';

@NgModule({
    declarations: [DiscoverMusicPage,DiscoverRootPage],
    entryComponents:[DiscoverMusicPage,DiscoverRootPage],/*入口组件*/
    imports: [MusicModule,IonicModule,RadioModule,VideoModule]
})
export class DiscoverMusicModule { }
