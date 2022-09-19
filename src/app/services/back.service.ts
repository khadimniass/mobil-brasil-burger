import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackService {
  private readonly urlCatlogue: string ='http://127.0.0.1:8000/api/catalogues';
  private readonly urlProduit: string = 'http://127.0.0.1:8000/api/produits';
  private readonly urlLivraison: string = 'http://127.0.0.1:8000/api/livraisons';
  private readonly urlClient: string = 'http://127.0.0.1:8000/api/users';
  private readonly urlcommandes: string = 'http://127.0.0.1:8000/api/commandes';
  constructor(
    private http: HttpClient
  ){}
  getCatalogueObs(): Observable<any>{
    return this.http.get<any>(this.urlCatlogue);
  }
  getProduitById(idProduit: number): Observable<any>{
    return this.http.get<any>(this.urlProduit+'/'+idProduit);
  }
  getLivraisonById(id: number): Observable<any>{
    return this.http.get<any>(this.urlLivraison+'/'+id);
  }
  getClientByEmail(email: string): Observable<any>{
    return this.http.get<any>(this.urlClient+'?login='+email);
  }
  getCommandeById(id: number){
    return this.http.get<any>(this.urlcommandes+'/'+id);
  }
  updateCommande(commande: any, status: string){
    this.http.put(this.urlcommandes+'/'+commande.id, {etat:status}).subscribe((comupdated: any)=>{
      comupdated.etat = status;
      }
    );
  }
  getCommandeByCode(code: number){
    return this.http.get(this.urlcommandes+'?code='+code);
  }
}
