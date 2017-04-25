import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService, User} from '../my-new-service.service';

@Component({
    selector: 'login-form',
    templateUrl: './my-new-component.component.html',
    styleUrls: ['./my-new-component.component.css'],
    providers: [AuthenticationService]
})
export class LoginComponent {
 
    //public user = new User('','');
    user  = new FormGroup({
    email : new FormControl(),
    password : new FormControl()
    })
    public errorMsg = '';
 
    constructor(
        private _service:AuthenticationService) {}
 
    login() {
        if(!this._service.login(this.user.value)){
            this.errorMsg = 'Failed to login';
        }
    }
}
