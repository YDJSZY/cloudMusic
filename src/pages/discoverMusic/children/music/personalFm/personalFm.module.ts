/**
 * Created by luwenwei on 18/3/18.
 */
import { NgModule } from '@angular/core';
import { PersonalFmPage } from './personalFm';
import {IonicPageModule} from 'ionic-angular';
import { AudioPlayerComponent } from '../../../../../components/audioPlayer/audioPlayer';

@NgModule({
    declarations: [PersonalFmPage,AudioPlayerComponent],
    entryComponents:[AudioPlayerComponent,AudioPlayerComponent],
    imports:[IonicPageModule.forChild(PersonalFmPage)]
})
export class PersonalFmModule { }
