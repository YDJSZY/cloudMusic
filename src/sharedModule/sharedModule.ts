import { NgModule,ModuleWithProviders } from '@angular/core';
import { SplitThousandPipe,SafeHtmlPipe } from '../pipes/pipes';
import { AudioPlayerComponent } from '../components/audioPlayer/audioPlayer';
import { HeaderSearchComponent } from '../components/headerSearch/headerSearch';
import { IonicModule } from 'ionic-angular'

@NgModule({
    declarations: [ SplitThousandPipe,SafeHtmlPipe,AudioPlayerComponent,HeaderSearchComponent ],
    exports: [ SplitThousandPipe,SafeHtmlPipe,AudioPlayerComponent,HeaderSearchComponent ],
    imports:[IonicModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule:SharedModule
        };
    }
}