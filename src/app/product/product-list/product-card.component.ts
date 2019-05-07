import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';

@Component({
    selector: 'product-card',
    templateUrl: 'product-card.component.html'
})
export class ProductCardComponent { 

    @Input()
    products:Product[];

}