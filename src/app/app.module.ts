import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './my-new-component/my-new-component.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './private-component/private-component.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductDetailComponent,
    NavbarComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
