import { NgModule } from '@angular/core';
import { MusicPage } from './music';
import { IonicModule } from 'ionic-angular';
import {IonicPageModule} from 'ionic-angular';
import { SharedModule } from '../../../../sharedModule/sharedModule'

@NgModule({
    declarations: [MusicPage],
    imports:[IonicModule,IonicPageModule.forChild(MusicPage),SharedModule]
})
export class MusicModule { }
