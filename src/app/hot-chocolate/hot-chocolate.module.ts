import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotChocolatePageRoutingModule } from './hot-chocolate-routing.module';

import { HotChocolatePage } from './hot-chocolate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotChocolatePageRoutingModule
  ],
  declarations: [HotChocolatePage]
})
export class HotChocolatePageModule {}
