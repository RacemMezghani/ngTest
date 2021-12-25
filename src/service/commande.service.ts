import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Commande} from "../model/commande";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private apiServerUrl=environment.apiBaseUrl+'/commandes';

  constructor(private http: HttpClient) { }

  public getCommandes(): Observable<Commande[]>{
    return this.http.get<Commande[]>(`${this.apiServerUrl}/all`);
  }

  public addCommande(commande :Commande): Observable<Commande>{
    return this.http.post<Commande>(`${this.apiServerUrl}/add`,commande);
  }

  public updateCommande(commande :Commande): Observable<Commande>{
    return this.http.put<Commande>(`${this.apiServerUrl}/update`,commande);
  }

  public deleteCommande(id : number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${id}`);
  }
}
