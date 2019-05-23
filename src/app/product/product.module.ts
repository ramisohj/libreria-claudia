import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-list/product-card.component';
import { ProductRoutingModule } from './product-routing.router';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { ProductListAllComponent } from './product-list-all/product-list-all.component';
import { ProductItemComponent } from './product-item/product-item.component';
@NgModule({
  declarations: [ProductRegisterComponent,
    ProductListComponent, ProductCardComponent, ProductListAllComponent, ProductItemComponent],
  imports: [
    CommonModule,ProductRoutingModule,FormsModule
  ],providers:[
    ProductService
  ]
})
export class ProductModule { }
