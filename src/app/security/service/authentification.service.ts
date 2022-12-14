import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  url = 'http://127.0.0.1:8000/api/login';
  urlAllLivreur = 'http://127.0.0.1:8000/api/livreurs';
  token='';
  informationUserConnectd: any;
  public userCon: any;
  allUser: any[]=[];
  private readonly urlClient: string = 'http://127.0.0.1:8000/api/clients';
  constructor(private http: HttpClient,
              private router: Router) { }
  login(user: any){
    return this.http.post<any>(this.url,user).subscribe(token=>{
      this.token = JSON.stringify(token);
     const role = this.getDecodedAccessToken(JSON.stringify(token)).roles[0];
     this.informationUserConnectd = this.getDecodedAccessToken(JSON.stringify(token));
      if (role==='ROLE_CLIENT') {
        this.router.navigateByUrl('home/catalogue');
      } else if (role==='ROLE_LIVREUR') {
        this.router.navigateByUrl('home/livraison');
      } else if (role==='ROLE_GESTIONNAIRE'){
        alert('la partie gestionnaire est reserve pour la partie web seulement, veillez ouvrir un compte client');
        this.router.navigateByUrl('register');
        return;
      }
      localStorage.setItem('token-ionic',JSON.stringify(token));
    });
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
  getToken(){
      return this.token;
  }
  deconnexion(){
    localStorage.removeItem('token-ionic');
  }
  getLivreurs(): Observable<any>{
    return this.http.get<any>(this.urlAllLivreur);
  }
  register(user: any){
    return this.http.post(this.urlClient,user).subscribe(userInsered=>{
      console.log(userInsered);
    });
  }
}
