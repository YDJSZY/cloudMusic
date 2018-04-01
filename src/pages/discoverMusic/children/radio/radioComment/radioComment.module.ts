/**
 * Created by luwenwei on 18/3/31.
 */
import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { RadioCommentPage } from './radioComment';
import { SharedModule } from '../../../../../sharedModule/sharedModule';

@NgModule({
    declarations: [RadioCommentPage],
    entryComponents:[RadioCommentPage]/*入口组件*/,
    imports:[IonicPageModule.forChild(RadioCommentPage),SharedModule]
})
export class RadioCommentModule { }