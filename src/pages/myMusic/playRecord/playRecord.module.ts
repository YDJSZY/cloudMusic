import { NgModule } from '@angular/core';
import { PlayRecordPage } from './playRecord';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
    declarations:[PlayRecordPage],
    imports: [
        IonicPageModule.forChild(PlayRecordPage)
    ]
})
export class PlayRecordModule { }