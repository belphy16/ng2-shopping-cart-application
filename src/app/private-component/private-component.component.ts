import { Component} from '@angular/core';
import {AuthenticationService, User} from '../my-new-service.service';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
    selector: 'product',
    providers: [AuthenticationService],
    templateUrl: './private-component.component.html',
    styleUrls: ['./private-component.component.css']
})


export class ProductComponent {
  
  products:Product[];


  constructor (private _productService:ProductService, private router:Router, private _service:AuthenticationService) {

  }



  // To route product detail view
    clickedProduct(product) {
    let link = ['/detail', product.id];
    this.router.navigate(link);
  }

  // When add to cart button is clicked
  addToCart(product:Product[]) {
    this._productService.addToCart(product)
  }

  getProductData() {     
     this._productService.getProducts().then(products => this.products = products)
  }

  ngOnInit() {
    this._service.checkCredentials();
    // Get initial data from productService to display on the page
    this.getProductData()
  }

  logout() {
        this._service.logout();
    }

}

