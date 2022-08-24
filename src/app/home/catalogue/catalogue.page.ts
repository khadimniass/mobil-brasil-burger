import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../services/services.service';
import {BackService} from '../../services/back.service';
import {Router} from '@angular/router';
import {MenuController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  viewer=true;
  segment = 'grid';
  constructor(public navCtrl: NavController,
               private backService: BackService,
              private router: Router,
              private menu: MenuController
              ) { }

  ngOnInit() {
      setTimeout(()=>{
        this.viewer=false;
      }, 2000);
  }
}
