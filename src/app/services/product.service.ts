import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productList: Array<any> = [];

  constructor( private firestore: AngularFirestore) {
    this.productList = this.getAllProducts();
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
    let allProducts: Array<any> = [];
    this.firestore.collection('product').snapshotChanges().forEach(actions => {
      actions.map(action => {
        let product = action.payload.doc.data();
        product['id'] = action.payload.doc.id;
        allProducts.push(product);
      });
    });
    return allProducts;
  }
}
