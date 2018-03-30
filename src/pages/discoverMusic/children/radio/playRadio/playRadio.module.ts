import { NgModule } from '@angular/core';
import { PlayRadioPage } from './playRadio';
import { SharedModule } from '../../../../../sharedModule/sharedModule';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [PlayRadioPage],
    imports:[IonicPageModule.forChild(PlayRadioPage),SharedModule]
})
export class PlayRadioModule { }