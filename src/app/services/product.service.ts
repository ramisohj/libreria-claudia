import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/ProductModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor( private firestore: AngularFirestore) {}

  createProduct(product) {
    return this.firestore.collection('product').add(product);
  }

  getProducts() {
    return this.firestore.collection('product').snapshotChanges();
  }

  get3Products() {
    var ls =  this.firestore.collection('product').snapshotChanges();
    let lss: any[] = [ls[0], ls[1],ls[2]];
    console.log('PRODUCT 3LITS --> ', lss);
    return this.firestore.collection('product').snapshotChanges();
  }

  updateProduct(id,product){
    this.firestore.doc('product/' + id).update(product);
  }

  deleteProduct(id) {
    this.firestore.doc('product/' + id).delete();
  }
}
