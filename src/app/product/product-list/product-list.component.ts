import { Component } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html'
})
export class ProductListComponent {

    products: Product[] = [{ name: "Borradores", price: 2, image: "../../../assets/images/borradores.jpg", stock: 100, description: "MILAN" },
    { name: "C ompas", price: 8, image: "../../../assets/images/compas.png", stock: 50, description: "" },
    { name: "Estuche", price: 30, image: "../../../assets/images/estuche.jpg", stock: 15, description: "" },
    { name: "Lapiceros", price: 1, image: "../../../assets/images/lapiceros.jpg", stock: 150, description: "" },
    { name: "Marcadores", price: 5, image: "../../../assets/images/marcadores.jpg", stock: 150, description: "" },
    { name: "Hojas a Colores", price: 30, image: "../../../assets/images/paquete_hojas_colores.jpg", stock: 150, description: "Paquete de Hojas a colores" }];
}