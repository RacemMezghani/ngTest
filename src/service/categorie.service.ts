import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Categorie} from "../model/categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiServerUrl=environment.apiBaseUrl+'/categorie';

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(`${this.apiServerUrl}/all`);
  }

  public addCategorie(categorie :Categorie): Observable<Categorie>{
    return this.http.post<Categorie>(`${this.apiServerUrl}/add`,categorie);
  }

  public updateCategorie(categorie :Categorie): Observable<Categorie>{
    return this.http.put<Categorie>(`${this.apiServerUrl}/update`,categorie);
  }

  public deleteCategorie(id : number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${id}`);
  }

}
