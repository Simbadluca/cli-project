import { Component, OnInit } from '@angular/core';

// interface IProduct {
//   id: number;
//   nom: string;
//   image: string;
//   note: number;
// }

@Component({
  selector: 'app-list-produit-components',
  templateUrl: './list-produit-components.component.html',
  styleUrls: ['./list-produit-components.component.css']
})

export class ListProduitComponentsComponent implements OnInit {

  pageTitle: string = 'Liste des produits';
  products: any[] = [
        {
            "id": 1,
            "nom": "Garden Cart",
            "image": "GDN-0023",
            "note": 2
        },
        {
            "id": 2,
            "nom": "Cart",
            "image": "GDN-0023",
            "note": 3
        },
        {
            "id": 3,
            "nom": "Hammer",
            "image": "TBX-0048",
            "note": 5
        }
    ];

  // constructor(produtcs: IProduct[]=[]) {
  //   produtcs.push({
  //     id: 1,
  //     nom: 'Gufo',
  //     image: 'c:/Utilisateurs/Antonio/Images/hungover18.jpg',
  //     note: 5,
  //   });
  //
  //   produtcs.push({
  //     id: 2,
  //     nom: 'Gatto',
  //     image: 'c:/Utilisateurs/Antonio/Images/hungover2.jpg',
  //     note: 5,
  //   });
  //
  //   produtcs.push({
  //     id: 3,
  //     nom: 'Orso',
  //     image: 'c:/Utilisateurs/Antonio/Images/hungover1.jpg',
  //     note: 5,
  //   });
  //
  // }

  ngOnInit() {
  }

}
