import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';
import { ProductService } from '../services/product.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

    service : ProductService;
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
        this.cart$ = this.service.getCart();
        this.totalPrice$ = this.service.getTotalPrice();
        this.totalItems$ = this.service.getTotalItems();
    }
    ngOnInit() {
      this.cart$ =  this.service.getCart();
    }
}