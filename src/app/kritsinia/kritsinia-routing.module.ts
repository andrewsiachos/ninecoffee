import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KritsiniaPage } from './kritsinia.page';

const routes: Routes = [
  {
    path: '',
    component: KritsiniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KritsiniaPageRoutingModule {}
