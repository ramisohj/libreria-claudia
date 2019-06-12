import { Component, OnInit } from '@angular/core';
import { CartComponent } from  '../cart/cart.component';
import { CartService } from '../services/cart.service';
import { CartModel } from '../models/CartModel';


declare var $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{

  navbarOpen = false;
  cartModel$ : CartModel;
  numItems : number;

  toggleNavBar(){
    this.navbarOpen = !this.navbarOpen;
  }

  constructor( private cartService : CartService ) { 
    this.cartModel$ = cartService.cartModel;
    this.numItems = 0;
  }

  ngOnInit(): void {
    $(document).ready(() => {
      $(".dropdown-trigger").dropdown();
    });    

    this.cartService.cast.subscribe(cartModel => {
      this.cartModel$ = cartModel;
      this.numItems = this.cartModel$.totalProductos$;
      console.log('NUMERO DE ITEMS --> ', this.numItems);   
    });

  }
  
}
