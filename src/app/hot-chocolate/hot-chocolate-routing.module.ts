import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotChocolatePage } from './hot-chocolate.page';

const routes: Routes = [
  {
    path: '',
    component: HotChocolatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotChocolatePageRoutingModule {}
