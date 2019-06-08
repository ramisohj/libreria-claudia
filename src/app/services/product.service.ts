import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //public cart$: Array<any> = [];
  private productList: Array<any> = [];

  private cartMap = new Map();//[id, producto]
  private cart$: any[] ;//cart items, only product list
  private totalPrice$ : number; 
  private totalProductos$ : number; 
  private productSelected$ = Object;

  constructor( private firestore: AngularFirestore) {
    this.productList = this.getAllProducts();
    this.loadCart();
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

  async getProductsForCart( mapProducts) {

    let idList = Array.from( mapProducts.keys() );
    let cartList: Array<Product> = [];

    for (let id of idList) {
      let  product = await this.getProduct(id);
      cartList.push(product);
    }
    return cartList;
  }

  async getProduct(id){
    var product = null;
    this.firestore.doc('product/' + id).ref.get().then(function(doc) {
      if (doc.exists) {
        return doc.data();
      } 
    })
    return product;
  }

  loadCart() {
    console.log('LOADING CART !!!!!!!!');
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart != null){
      if(cart.length > 0) {
        cart.forEach(item => {
          this.cartMap.set(item['id'], item);
        });    
        this.cart$ = Array.from( this.cartMap.values());
      }
    } else {
      this.cart$ = [];
    }
    this.calculateTotalPrice();
    this.totalProduct();
  }

  public addProductToCart(id, product) {
    let item = product;
    if(this.cartMap.has(id)) {
        item['quantity'] = item['quantity'] + 1;
        this.cartMap.set(id,item);
    } else {
        item['quantity'] = 1;
        this.cartMap.set(id,item);            
    }
    this.cart$ = Array.from( this.cartMap.values());
    this.calculateTotalPrice();
    this.totalProduct();
    this.productSelected$ = product;
    localStorage.setItem('cart', JSON.stringify(this.cart$));
    console.log(this.cart$);
  }

  private calculateTotalPrice() {      
    this.totalPrice$ = 0; 
    for(let item of this.cart$) {
        this.totalPrice$ += (item.quantity * item.price);
    }
  }

  private totalProduct() {
      this.totalProductos$ = 0; 
      for(let item of this.cart$) {
          this.totalProductos$ += item.quantity ;
      }
  }

  getTotalItems(){
    return this.totalProductos$;
  } 

  getTotalPrice(){
    return this.totalPrice$;
  }

  getProductSelected() {
    return this.productSelected$;
  }

  getCart(){
    return this.cart$;
  }

}
