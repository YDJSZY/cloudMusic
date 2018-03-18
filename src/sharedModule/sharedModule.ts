import { NgModule,ModuleWithProviders } from '@angular/core';
import { SplitThousandPipe,SafeHtmlPipe } from '../pipes/pipes';

@NgModule({
    declarations: [ SplitThousandPipe,SafeHtmlPipe ],
    exports: [ SplitThousandPipe,SafeHtmlPipe ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule:SharedModule
        };
    }
}