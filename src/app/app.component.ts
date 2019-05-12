import { Component, OnInit } from '@angular/core';
import { Product } from './models/ProductModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'libreria-claudia';
  product: Array<Product>;
  ngOnInit(){
    this.product.push();
  }
}
