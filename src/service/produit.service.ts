import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Produit} from "../model/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiServerUrl=environment.apiBaseUrl+'/produit';

  constructor(private http: HttpClient) { }

  public getProduits(): Observable<Produit[]>{
    return this.http.get<Produit[]>(`${this.apiServerUrl}/all`);
  }

  public addProduit(produit :Produit): Observable<Produit>{
    return this.http.post<Produit>(`${this.apiServerUrl}/add`,produit);
  }

  public updateProduit(produit :Produit): Observable<Produit>{
    return this.http.put<Produit>(`${this.apiServerUrl}/update`,produit);
  }

  public deleteProduit(id : number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${id}`);
  }
}
