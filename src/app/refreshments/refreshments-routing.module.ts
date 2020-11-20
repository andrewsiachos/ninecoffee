import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefreshmentsPage } from './refreshments.page';

const routes: Routes = [
  {
    path: '',
    component: RefreshmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefreshmentsPageRoutingModule {}
