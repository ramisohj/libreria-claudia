import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-list/product-card.component';
import { ProductRoutingModule } from './product-routing.router';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProductRegisterComponent,
    ProductListComponent, ProductCardComponent],
  imports: [
    CommonModule,ProductRoutingModule,FormsModule
  ],providers:[
    ProductService
  ]
})
export class ProductModule { }
