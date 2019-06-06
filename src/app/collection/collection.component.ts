import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collections$: any[] ;

  constructor(private productsService : ProductService) { 
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {
        duration: 1000,        
      });
    });
  }

  ngOnInit() {
    this.productsService.search('Borrador');
    this.collections$ = this.productsService.get3Products();
  }
  
}
