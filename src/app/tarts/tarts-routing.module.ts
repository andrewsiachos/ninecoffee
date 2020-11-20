import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TartsPage } from './tarts.page';

const routes: Routes = [
  {
    path: '',
    component: TartsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TartsPageRoutingModule {}
