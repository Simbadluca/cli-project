import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/layout/header/header.component';
import { StarComponent } from './star/star.component';
import { ArrayFilterPipe } from './shared/pipes/array-filter.pipe';
import { ProduitDetailComponent } from './+produits/produit-detail.component';
import { ProductService } from './shared/models/product.service';
import { ProduitListComponent } from './+produits/produit-list.component';
import { WelcomeComponent } from './+welcome/welcome.component';
import { ProduitExistsGuard } from './shared/guards/produit-exists.guard';

import { ROUTES } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    HeaderComponent,
    ArrayFilterPipe,
    ProduitDetailComponent,
    ProduitListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProductService, ProduitExistsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
