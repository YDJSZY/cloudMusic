import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../sharedModule/sharedModule'
import { MusicPage } from './music.component';
import { IonicModule } from 'ionic-angular';
import { MoreMusicListPage } from './moreMusicList/moreMusicList.component';
import { HighqualityMusicListPage } from './highqualityMusicList/highqualityMusicList';
import { AllMusicListTypePage } from './allMusicListType/allMusicListType';
import { SinglePlayPage } from './singlePlay/singlePlay.component';
import { RcmdMusicListDetailPage } from './recommendMusicListDetail/recommendMusicListDetail.component';

@NgModule({
    declarations: [MusicPage,MoreMusicListPage,AllMusicListTypePage,HighqualityMusicListPage,SinglePlayPage,RcmdMusicListDetailPage],
    entryComponents:[MusicPage,MoreMusicListPage,AllMusicListTypePage,HighqualityMusicListPage,SinglePlayPage,RcmdMusicListDetailPage]/*入口组件*/,
    imports:[IonicModule,SharedModule]
})
export class MusicModule { }
