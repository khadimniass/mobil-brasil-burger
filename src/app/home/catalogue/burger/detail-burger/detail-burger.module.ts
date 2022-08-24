import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailBurgerPageRoutingModule } from './detail-burger-routing.module';

import { DetailBurgerPage } from './detail-burger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailBurgerPageRoutingModule
  ],
  declarations: [DetailBurgerPage]
})
export class DetailBurgerPageModule {}
