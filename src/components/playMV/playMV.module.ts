/**
 * Created by luwenwei on 18/3/24.
 */
import { NgModule } from '@angular/core';
import { PlayMVPage } from './playMV';
import {IonicPageModule} from 'ionic-angular';
import { SharedModule } from '../../sharedModule/sharedModule'

@NgModule({
    declarations: [PlayMVPage],
    imports:[IonicPageModule.forChild(PlayMVPage),SharedModule]
})
export class PlayMVModule { }
