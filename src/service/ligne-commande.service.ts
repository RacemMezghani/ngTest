import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LigneCommande} from "../model/ligneCommande";

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {

  private apiServerUrl=environment.apiBaseUrl+'/ligneCommande';

  constructor(private http: HttpClient) { }

  public getLigneCommandes(): Observable<LigneCommande[]>{
    return this.http.get<LigneCommande[]>(`${this.apiServerUrl}/all`);
  }

  public addLigneCommande(ligneCommande :LigneCommande): Observable<LigneCommande>{
    return this.http.post<LigneCommande>(`${this.apiServerUrl}/add`,ligneCommande);
  }

  public updateLigneCommande(ligneCommande :LigneCommande): Observable<LigneCommande>{
    return this.http.put<LigneCommande>(`${this.apiServerUrl}/update`,ligneCommande);
  }

  public deleteLigneCommande(id : number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${id}`);
  }
}
