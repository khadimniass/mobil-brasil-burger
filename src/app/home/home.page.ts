import { Component,OnInit } from '@angular/core';
import {BackService} from '../services/back.service';
import {Produit} from '../models/models.types';
import {ServicesService} from '../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  menus: Produit[]=[];
  burgers: Produit[]=[];
  viewer=true;
  linkParallax = 'https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg';
  constructor(private backService: BackService,
              private service: ServicesService) {}
  ngOnInit() {
    this.backService.getCatalogueObs().subscribe(catalogue=>{
      setTimeout(()=>{
      this.burgers = catalogue.burgers;
      this.menus = catalogue.menus;
      this.viewer=false;
      }, 2000);
    });
  }
  viewImg(img: string){
    return this.service.demanderAffichageImage(img);
  }
  details(id: number){
    alert('detail element');
  }
  ajouteraupanier(produit: Produit){
    alert('ajouter au panier');
  }
}
