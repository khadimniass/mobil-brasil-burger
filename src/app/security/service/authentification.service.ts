import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  url = 'http://127.0.0.1:8000/api/login';
  constructor(private http: HttpClient,
              private router: Router) { }
  login(user: any){
    return this.http.post<any>(this.url,user).subscribe(token=>{
      console.log(this.getDecodedAccessToken(JSON.stringify(token)));
      this.router.navigateByUrl('home/catalogue');
    });
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}
