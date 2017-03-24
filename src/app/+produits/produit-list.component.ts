import { Component, OnInit } from '@angular/core';
import { IProduct, ProductService } from '../shared/models/product.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  pageTitle: string = 'Liste des produits';
  listFilter: string;
  imageWidth: number = 250;
  imageMargin: number = 5;

  products: IProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe(
      products => this.products = products,
      err => console.log('An error occured', err)
    );
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
