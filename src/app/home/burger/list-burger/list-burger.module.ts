import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListBurgerPageRoutingModule } from './list-burger-routing.module';

import { ListBurgerPage } from './list-burger.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListBurgerPageRoutingModule
    ],
    exports: [
        ListBurgerPage
    ],
    declarations: [ListBurgerPage]
})
export class ListBurgerPageModule {}
