import { Product } from './ProductModel';
import { AngularFirestore } from '@angular/fire/firestore';

export class CartModel {

  cartMap = new Map();//[id, producto]  
  totalPrice$ : number; 
  totalProductos$ : number; 
  productSelected$ = Object;
  cartShopping$: any[] ;//cart items, only product list
  firestore: AngularFirestore;

  constructor() {
    this.loadCart();
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

  public async delete(value: CartModel) {
    this.cartMap.delete(value['id']);
    this.cartShopping$ = Array.from( this.cartMap.values());
    this.totalProduct();
    this.calculateTotalPrice();
  }

  public async getProduct(id){
    var product = null;
    this.firestore.doc('product/' + id).ref.get().then(function(doc) {
      if (doc.exists) {
        return doc.data();
      } 
    })
    return product;
  }

  public loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart != null){
      if(cart.length > 0) {
        cart.forEach(item => {
          this.cartMap.set(item['id'], item);
        });    
        this.cartShopping$ = Array.from( this.cartMap.values());
      }
    } else {
      this.cartShopping$ = [];
    }
    this.calculateTotalPrice();
    this.totalProduct();
  }

  public addProductToCart(id, product) {
    this.productSelected$ = product;
    let item = product;
    if(this.cartMap.has(id)) {
        item['quantity'] = this.cartMap.get(id)['quantity'] + 1;
        this.cartMap.set(id,item);
    } else {
        item['quantity'] = 1;
        this.cartMap.set(id,item);            
    }
    this.cartShopping$ = Array.from( this.cartMap.values());
    this.calculateTotalPrice();
    this.totalProduct();
    localStorage.setItem('cart', JSON.stringify(this.cartShopping$));    
  }

  private calculateTotalPrice() {      
    this.totalPrice$ = 0; 
    for(let item of this.cartShopping$) {
        this.totalPrice$ += (item.quantity * item.price);
    }
  }

  private totalProduct() {
      this.totalProductos$ = 0; 
      for(let item of this.cartShopping$) {
          this.totalProductos$ += item.quantity ;
      }
  }
}
  