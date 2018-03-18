/**
 * Created by luwenwei on 18/3/18.
 */
import { NgModule } from '@angular/core';
import { MoreSinglePlayPage } from './moreSinglePlay';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
    declarations: [MoreSinglePlayPage],
    imports:[IonicPageModule.forChild(MoreSinglePlayPage)]
})
export class MoreSinglePlayModule { }