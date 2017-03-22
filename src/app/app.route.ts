import { Routes } from '@angular/router';

import { ListProduitComponentsComponent } from './list-produit-components/list-produit-components.component';


export const ROUTES: Routes = [
  {path: 'product', component: ListProduitComponentsComponent},
  {path: '**', redirectTo: '/product', pathMatch: 'full'}
];
