import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';
import { CartService } from '../../services/cart.service';
import * as M from 'materialize-css';
import { CartModel } from 'src/app/models/CartModel';

@Component({
    selector: 'product-card',
    templateUrl: 'product-card.component.html'
})
export class ProductCardComponent implements OnInit { 

    productSelected$ : Object;
    cartModel$ : CartModel;
    numAdded$: number;

    @Input()
    products:Product[];
    public counter : number = 0;

    constructor(private cartService : CartService) { 
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {
                inDuration: 1000,        
            });
        });
        this.numAdded$ = 1;
        this.cartService = cartService;
        this.cartModel$ = cartService.cartModel;
        this.productSelected$ = this.cartService.cartModel.productSelected$
    }

    ngOnInit() {
        this.cartModel$ =  this.cartService.cartModel;
        this.cartService.cast.subscribe(cartModel => 
            this.cartModel$ = cartModel,
            this.productSelected$ = this.cartService.cartModel.productSelected$
        );
    }

    addProductToCart(id, product) {
        this.numAdded$ = product.addToCart;
        this.cartService.cartModel.addProductToCart(id, product);
        this.productSelected$ = this.cartService.cartModel.productSelected$;
        this.cartModel$ = this.cartService.cartModel;
        this.cartService.updateCart(this.cartModel$);
    }

    increment(product : Product){
        if (product.stock > product.addToCart){
            product.addToCart +=1;
        }
    }
      
    decrement(product : Product){
        if (product.addToCart != 1){
            product.addToCart -=1;
        }
    }

    
}