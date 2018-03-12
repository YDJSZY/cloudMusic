import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../sharedModule/sharedModule'
import { MusicPage } from './music.component';
import { IonicModule } from 'ionic-angular';
import { MoreMusicListPage } from './moreMusicList.component'
@NgModule({
    declarations: [MusicPage,MoreMusicListPage],
    entryComponents:[MusicPage,MoreMusicListPage]/*入口组件*/,
    imports:[IonicModule,SharedModule]
})
export class MusicModule { }
