/**
 * Created by luwenwei on 18/3/24.
 */
import { NgModule } from '@angular/core';
import { PlayMVPage } from './playMV';
import {IonicPageModule} from 'ionic-angular';
import { SharedModule } from '../../sharedModule/sharedModule';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

@NgModule({
    declarations: [PlayMVPage],
    imports:[IonicPageModule.forChild(PlayMVPage),SharedModule,VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule]
})
export class PlayMVModule { }
