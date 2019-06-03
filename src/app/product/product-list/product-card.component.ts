import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'product-card',
    templateUrl: 'product-card.component.html'
})
export class ProductCardComponent { 

    totalPrice$ = 0;
    public itemProducts = new Map();//[id, producto]
    cartItems$: any[] ;//cart items, only product list

    constructor(private productService : ProductService) { 
        
    }

    @Input()
    products:Product[];

    private addProductToCart(id, product) {
        let item = product;
        if(this.itemProducts.has(id)) {
            item['quantity'] = item['quantity'] + 1;
            this.itemProducts.set(id,item);
        } else {
            item['quantity'] = 1;
            this.itemProducts.set(id,item);            
        }
        this.cartItems$ = Array.from( this.itemProducts.values());
        this.calculateTotalPrice();
    }

    private calculateTotalPrice() {      
        this.totalPrice$ = 0; 
        for(let item of this.cartItems$) {
            this.totalPrice$ += (item.quantity * item.price);
        }
    }
}