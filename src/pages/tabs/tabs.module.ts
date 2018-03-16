import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DiscoverMusicModule } from '../../pages/discoverMusic/discoverMusic.module';
import { MyMusicModule } from '../../pages/myMusic/myMusic.module';
import { TabsPage } from './tabs.component';
import { PlayMusicPage } from '../../components/playMusic/playMusic.component'

@NgModule({
    imports:[IonicModule,DiscoverMusicModule,MyMusicModule],
    declarations: [TabsPage,PlayMusicPage],
    entryComponents:[TabsPage,PlayMusicPage]/*入口组件*/
})
export class TabsModule { }