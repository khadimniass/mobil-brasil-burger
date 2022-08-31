import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCommandePageRoutingModule } from './detail-commande-routing.module';

import { DetailCommandePage } from './detail-commande.page';
import {QRCodeModule} from 'angularx-qrcode';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetailCommandePageRoutingModule,
        QRCodeModule
    ],
  declarations: [DetailCommandePage]
})
export class DetailCommandePageModule {}
