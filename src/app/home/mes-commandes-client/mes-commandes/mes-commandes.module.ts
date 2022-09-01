import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesCommandesPageRoutingModule } from './mes-commandes-routing.module';

import { MesCommandesPage } from './mes-commandes.page';
import {QRCodeModule} from "angularx-qrcode";
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MesCommandesPageRoutingModule,
        QRCodeModule,
        Ng2SearchPipeModule
    ],
  declarations: [MesCommandesPage]
})
export class MesCommandesPageModule {}
