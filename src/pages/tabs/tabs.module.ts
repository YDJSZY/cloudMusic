import { NgModule } from '@angular/core';
import { TabsPage } from './tabs';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
    imports:[
        IonicPageModule.forChild(TabsPage)
    ],/*依赖的模块*/
    declarations: [TabsPage]
})
export class TabsModule { }