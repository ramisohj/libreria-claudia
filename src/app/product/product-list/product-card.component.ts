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

    @Input()
    products:Product[];

    constructor(private cartService : CartService) { 

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {
                inDuration: 1000,        
            });
        });
        this.cartService = cartService;
    }

    ngOnInit() {
        this.productSelected$ = this.cartService.cartModel.productSelected$;
        this.cartModel$ =  this.cartService.cartModel;

        this.cartService.cast.subscribe(cartModel => 
            this.cartModel$ = cartModel
        );
    }

    addProductToCart(id, product) {
        this.cartService.cartModel.addProductToCart(id, product);
        this.productSelected$ = this.cartService.cartModel.productSelected$;
        this.cartModel$ = this.cartService.cartModel;
        this.cartService.updateCart(this.cartModel$);
    }
    
}