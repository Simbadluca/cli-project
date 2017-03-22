import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.route';
import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/layout/header/header.component';
import { ListProduitComponentsComponent } from './list-produit-components/list-produit-components.component';
import { StarComponent } from './star/star.component';
import { ArrayFilterPipe } from './shared/pipes/array-filter.pipe';
import { ProduitDetailComponent } from './list-produit-components/produit-detail.component';
import { ProductService } from './shared/models/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ListProduitComponentsComponent,
    StarComponent,
    HeaderComponent,
    ArrayFilterPipe,
    ProduitDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
