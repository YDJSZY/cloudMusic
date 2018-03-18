/**
 * Created by luwenwei on 18/3/18.
 */
import { NgModule } from '@angular/core';
import { SearchPage } from './search';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
    imports:[
        IonicPageModule.forChild(SearchPage)
    ],/*依赖的模块*/
    declarations: [SearchPage]
})
export class SearchModule { }