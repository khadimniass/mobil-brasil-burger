import { Injectable } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private sanitizer: DomSanitizer) { }
  demanderAffichageImage(img: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' +img);
  }
}
