import { NgModule } from '@angular/core';
import { RankingListDetailPage } from './rankingListDetail';
import {IonicPageModule} from 'ionic-angular';
import { SharedModule } from '../../../../../sharedModule/sharedModule'

@NgModule({
    declarations: [RankingListDetailPage],
    imports:[IonicPageModule.forChild(RankingListDetailPage),SharedModule]
})
export class RankingListDetailModule { }