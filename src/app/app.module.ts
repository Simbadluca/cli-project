import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { ListProduitComponentsComponent } from './list-produit-components/list-produit-components.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProduitComponentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [ListProduitComponentsComponent]
})
export class AppModule { }
