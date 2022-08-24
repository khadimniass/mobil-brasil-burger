import { Component, OnInit } from '@angular/core';
import {Produit} from '../../../models/models.types';
import {BackService} from '../../../services/back.service';
import {ServicesService} from '../../../services/services.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.page.html',
  styleUrls: ['./list-menu.page.scss'],
})
export class ListMenuPage implements OnInit {
  menus: Produit[]=[];
  constructor(private backService: BackService,
              private service: ServicesService) { }

  ngOnInit() {
    this.backService.getCatalogueObs().subscribe(catalogue=>{
      setTimeout(()=>{
        //   this.burgers = catalogue.burgers;
        this.menus = catalogue.menus;
      }, 2000);
    });
  }
  viewImg(img: string){
    return this.service.demanderAffichageImage(img);
  }
  ajouteraupanier(produit: Produit){
    alert('ajouter au panier');
  }
}
