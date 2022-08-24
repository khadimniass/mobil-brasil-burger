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
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input() burger!: Produit;
  constructor() {}
  ngOnInit() {
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
}
