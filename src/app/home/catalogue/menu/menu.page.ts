import { Component, OnInit } from '@angular/core';
import {BackService} from '../../../services/back.service';
import {Produit} from '../../../models/models.types';
import {ServicesService} from '../../../services/services.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menus: Produit[]=[];
  constructor(private backService: BackService,
              private service: ServicesService,) { }

  ngOnInit() {
    this.backService.getCatalogueObs().subscribe(catalogue=>{
        this.menus = catalogue.menus;
    });
  }
  viewImg(img: string){
    return this.service.demanderAffichageImage(img);
  }
  ajouteraupanier(produit: Produit){
    alert('ajouter au panier');
  }
}
