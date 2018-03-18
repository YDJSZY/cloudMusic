import { NgModule } from '@angular/core';
//import { SplitThousandPipe } from '../../../../pipes/pipes';
import { RadioPage } from './radio.component';
import { IonicModule } from 'ionic-angular';
@NgModule({
    declarations: [RadioPage],
    entryComponents:[RadioPage]/*入口组件*/,
    imports:[IonicModule]
})
export class RadioModule { }
