/**
 * Created by luwenwei on 18/3/17.
 */
import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { DiscoverRootPage } from './root';

@NgModule({
    imports:[
        IonicPageModule.forChild(DiscoverRootPage)
    ],/*依赖的模块*/
    declarations: [DiscoverRootPage],
})
export class DiscoverRootPageModule { }