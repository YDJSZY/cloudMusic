import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { RadioTypePage } from './radioType';

@NgModule({
    declarations: [RadioTypePage],
    entryComponents:[RadioTypePage]/*入口组件*/,
    imports:[IonicPageModule.forChild(RadioTypePage)]
})
export class RadioTypeModule { }