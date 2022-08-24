import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CataloguePageRoutingModule } from './catalogue-routing.module';

import { CataloguePage } from './catalogue.page';
import {IonicHeaderParallaxModule} from 'ionic-header-parallax';
import {BurgerPageModule} from './burger/burger.module';
import {MenuPageModule} from './menu/menu.module';
import {ListBurgerPageModule} from "../burger/list-burger/list-burger.module";
import {ListMenuPageModule} from "../menu/list-menu/list-menu.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CataloguePageRoutingModule,
    IonicHeaderParallaxModule,
    BurgerPageModule,
    MenuPageModule,
    ListBurgerPageModule,
    ListMenuPageModule
  ],
  declarations: [CataloguePage]
})
export class CataloguePageModule {}
