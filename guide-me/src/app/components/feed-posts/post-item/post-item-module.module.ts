import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from './post-item.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [PostItemComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [PostItemComponent]
})
export class PostItemModuleModule { }
