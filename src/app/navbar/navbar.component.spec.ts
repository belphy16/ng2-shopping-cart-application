import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { ProductService } from '../product.service';
import { RouterTestingModule } from '@angular/router/testing';
import {AuthenticationService, User} from '../my-new-service.service';

describe('NavbarComponent', () => {
let component: NavbarComponent;
let fixture: ComponentFixture<NavbarComponent>;
let productService: ProductService;
let authService: AuthenticationService;


beforeEach(async(() => {
TestBed.configureTestingModule({
providers:[ProductService, AuthenticationService],
imports: [RouterTestingModule],
declarations: [ NavbarComponent ]
})
.compileComponents();
}));

beforeEach(() => {
fixture = TestBed.createComponent(NavbarComponent);
component = fixture.componentInstance;
fixture.detectChanges();
productService = TestBed.get(ProductService);
authService = TestBed.get(AuthenticationService);
});

describe('Navigation', () => {


it('should call the login method inside the Nav component', () => {
spyOn(component, 'getPrice_Total');
//spyOn(authService, 'login');
component.getPrice_Total();

expect(component.getPrice_Total).toHaveBeenCalled();
expect(component.getPrice_Total).toHaveBeenCalledTimes(1);
});

it('should call component init function', () => {
spyOn(component, 'ngOnInit');
component.ngOnInit();

expect(component.ngOnInit).toHaveBeenCalled();
expect(component.ngOnInit).toHaveBeenCalledTimes(1);
});

it('should call component logout function', () => {
spyOn(authService, 'logout');
component.logout();
expect(authService.logout).toBeTruthy();

});




it('should call the logout method through click event via anchor tag', async(() => {
spyOn(component, 'logout');

let button = fixture.debugElement.nativeElement.querySelector('#logout-event');
button.click();
expect(button).toBeTruthy();
fixture.whenStable().then(() => {
expect(component.logout).toHaveBeenCalled();
})
}));


});


it('should create', () => {
expect(component).toBeTruthy();
});
});
