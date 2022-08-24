import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./catalogue/catalogue.module').then( m => m.CataloguePageModule)
  },
  {
    path: 'list-burger',
    loadChildren: () => import('./burger/list-burger/list-burger.module').then( m => m.ListBurgerPageModule)
  },
  {
    path: 'list-menu',
    loadChildren: () => import('./menu/list-menu/list-menu.module').then( m => m.ListMenuPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
