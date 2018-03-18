/**
 * Created by luwenwei on 18/3/17.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoreMusicListPage } from './moreMusicList';
import { SharedModule } from '../../../../../sharedModule/sharedModule'

@NgModule({
    declarations: [MoreMusicListPage],
    imports: [IonicPageModule.forChild(MoreMusicListPage),SharedModule],
})
export class MoreMusicListPageModule { }