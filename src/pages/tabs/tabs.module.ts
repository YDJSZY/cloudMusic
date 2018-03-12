import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DiscoverMusicModule } from '../../pages/discoverMusic/discoverMusic.module';
import { MyMusicModule } from '../../pages/myMusic/myMusic.module';
import { TabsPage } from './tabs.component';

@NgModule({
    imports:[IonicModule,DiscoverMusicModule,MyMusicModule],
    declarations: [TabsPage],
    entryComponents:[TabsPage]/*入口组件*/
})
export class TabsModule { }