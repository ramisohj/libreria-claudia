import { Component, Input } from '@angular/core';

@Component({
    selector: 'product-card',
    templateUrl: 'product-card.component.html',
    styleUrls: ['product-card.component.css'],
})
export class ProductCardComponent { 

    @Input()
    productos:string[];

}