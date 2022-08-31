import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScannerQrcodePage } from './scanner-qrcode.page';

const routes: Routes = [
  {
    path: '',
    component: ScannerQrcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScannerQrcodePageRoutingModule {}
