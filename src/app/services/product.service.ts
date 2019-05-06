import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/ProductModel';

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

  updateProduct(id,product){
    this.firestore.doc('product/' + id).update(product);
  }

  deleteProduct(id) {
    this.firestore.doc('product/' + id).delete();
  }
}
