import { Component, OnInit } from '@angular/core';
import { CartComponent } from  '../cart/cart.component';


declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{

  navbarOpen = false;

  toggleNavBar(){
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() { 
  }

  ngOnInit(): void {
    $(document).ready(() => {
      $(".dropdown-trigger").dropdown();
    });

    $(document).ready(() => {
      $(".dropdown-cartList").dropdown({
        constrain_width: false,
        gutter: 0, 
        belowOrigin: true, 
        alignment: 'center' 
        }
      );     
    });
  }
}
