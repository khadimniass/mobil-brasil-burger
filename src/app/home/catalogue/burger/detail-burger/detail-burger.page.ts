import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackService} from '../../../../services/back.service';
import {Produit} from '../../../../models/models.types';
import {ServicesService} from '../../../../services/services.service';

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-burger.page.html',
  styleUrls: ['./detail-burger.page.scss'],
})
export class DetailBurgerPage implements OnInit {
  burger: Produit;
  burgers!: Produit[];
  constructor(
    private activeRoute: ActivatedRoute,
    private servicebd: BackService,
    private service: ServicesService
  ) { }

  ngOnInit() {
    const idProduit = + this.activeRoute.snapshot.params.id;
    //this.produit=this.serviceCat.getBurgeryId(idProduit); // donne du tableau
    this.servicebd.getProduitById(idProduit).subscribe(data=>{
      this.burger=data;
    });
    this.servicebd.getCatalogueObs().subscribe(catalogue => {
      this.burgers=catalogue.burgers;
    });
  }
  viewImg(img: string){
    return this.service.demanderAffichageImage(img);
  }
}
