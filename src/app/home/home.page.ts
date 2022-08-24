import {Component, Input, OnInit} from '@angular/core';
import {BackService} from '../services/back.service';
import {Produit} from '../models/models.types';
import {ServicesService} from '../services/services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  menus: Produit[]=[];
  burgers: Produit[]=[];
  viewer=true;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input() burger!: Produit;
  constructor(private backService: BackService,
              private service: ServicesService,
              private router: Router,
              ) {}
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
    this.router.navigate([`catalogue/burger/${id}`]);
  }
  ajouteraupanier(produit: Produit){
    alert('ajouter au panier');
  }

  segmentChanged(e: any) {
    console.log(e.detail.value);
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
}
