import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackService} from '../../../services/back.service';

@Component({
  selector: 'app-detail-livraison',
  templateUrl: './detail-livraison.page.html',
  styleUrls: ['./detail-livraison.page.scss'],
})
export class DetailLivraisonPage implements OnInit {
  commandes: any;
  zone: string;
  constructor(private activeRoute: ActivatedRoute,private servicebd: BackService,) { }

  ngOnInit() {
    const idLivraison = + this.activeRoute.snapshot.params.id;
    this.servicebd.getLivraisonById(idLivraison).subscribe(data=>{
      this.commandes=data.commandes;
      data.commandes.forEach(comande=>{
         this.zone=comande.zone.nom;
      });
    });
  }

}
