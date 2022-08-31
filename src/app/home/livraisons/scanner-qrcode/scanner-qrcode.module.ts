import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScannerQrcodePageRoutingModule } from './scanner-qrcode-routing.module';

import { ScannerQrcodePage } from './scanner-qrcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScannerQrcodePageRoutingModule
  ],
  declarations: [ScannerQrcodePage]
})
export class ScannerQrcodePageModule {}
