import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IceTeaPageRoutingModule } from './ice-tea-routing.module';

import { IceTeaPage } from './ice-tea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IceTeaPageRoutingModule
  ],
  declarations: [IceTeaPage]
})
export class IceTeaPageModule {}
