import { Routes } from '@angular/router';

import { WelcomeComponent } from './+welcome/welcome.component';
import { ProduitListComponent } from './+produits/produit-list.component';
import { ProduitDetailComponent } from './+produits/produit-detail.component';
import { ProduitExistsGuard } from './shared/guards/produit-exists.guard';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'produits', component: ProduitListComponent},
  {
     path: 'produits/:id',
     component: ProduitDetailComponent,
     canActivate: [ProduitExistsGuard]
   },
   {path: '**', redirectTo: '/welcome', pathMatch: 'full'}
];
