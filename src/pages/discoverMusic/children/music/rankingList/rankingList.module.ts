import { NgModule } from '@angular/core';
import { RankingListPage } from './rankingList';
import {IonicPageModule} from 'ionic-angular';
import { SharedModule } from '../../../../../sharedModule/sharedModule'

@NgModule({
    declarations: [RankingListPage],
    imports:[IonicPageModule.forChild(RankingListPage),SharedModule]
})
export class RankingListModule { }