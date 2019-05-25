import { Component, OnInit, Input } from '@angular/core';
import {Product }from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product:Product;

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }
  deleteItem(id){
    this.productService.deleteProduct(id);
  }

}
