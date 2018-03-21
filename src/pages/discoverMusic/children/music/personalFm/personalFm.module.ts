/**
 * Created by luwenwei on 18/3/18.
 */
import { NgModule } from '@angular/core';
import { PersonalFmPage } from './personalFm';
import {IonicPageModule} from 'ionic-angular';
import { SharedModule } from '../../../../../sharedModule/sharedModule'
@NgModule({
    declarations: [PersonalFmPage],
    imports:[IonicPageModule.forChild(PersonalFmPage),SharedModule]
})
export class PersonalFmModule { }
