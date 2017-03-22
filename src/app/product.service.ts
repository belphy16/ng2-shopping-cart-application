import { Injectable } from '@angular/core';
import { PRODUCTS } from './product-data';
import { Product } from './Product'; 
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ProductService {

    public cart;
    public cart$:Subject<any>;

    constructor() { 
        this.cart = [];
        this.cart$ = new Subject();
    }

    addToCart(product:Product[]) {
    
        this.cart = [...this.cart, product]
        this.cart$.next(product)
        
    }
    
    // Returns an observable for the cart
    subcribeCart() {
        return Promise.resolve(this.cart$)
    }

    // Returns an array of objects of the items in the cart
    getCart() {
        return Promise.resolve(this.cart);
    }

    getProducts() {
        return Promise.resolve(PRODUCTS)
    }

    getProduct(id) {
        return this.getProducts()
                    .then(products => products.find(product => product.id === id))
    }

}
