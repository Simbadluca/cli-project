import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


export interface IProduct {
  id: number;
  nom: string;
  images: string[];
  note: number;
  isVisible: boolean;
  currentimage: number;
}

@Injectable()
export class ProductService {

  static BASE_URL = 'http://localhost:3000/products';

  products: IProduct[]=[
    {
      "id": 1,
      "nom": "Tarot",
      "images": ["./src/app/Images/tarot317.jpg", "./src/app/Images/tarot318.jpg"],
      "note": 5,
      "isVisible": true,
      "currentimage": 0
    },
    {
      "id": 2,
      "nom": "T-REX",
      "images": ["./src/app/Images/trex01.jpg", "./src/app/Images/trex02.jpg"],
      "note": 4,
      "isVisible": true,
      "currentimage": 0
    },
    {
      "id": 3,
      "nom": "Protos",
      "images": ["./src/app/Images/Protos.jpg", "./src/app/Images/Protos2.jpg"],
      "note": 3,
      "isVisible": true,
      "currentimage": 0
    },
    {
      "id": 4,
      "nom": "MiniTitan",
      "images": ["./src/app/Images/mtitan1.jpg", "./src/app/Images/mtitan2.jpg"],
      "note": 3,
      "isVisible": true,
      "currentimage": 0
    }
  ];

  constructor(private _http: Http) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get(ProductService.BASE_URL)
      .map(response => response.json())
      .do(products => console.log(`Retrieve products(${products.length})`, products))
      .catch(err => {
        console.error(`Something goes wrong!`, err);
        return Observable.throw(err);
      });
  }

  getObservableProducts(): Observable<IProduct[]> {
    return new Observable(observer => {
      observer.next(this.products);
    });
  }

}
