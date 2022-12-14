import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthentificationService} from '../../../security/service/authentification.service';
import { IonModal } from '@ionic/angular';
@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {
livreurConnected: any;
livraisons: any[];
idModal='open-modal';
  constructor(private serviceAuth: AuthentificationService) { }

  ngOnInit() {
    const token = JSON.stringify(localStorage.getItem('token-ionic'));
    const information = this.serviceAuth.getDecodedAccessToken(token);
    //console.log('email du user connected',information.username);
    this.serviceAuth.getLivreurs().subscribe(users=>{
     this.livreurConnected= users.find(user=>user.login===information.username);
     this.livraisons=this.livreurConnected.livraisons;
      console.log(this.livreurConnected.livraisons[0]);
     // console.log(this.livraisons);
   //   console.log(this.livreurConnected);
    });
  }
  code(event: any) {
    this.idModal ='open-modal';
    //event.target.id='open-modal';
    console.log(event.target.id);
  }

  qrCode() {
    alert('qr code');
  }
}

