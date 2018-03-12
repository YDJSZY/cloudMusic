import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyMusicPage } from './myMusic.component';

@NgModule({
    declarations:[MyMusicPage],
    entryComponents:[MyMusicPage],/*入口组件*/
    imports: [IonicModule]
})
export class MyMusicModule { }