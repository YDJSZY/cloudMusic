import { NgModule } from '@angular/core';
import { MyMusicPage } from './myMusic';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
    declarations:[MyMusicPage],
    imports: [
        IonicPageModule.forChild(MyMusicPage)
    ]
})
export class MyMusicModule { }