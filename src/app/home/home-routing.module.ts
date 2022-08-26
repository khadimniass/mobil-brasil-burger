import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {GuardAuthGuard} from '../security/guard/guard-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'catalogue',
    canActivate: [GuardAuthGuard],
    loadChildren: () => import('./catalogue/catalogue.module').then( m => m.CataloguePageModule)
  },
  {
    path: 'list-burger',
    loadChildren: () => import('./burger/list-burger/list-burger.module').then( m => m.ListBurgerPageModule)
  },
  {
    path: 'list-menu',
    loadChildren: () => import('./menu/list-menu/list-menu.module').then( m => m.ListMenuPageModule)
  },
  {
    path: 'livraison',
    loadChildren: () => import('./livraisons/livraison/livraison.module').then( m => m.LivraisonPageModule)
  },
  {
    path: 'livraison/detail-livraison/:id',
    loadChildren: () => import('./livraisons/detail-livraison/detail-livraison.module').then( m => m.DetailLivraisonPageModule)
  },
  {
    path: 'mes-commandes',
    loadChildren: () => import('./mes-commandes-client/mes-commandes/mes-commandes.module').then( m => m.MesCommandesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
