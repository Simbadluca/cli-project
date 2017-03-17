import { Component, OnInit } from '@angular/core';

interface IProduct {
  id: number,
  nom: string,
  images: string[],
  note: number,
  isVisible: boolean,
  currentimage: number
}

@Component({
  selector: 'app-list-produit-components',
  templateUrl: './list-produit-components.component.html',
  styleUrls: ['./list-produit-components.component.css']
})

export class ListProduitComponentsComponent implements OnInit {

  pageTitle: string = 'Liste des produits';

  products: IProduct[]=[];
  constructor() {
    this.products.push({
      id: 1,
      nom: 'Gufo',
      images: ['hungover18.jpg', 'hungover10.jpg'],
      note: 5,
      isVisible: true,
      currentimage: 0
    });

    this.products.push({
      id: 2,
      nom: 'Gatto',
      images: ['hungover2.jpg', 'hungover18.jpg'],
      note: 4,
      isVisible: true,
      currentimage: 0
    });

    this.products.push({
      id: 3,
      nom: 'Orso',
      images: ['hungover1.jpg', 'hungover12.jpg'],
      note: 5,
      isVisible: true,
      currentimage: 0
    });

  }

  whenClick(product: IProduct, newRating: number): void {}

  ngOnInit() {
  }

  MonOnClick(product: IProduct){
    product.currentimage=(product.currentimage +1) % product.images.length;
  }

  toggleImage (product: IProduct){
    product.isVisible = !product.isVisible;
  }
}
