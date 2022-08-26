import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackService} from '../../../../services/back.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.page.html',
  styleUrls: ['./detail-commande.page.scss'],
})
export class DetailCommandePage implements OnInit {
  commande: any;
  constructor(private activeRoute: ActivatedRoute,
  private servicebd: BackService
  ) { }

  ngOnInit() {
    const idCommande = + this.activeRoute.snapshot.params.id;
    this.servicebd.getCommandeById(idCommande).subscribe(com=>{
      this.commande= com;
    });
  }

}
