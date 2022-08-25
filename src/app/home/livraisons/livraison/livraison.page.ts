import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../../security/service/authentification.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.page.html',
  styleUrls: ['./livraison.page.scss'],
})
export class LivraisonPage implements OnInit {
livreurConnected: any;

  constructor(private serviceAuth: AuthentificationService) { }

  ngOnInit() {
    const token = JSON.stringify(localStorage.getItem('token-ionic'));
    const information = this.serviceAuth.getDecodedAccessToken(token);
    //console.log('email du user connected',information.username);
    this.serviceAuth.getUsers().subscribe(users=>{
     this.livreurConnected= users.find((user=>user.login===information.username));
      //console.log(this.livreurConnected);
    });
  }
}

