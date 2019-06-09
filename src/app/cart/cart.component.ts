import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';
import { CartService } from '../services/cart.service';
import { CartModel } from '../models/CartModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    cartModel$ : CartModel;
    items$ : any[];

    user : string;

    @Input()
    products:Product[];

    constructor(private cartService : CartService) { 
        this.cartModel$ = cartService.cartModel;
        this.items$ = cartService.cartModel.cartShopping$;
    }

    ngOnInit() {

      this.cartService.cast.subscribe(cartModel => {
        this.cartModel$ = cartModel;
        this.items$ = this.cartService.cartModel.cartShopping$;
      })      
    }
}