import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrozenJuicePage } from './frozen-juice.page';

const routes: Routes = [
  {
    path: '',
    component: FrozenJuicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrozenJuicePageRoutingModule {}
