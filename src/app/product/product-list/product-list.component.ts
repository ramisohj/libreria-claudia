import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html'
})
export class ProductListComponent implements OnInit {

    products: Product[];

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getProducts().subscribe(
            data => {
                this.products = data.map(e => {
                    return {
                        id: e.payload.doc.id,
                        name: e.payload.doc.data()['name'],
                        description: e.payload.doc.data()['description'],
                        price: e.payload.doc.data()['price'],
                        stock: e.payload.doc.data()['stock'],
                        image: e.payload.doc.data()['image']
                    };
                })
            }
        );
    }
}