import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  products$: Observable <any>;

  constructor(private productsService : ProductService) { 
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {
        duration: 1000,        
      });
    });
  }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
    this.products$.subscribe(product => console.log(product));
  }

}
