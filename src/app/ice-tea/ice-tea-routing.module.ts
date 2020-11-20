import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IceTeaPage } from './ice-tea.page';

const routes: Routes = [
  {
    path: '',
    component: IceTeaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IceTeaPageRoutingModule {}
