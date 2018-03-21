/**
 * Created by luwenwei on 18/3/18.
 */
import { NgModule } from '@angular/core';
import { PlayMusicPage } from './playMusic';
import {IonicPageModule} from 'ionic-angular';
import { SharedModule } from '../../sharedModule/sharedModule';
@NgModule({
    declarations: [PlayMusicPage],
    imports:[IonicPageModule.forChild(PlayMusicPage),SharedModule]
})
export class PlayMusicModule { }