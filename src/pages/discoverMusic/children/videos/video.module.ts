import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../sharedModule/sharedModule'
import { VideosPage } from './videos.component';
import { IonicModule } from 'ionic-angular';
@NgModule({
    declarations: [VideosPage],
    entryComponents:[VideosPage]/*入口组件*/,
    imports:[IonicModule,SharedModule]
})
export class VideoModule { }
