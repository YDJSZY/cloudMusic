import { NgModule } from '@angular/core';
import { AccountPage } from './account';
import {IonicPageModule} from 'ionic-angular';
import { SharedModule } from '../../sharedModule/sharedModule'

@NgModule({
    declarations: [AccountPage],
    imports:[IonicPageModule.forChild(AccountPage),SharedModule]
})
export class MusicModule { }