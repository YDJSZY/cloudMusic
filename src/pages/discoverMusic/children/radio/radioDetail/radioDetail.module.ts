import { NgModule } from '@angular/core';
import { RadioDetailPage } from './radioDetail';
import {IonicPageModule} from 'ionic-angular';
import { SharedModule } from '../../../../../sharedModule/sharedModule'

@NgModule({
    declarations: [RadioDetailPage],
    imports:[IonicPageModule.forChild(RadioDetailPage),SharedModule]
})
export class RadioDetailModule { }