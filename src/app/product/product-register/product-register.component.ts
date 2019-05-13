import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/ProductModel';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent implements OnInit {
  product:any;
  productToCreate:Product={
    description:'',
    image:'',
    name:'',
    price:null,
    stock:null
  };

  constructor(private productService: ProductService) { }
  ngOnInit() {
    
  }
  createProduct() {
    let product = {};
    product['name'] = this.productToCreate.name;
    product['price'] = this.productToCreate.price;
    product['stock'] = this.productToCreate.stock;
    product['description'] = this.productToCreate.description;
    product['image'] = this.productToCreate.image;
    this.productService.createProduct(product).then(resp => {
      
      console.log(resp);
    }).catch(error => {
        console.log(error);
    });
  }

}
