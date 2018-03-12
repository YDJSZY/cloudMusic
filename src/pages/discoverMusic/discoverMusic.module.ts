import { NgModule } from '@angular/core';
import { MusicModule } from './tabs/music/music.module';
import { RadioModule } from './tabs/radio/radio.module';
import { VideoModule } from './tabs/videos/video.module'
import { DiscoverMusicPage } from './discoverMusic.component';
import { IonicModule } from 'ionic-angular';

@NgModule({
    declarations: [DiscoverMusicPage],
    entryComponents:[DiscoverMusicPage],/*入口组件*/
    imports: [MusicModule,IonicModule,RadioModule,VideoModule]
})
export class DiscoverMusicModule { }
