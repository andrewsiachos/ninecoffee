import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TartsPageRoutingModule } from './tarts-routing.module';

import { TartsPage } from './tarts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TartsPageRoutingModule
  ],
  declarations: [TartsPage]
})
export class TartsPageModule {}
