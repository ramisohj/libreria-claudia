import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { CartModel } from '../models/CartModel';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartModel : CartModel;
  private obsCart = new BehaviorSubject<CartModel>(new CartModel());
  cast = this.obsCart.asObservable();

  updateCart(newCart) {
    this.obsCart.next(newCart);
  }

  removeCart(data: CartModel) {
    let values = this.cartModel.cartShopping$;
    let this$ = this;
 
      values.forEach(function(item) {
         if(item['id'] === data['id']) {
            this$.cartModel.delete(data);
          }
      });
    this.updateCart(this.cartModel)
  }

  constructor() {
    this.cartModel = new CartModel();
  }
}
