/**
 * Created by luwenwei on 18/3/31.
 */
import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { MusicCommentPage } from './musicComment';
import { SharedModule } from '../../../../../sharedModule/sharedModule';

@NgModule({
    declarations: [MusicCommentPage],
    entryComponents:[MusicCommentPage]/*入口组件*/,
    imports:[IonicPageModule.forChild(MusicCommentPage),SharedModule]
})
export class MusicCommentModule { }