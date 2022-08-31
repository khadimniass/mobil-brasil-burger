import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackService} from '../../../services/back.service';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-detail-livraison',
  templateUrl: './detail-livraison.page.html',
  styleUrls: ['./detail-livraison.page.scss'],
})
export class DetailLivraisonPage implements OnInit{
  commandes: any;
  zone: string;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(IonModal) modal: IonModal;
  name: string;
  iscan = false;
  loading: HTMLIonLoadingElement = null;
  constructor(private activeRoute: ActivatedRoute,
              private servicebd: BackService,
              ) { }
  ngOnInit() {
    const idLivraison = + this.activeRoute.snapshot.params.id;
    this.servicebd.getLivraisonById(idLivraison).subscribe(data=>{
      this.commandes=data.commandes;
      data.commandes.forEach(comande=>{
         this.zone=comande.zone.nom;
      });
    });
  }
  //
  //
  cancel() {
    this.modal.dismiss(this.name, 'cancel');
  }
  confirm(commande: any) {
    console.log('la valeur saisie : ',+this.name);
    console.log('code commande : ',commande.code);
    this.modal.dismiss(this.name, 'confirm');
    this.name='';
    for (let i = 0; i < 4; i++) {

    }
  }
  qrcode() {
    this.iscan = !this.iscan;
  }
  code() {
  //  alert('code');
  }
}
