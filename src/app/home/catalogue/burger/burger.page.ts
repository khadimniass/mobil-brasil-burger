import { Component, OnInit } from '@angular/core';
import {Produit} from '../../../models/models.types';
import {ServicesService} from '../../../services/services.service';
import {BackService} from '../../../services/back.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.page.html',
  styleUrls: ['./burger.page.scss'],
})
export class BurgerPage implements OnInit {
  burgers: Produit[]=[];
  constructor(private service: ServicesService,
                private backService: BackService,
              ) { }

  ngOnInit() {
    this.backService.getCatalogueObs().subscribe(catalogue=>{
        this.burgers = catalogue.burgers;
    });
  }
  viewImg(img: string){
    return this.service.demanderAffichageImage(img);
  }
  ajouteraupanier(burger: any) {
  }
}
