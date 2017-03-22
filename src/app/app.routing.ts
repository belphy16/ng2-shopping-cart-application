import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './my-new-component/my-new-component.component';
import { ProductComponent } from './private-component/private-component.component';
import { ProductDetailComponent }  from './product-detail/product-detail.component';
import { CartComponent }  from './cart/cart.component';


const appRoutes: Routes = [
  { path: 'home', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: '', component: LoginComponent },
  

];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);