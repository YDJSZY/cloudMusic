import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../sharedModule/sharedModule'
import { MusicPage } from './music.component';
import { IonicModule } from 'ionic-angular';
import { MoreMusicListPage } from './moreMusicList.component'
import { AllMusicListTypePage } from './allMusicListType/allMusicListType';

@NgModule({
    declarations: [MusicPage,MoreMusicListPage,AllMusicListTypePage],
    entryComponents:[MusicPage,MoreMusicListPage,AllMusicListTypePage]/*入口组件*/,
    imports:[IonicModule,SharedModule]
})
export class MusicModule { }
