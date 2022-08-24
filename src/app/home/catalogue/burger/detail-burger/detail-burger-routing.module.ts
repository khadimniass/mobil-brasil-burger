import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailBurgerPage } from './detail-burger.page';

const routes: Routes = [
  {
    path: '',
    component: DetailBurgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailBurgerPageRoutingModule {}
