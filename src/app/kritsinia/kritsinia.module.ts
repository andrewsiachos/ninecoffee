import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KritsiniaPageRoutingModule } from './kritsinia-routing.module';

import { KritsiniaPage } from './kritsinia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KritsiniaPageRoutingModule
  ],
  declarations: [KritsiniaPage]
})
export class KritsiniaPageModule {}
