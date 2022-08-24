import { Injectable } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Platform} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private sanitizer: DomSanitizer,
              private platform: Platform) { }
  demanderAffichageImage(img: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' +img);
  }
  backbutton(){
    this.platform.backButton.subscribeWithPriority(10,()=>{
      alert('here');
    });
  }
}
