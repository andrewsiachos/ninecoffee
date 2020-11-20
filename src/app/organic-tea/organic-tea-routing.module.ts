import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganicTeaPage } from './organic-tea.page';

const routes: Routes = [
  {
    path: '',
    component: OrganicTeaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganicTeaPageRoutingModule {}
