import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public appPages = [
    { title: 'Nos menu', url: '#', icon: 'menu' },
    { title: 'Nos burgers', url: '#', icon: 'fast-food' },
    { title: 'Nos complements', url: '#', icon: 'beer' },
    { title: 'mes commandes', url: '#', icon: 'heart' },
    { title: 'deconnexion', url: '/home', icon: 'power' },
  ];
}
