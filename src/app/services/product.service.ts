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
    let lss: any[] = new Array(3);
    let index = 0;
    this.firestore.collection('product').snapshotChanges().forEach(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data();
        if(index<3){
          lss[index] = data;
          index++;
        }
      });
    });
    return lss;
  }

  updateProduct(id,product){
    this.firestore.doc('product/' + id).update(product);
  }

  deleteProduct(id) {
    this.firestore.doc('product/' + id).delete();
  }
}
