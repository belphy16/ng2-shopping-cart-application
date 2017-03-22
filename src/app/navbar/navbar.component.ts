import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import {AuthenticationService, User} from '../my-new-service.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthenticationService]
})
export class NavbarComponent {

  public cart = [];
  
  public totalPrice;
  public totalItems;
  public login = false;

  constructor(private productService:ProductService, private _service:AuthenticationService) {}

  getPrice_Total() {
      let total = this.cart.reduce( (total, item) => {
        total += item.price;
        // slice excess decimal places and return the result
        let str = total.toString()
        let result = str.slice(0, str.indexOf('.') + 3)
        result = parseFloat(result)
        return result;
      }, 0)

      this.totalPrice = total;
      this.totalItems = this.cart.length; 

  }

logout() {
        this._service.logout();
    }

    

  ngOnInit() {
    // Subscribe to the observable to receive updates on the new products added to the cart 
    this.productService.subcribeCart()
      .then(obs => obs.subscribe(data => {
        this.cart = [...this.cart, data]
        this.getPrice_Total()
        
      }))

   

  }
  
}