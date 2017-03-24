import { Injectable } from '@angular/core';
import { CanActivate, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// import { IProduct } from '../../shared/models/product.service';
import { IProduct } from '../../+produits/produit-list.component';

@Injectable()
export class AdminGuard implements CanActivate, Resolve<IProduct> {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return true;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProduct {
      let id = parseInt(route.params['id']);

      return {
        "id": 2,
        "nom": "T-REX",
        "images": ["./src/app/Images/trex01.jpg", "./src/app/Images/trex02.jpg"],
        "note": 4,
        "isVisible": true,
        "currentimage": 0
    };
  }

}
