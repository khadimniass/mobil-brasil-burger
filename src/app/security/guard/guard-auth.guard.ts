import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate(
    //next: ActivatedRouteSnapshot,
    route: ActivatedRouteSnapshot, //contient des informations comme les paramètres envoyés pour la route demandée...
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token-ionic');
    if (token){
      return true;
    }else {
      const navigation= this.router.getCurrentNavigation();
      console.log('navigation: ',navigation);
      console.log('queryParams : ',navigation.extractedUrl);
      let url= '';
      if (navigation){
        url= navigation.extractedUrl.toString();
      }
      this.router.navigateByUrl('register');
      return false;
    }
  }
}
