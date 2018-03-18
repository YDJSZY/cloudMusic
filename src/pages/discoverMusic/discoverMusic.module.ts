import { NgModule } from '@angular/core';
import { DiscoverMusicPage } from './discoverMusic';
import {IonicPageModule} from 'ionic-angular';
@NgModule({
    declarations: [DiscoverMusicPage],
    imports: [
        IonicPageModule.forChild(DiscoverMusicPage)
    ]
})
export class DiscoverMusicModule { }
