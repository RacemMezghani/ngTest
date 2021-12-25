import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../service/produit.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Produit} from "../../model/produit";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  //@ts-ignore
  public produits : Produit[];



  constructor(private produitService : ProduitService) {  }


  ngOnInit(): void {
    this.getProduits();
  }

  public getProduits(): void{
    this.produitService.getProduits().subscribe(
      (response: Produit[])=>{
        this.produits= response;
        console.log(response)},
      (error: HttpErrorResponse)=>{
        alert(error.message)}
    )
  }


}
