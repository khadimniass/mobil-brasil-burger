import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMenuPageRoutingModule } from './list-menu-routing.module';

import { ListMenuPage } from './list-menu.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListMenuPageRoutingModule
    ],
    exports: [
        ListMenuPage
    ],
    declarations: [ListMenuPage]
})
export class ListMenuPageModule {}
