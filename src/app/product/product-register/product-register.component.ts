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
    this.productService.getProducts().subscribe(
      data => {
        this.product = data.map(e=>{
          return{
            id:e.payload.doc.id,
            name:e.payload.doc.data()['name'],
            description:e.payload.doc.data()['description'],
            price:e.payload.doc.data()['price'],
            stock:e.payload.doc.data()['stock'],
            image:e.payload.doc.data()['image']
          };
        })
        console.log(this.product);
      }
    );
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
