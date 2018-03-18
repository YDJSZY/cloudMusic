/**
 * Created by luwenwei on 18/3/18.
 */
import { NgModule } from '@angular/core';
import { AllMusicTypePage } from './allMusicType';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
    declarations: [AllMusicTypePage],
    imports:[IonicPageModule.forChild(AllMusicTypePage)]
})
export class AllMusicTypeModule { }