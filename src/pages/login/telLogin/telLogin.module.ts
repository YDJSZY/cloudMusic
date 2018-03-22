/**
 * Created by luwenwei on 18/3/18.
 */
import { NgModule } from '@angular/core';
import { TelLoginPage } from './telLogin';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
    declarations: [TelLoginPage],
    imports:[IonicPageModule.forChild(TelLoginPage)]
})
export class TelLoginModule { }