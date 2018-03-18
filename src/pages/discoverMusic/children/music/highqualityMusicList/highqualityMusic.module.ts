/**
 * Created by luwenwei on 18/3/18.
 */
import { NgModule } from '@angular/core';
import { HighqualityMusicPage } from './highqualityMusic';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
    declarations: [HighqualityMusicPage],
    imports:[IonicPageModule.forChild(HighqualityMusicPage)]
})
export class HighqualityMusicModule { }