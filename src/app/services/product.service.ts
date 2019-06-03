import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/ProductModel';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productList: Array<Product> = [];

  private listObservable$: Observable <any>;

  constructor( private firestore: AngularFirestore) {
    this.listObservable$ = new Observable<any>();
    this.listObservable$ = this.getAllProducts();
  }

  createProduct(product) {
    return this.firestore.collection('product').add(product);
  }

  getProducts() {
    return this.firestore.collection('product').snapshotChanges();
  }

  get3Products() {
    let list3Products: any[] = new Array(3);
    let index = 0;
    //test:
    console.log('GET 3 PRODUTCS !!!!!');
    console.log('PRINT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! PRODUCTS --> ', this.products$);
    this.printID();
    this.firestore.collection('product').snapshotChanges().forEach(actions => {
      return actions.map(action => {
        const product = action.payload.doc.data();
        if(index<3){
          list3Products[index] = product;
          index++;
        }
      });
    });
    return list3Products;
  }

  search( word ) {
    this.firestore.collection('product').snapshotChanges().forEach(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data();
        const name = data['name'];
      });
    });
  }

  updateProduct(id,product){
    this.firestore.doc('product/' + id).update(product);
  }

  deleteProduct(id) {
    this.firestore.doc('product/' + id).delete();
  }

  getAllProducts() {
    let allProducts: Observable<any>;
    allProducts = new Observable<any>();
    this.firestore.collection('product').snapshotChanges().forEach(actions => {
      actions.map(action => {
        console.log('ID -----> ', action.payload.doc.id);
        let product = action.payload.doc.data();
        product['id'] = action.payload.doc.id;
        console.log('Product ID ------------------------> ', product)
        console.log('product name --> ', product['name'])
        
      });
    });
    return allProducts;
  }

  printID() {
    console.log('Printing IDs !!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.log('Products IDSSSSSSSSSSSSSSSSSSSSSS', this.listObservable$);
    console.log('Printinf id\' user idsss ::::' )
    console.log('PRODUCST --> ', this.listObservable$);
    const listProducts = this.listObservable$;
    //console.log('Print index --> ', listProducts.length);
    listProducts.forEach(product => {
      console.log('Value --> ', product['name']);
    });
  }

}
