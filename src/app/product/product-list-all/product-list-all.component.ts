import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Product from '../product';

@Component({
  selector: 'app-product-list-all',
  templateUrl: './product-list-all.component.html',
  styleUrls: ['./product-list-all.component.css']
})
export class ProductListAllComponent implements OnInit {
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
