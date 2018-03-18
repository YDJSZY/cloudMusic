/**
 * Created by luwenwei on 18/3/18.
 */
import { NgModule } from '@angular/core';
import { EveryDayRecommendMusicPage } from './everyDayRecommendMusic';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
    declarations: [EveryDayRecommendMusicPage],
    imports:[IonicPageModule.forChild(EveryDayRecommendMusicPage)]
})
export class EveryDayRecommendMusicModule { }
