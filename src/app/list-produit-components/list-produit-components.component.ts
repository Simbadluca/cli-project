import { Component, OnInit } from '@angular/core';
import { IProduct, ProductService } from '../shared/models/product.service';

@Component({
  selector: 'app-list-produit-components',
  templateUrl: './list-produit-components.component.html',
  styleUrls: ['./list-produit-components.component.css']
})

export class ListProduitComponentsComponent implements OnInit {

  pageTitle: string = 'Liste des produits';
  listFilter: string;
  imageWidth: number = 200;
  imageMargin: number = 5;

  products: IProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  MonOnClick(product: IProduct){
    product.currentimage=(product.currentimage +1) % product.images.length;
  }

  toggleImage (product: IProduct){
    product.isVisible = !product.isVisible;
  }
}
