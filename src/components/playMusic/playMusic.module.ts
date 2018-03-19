/**
 * Created by luwenwei on 18/3/18.
 */
import { NgModule } from '@angular/core';
import { PlayMusicPage } from './playMusic';
import {IonicPageModule} from 'ionic-angular';
import { AudioPlayerComponent } from '../audioPlayer/audioPlayer';
@NgModule({
    declarations: [PlayMusicPage,AudioPlayerComponent],
    entryComponents:[AudioPlayerComponent],
    imports:[IonicPageModule.forChild(PlayMusicPage)]
})
export class PlayMusicModule { }