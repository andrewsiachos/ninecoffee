import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefreshmentsPageRoutingModule } from './refreshments-routing.module';

import { RefreshmentsPage } from './refreshments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefreshmentsPageRoutingModule
  ],
  declarations: [RefreshmentsPage]
})
export class RefreshmentsPageModule {}
