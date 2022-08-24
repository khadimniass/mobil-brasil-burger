import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackService {
  private readonly urlCatlogue: string ='http://127.0.0.1:8000/api/catalogues';
  private readonly urlProduit: string = 'http://127.0.0.1:8000/api/produits';

  constructor(
    private http: HttpClient
  ) {}
  getCatalogueObs(): Observable<any>{
    return this.http.get<any>(this.urlCatlogue);
  }
  getProduitById(idProduit: number): Observable<any>{
    return this.http.get<any>(this.urlProduit+'/'+idProduit);
  }
}
