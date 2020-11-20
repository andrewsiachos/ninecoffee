import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrozenJuicePageRoutingModule } from './frozen-juice-routing.module';

import { FrozenJuicePage } from './frozen-juice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrozenJuicePageRoutingModule
  ],
  declarations: [FrozenJuicePage]
})
export class FrozenJuicePageModule {}
