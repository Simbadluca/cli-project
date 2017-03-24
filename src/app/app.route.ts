import { Routes } from '@angular/router';

import { ProduitListComponent } from './+produits/produit-list.component';


export const ROUTES: Routes = [
  {path: 'produit', component: ProduitListComponent},
  {path: '**', redirectTo: '/produit', pathMatch: 'full'}
];
