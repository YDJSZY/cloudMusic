import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { RadioPage } from './radio';

@NgModule({
    declarations: [RadioPage],
    entryComponents:[RadioPage]/*入口组件*/,
    imports:[IonicPageModule.forChild(RadioPage)]
})
export class RadioModule { }
