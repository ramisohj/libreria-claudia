import { Component } from '@angular/core';

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html'
})
export class ProductListComponent {

    productos: any[] = [{ nombre: "Borradores", precio: "2bs", imagen: "../../../assets/images/borradores.jpg", stock: "100", descripcion: "MILAN" },
    { nombre: "Compas", precio: "8bs", imagen: "../../../assets/images/compas.png", stock: "50", descripcion: "" },
    { nombre: "Estuche", precio: "30bs", imagen: "../../../assets/images/estuche.jpg", stock: "15", descripcion: "" },
    { nombre: "Lapiceros", precio: "1bs", imagen: "../../../assets/images/lapiceros.jpg", stock: "150", descripcion: "" },
    { nombre: "Marcadores", precio: "5bs", imagen: "../../../assets/images/marcadores.jpg", stock: "150", descripcion: "" },
    { nombre: "Hojas a Colores", precio: "30bs", imagen: "../../../assets/images/paquete_hojas_colores.jpg", stock: "150", descripcion: "Paquete de Hojas a colores" }];
}