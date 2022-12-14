import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerPage } from './burger.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerPage
  },
  {
    path: 'detail-burger/:id',
    loadChildren: () => import('./detail-burger/detail-burger.module').then( m => m.DetailBurgerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerPageRoutingModule {}
