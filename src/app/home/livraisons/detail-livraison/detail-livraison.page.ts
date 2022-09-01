import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
              private router: Router
              ) { }
  ngOnInit() {
    const idLivraison = + this.activeRoute.snapshot.params.id;
    this.servicebd.getLivraisonById(idLivraison).subscribe(data=>{
      this.commandes=data.commandes;
      data.commandes.forEach(comande=>{
         this.zone=comande.zone.nom;
      });
      console.log(this.commandes);
    });
  }
  cancel() {
    this.modal.dismiss(this.name, 'cancel');
  }
  confirm(commande: any) {
    console.log('la valeur saisie : ',+this.name);
    console.log('code commande : ',commande.code);
    this.modal.dismiss(this.name, 'confirm');
    this.name='';
  }
  qrcode() {
    this.router.navigateByUrl('home/scanner-qrcode');
  }
  code() {
  //  alert('code');
  }
}
