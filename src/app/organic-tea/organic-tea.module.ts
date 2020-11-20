import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganicTeaPageRoutingModule } from './organic-tea-routing.module';

import { OrganicTeaPage } from './organic-tea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganicTeaPageRoutingModule
  ],
  declarations: [OrganicTeaPage]
})
export class OrganicTeaPageModule {}
