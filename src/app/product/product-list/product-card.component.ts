import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';
import { ProductService } from '../../services/product.service';
import * as M from 'materialize-css';

@Component({
    selector: 'product-card',
    templateUrl: 'product-card.component.html'
})
export class ProductCardComponent { 

    service : ProductService;
    productSelected$ : Object;
    cart$ : any[];
    totalPrice$ : number;
    totalItems$ : number;

    @Input()
    products:Product[];

    constructor(service : ProductService) { 
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {
                inDuration: 1000,        
            });
        });
        this.service = service;
        this.totalPrice$ = service.getTotalPrice();
        this.totalItems$ = service.getTotalItems();
    }

    ngOnInit() {
        this.productSelected$ = this.service.getProductSelected();
        this.cart$ =  this.service.getCart();
    }

    addProductToCart(id, product) {
        this.service.addProductToCart(id, product);
        this.productSelected$ = this.service.getProductSelected();
        this.cart$ = this.service.getCart();
        this.totalPrice$ = this.service.getTotalPrice();
        this.totalItems$ = this.service.getTotalItems();
        console.log('ADDED !!!');
    }
    
}