import { NgModule } from '@angular/core';
import { MusicPage } from './music';
import {IonicPageModule} from 'ionic-angular';
import { SharedModule } from '../../../../sharedModule/sharedModule'

@NgModule({
    declarations: [MusicPage],
    imports:[IonicPageModule.forChild(MusicPage),SharedModule]
})
export class MusicModule { }
