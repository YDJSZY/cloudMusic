import { NgModule } from '@angular/core';
import { VideosPage } from './videos';
import { IonicModule } from 'ionic-angular';
import {IonicPageModule} from 'ionic-angular';
import { SharedModule } from '../../../../sharedModule/sharedModule'

@NgModule({
    declarations: [VideosPage],
    imports:[IonicModule,IonicPageModule.forChild(VideosPage),SharedModule]
})
export class VideosModule { }
