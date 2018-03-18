/**
 * Created by luwenwei on 18/3/18.
 */
import { NgModule } from '@angular/core';
import { RcmdMusicListDetailPage } from './recommendMusicListDetail';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../../../../sharedModule/sharedModule'

@NgModule({
    declarations: [RcmdMusicListDetailPage],
    imports:[IonicPageModule.forChild(RcmdMusicListDetailPage),SharedModule]
})
export class RecommendMusicListDetailModule { }