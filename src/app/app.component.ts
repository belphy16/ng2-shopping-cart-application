import { Component } from '@angular/core';
import {LoginComponent} from './my-new-component/my-new-component.component';
import {ProductComponent} from './private-component/private-component.component';

@Component({
    selector: 'my-app',
     templateUrl: './app.component.html',
	 styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Shopping Cart Application';
}
