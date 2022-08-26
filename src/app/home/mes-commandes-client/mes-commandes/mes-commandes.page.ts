import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../../security/service/authentification.service';
import {BackService} from '../../../services/back.service';

@Component({
  selector: 'app-mes-commandes',
  templateUrl: './mes-commandes.page.html',
  styleUrls: ['./mes-commandes.page.scss'],
})
export class MesCommandesPage implements OnInit {
  clientConnected: any;
  commandesClient: any[]=[];
  constructor(
    private authServe: AuthentificationService,
    private serviceBack: BackService
  ) { }

  ngOnInit() {
   const mailUserConnected= this.authServe.getDecodedAccessToken(JSON.stringify(localStorage.getItem('token-ionic'))).username;
    this.serviceBack.getClientByEmail(mailUserConnected).subscribe(clients=>{
      this.clientConnected= clients.find(clien=>clien.login===mailUserConnected);
      this.commandesClient=clients.find(clien=>clien.login===mailUserConnected).commandes;
      console.log('les commandes :)',this.commandesClient);
    });
  }
}
