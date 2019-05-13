import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/ProductModel';
import { NgForm } from '@angular/forms/src/directives/ng_form';
@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent implements OnInit {
  product:any;
  url = '';
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
  createProduct(form: NgForm) {
    if(form.valid === true && this.url!=''){
      let product = {};
      product['name'] = this.productToCreate.name;
      product['price'] = this.productToCreate.price;
      product['stock'] = this.productToCreate.stock;
      product['description'] = this.productToCreate.description;
      product['image'] = this.url;
      this.productService.createProduct(product).then(resp => {
        console.log(resp);
        }).catch(error => {
            console.log(error);
      });
      form.resetForm();
      this.url='';
    }else{
      console.log('invalido');
    }
  }
  onSelectFile(event) {
    var element = document.getElementById('preview');
    element.classList.remove('preview_img');

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: Event) => {
        this.url = event.target.result;
      }
      }
  }
}
