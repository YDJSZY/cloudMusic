import { NgModule } from '@angular/core';
import { SplitThousandPipe } from '../pipes/pipes';

@NgModule({
    declarations: [ SplitThousandPipe ],
    exports: [ SplitThousandPipe ]
})
export class SharedModule {}