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

  constructor() {
    this.cartModel = new CartModel();
  }
}
