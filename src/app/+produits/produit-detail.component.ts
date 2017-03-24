import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/mergeMap';

import { IProduct, ProductService } from '../shared/models/product.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  $product: Subscription;
  product: IProduct;

  pageTitle: string = 'Product Detail';

  constructor(private _route: ActivatedRoute, private _productService: ProductService) {}

  ngOnInit() {
    this.$product = this._route.params
      .flatMap(params => this._productService.getProductById(parseInt(params['id'])))
      .subscribe(
        product => this.product = product,
        err => console.error(err)
      );
  }

  ngOnDestroy() {
    this.$product.unsubscribe();
  }

}
