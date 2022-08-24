import { Component, OnInit } from '@angular/core';
import {Produit} from '../../../../models/models.types';
import {ActivatedRoute} from '@angular/router';
import {BackService} from '../../../../services/back.service';
import {ServicesService} from '../../../../services/services.service';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.page.html',
  styleUrls: ['./detail-menu.page.scss'],
})
export class DetailMenuPage implements OnInit {
  menu: Produit;
  menus!: Produit[];
  constructor(
    private activeRoute: ActivatedRoute,
    private servicebd: BackService,
    private service: ServicesService
  ) { }

  ngOnInit() {
    const idProduit = + this.activeRoute.snapshot.params.id;
    //this.produit=this.serviceCat.getBurgeryId(idProduit); // donne du tableau
    this.servicebd.getProduitById(idProduit).subscribe(data=>{
      this.menu=data;
      console.log(this.menu);
    });
    this.servicebd.getCatalogueObs().subscribe(catalogue => {
      this.menu=catalogue.menus;
    });
  }
  viewImg(img: string){
    return this.service.demanderAffichageImage(img);
  }
}
