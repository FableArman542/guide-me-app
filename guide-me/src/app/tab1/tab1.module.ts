import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { PostItemComponent } from '../components/feed-posts/post-item/post-item.component';
import { SharedModule } from '../modules/shared/shared.module';
import { LogoToolbarNoneModule } from '../components/toolbar-logos/logo-toolbar-none/logo-toolbar-none.module';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SharedModule,
    LogoToolbarNoneModule
  ],
  exports: [Ng2SearchPipe],
  declarations: [Tab1Page, PostItemComponent, Ng2SearchPipe],
  providers: [NativeGeocoder]
})
export class Tab1PageModule {}
