import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('input.autocomplete').autocomplete({
        data: {
          "Apple": null,
          "Apple1": null,
          "Appl2": null,
          "Apple3": null,
          "Apple4": null,
          "Microsoft": null,
          "Google": 'https://placehold.it/250x250'
        },
      });
    }); 
  }

}
