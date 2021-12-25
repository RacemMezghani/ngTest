import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitsComponent} from "./produits/produits.component";
import {CommandesComponent} from "./commandes/commandes.component";
import {CommandeComponent} from "./commande/commande.component";

const routes: Routes = [
  {
    path: 'produits',
    pathMatch: 'full',
    component:ProduitsComponent
  },

  {
    path: 'commandes',
    pathMatch: 'full',
    component:CommandesComponent
  },
  {
    path: 'client/commande',
    pathMatch: 'full',
    component:CommandeComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
