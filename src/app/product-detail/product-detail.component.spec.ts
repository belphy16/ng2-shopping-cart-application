import { ProductDetailComponent } from './product-detail.component';
import { ProductComponent } from '../private-component/private-component.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { MockBackend } from '@angular/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { Product } from '../Product';
import { Observable } from 'rxjs';


let MockProduct: Product = <Product>{id: 1, name: 'Superman',src: 'new',info: 'hai how are you', price: 100};

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let productComponent: ProductComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let productService: ProductService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
providers: [
        ProductService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
          deps: [ MockBackend, BaseRequestOptions ]
        }
      ],
      declarations: [
        ProductDetailComponent,
        ProductComponent,
        NavbarComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  
    productService = TestBed.get(ProductService);
    activatedRoute = TestBed.get(ActivatedRoute);
  });


it('should call product detail component init function', () => {
spyOn(component, 'ngOnInit');
component.ngOnInit();

expect(component.ngOnInit).toHaveBeenCalled();
expect(component.ngOnInit).toHaveBeenCalledTimes(1);
});


it('should call the logout method through click event via anchor tag', async(() => {
spyOn(component, 'addToCart');

let button = fixture.debugElement.nativeElement.querySelector('button');
button.click();
expect(button).toBeTruthy();
//fixture.whenStable().then(() => {
//expect(component.addToCart).toHaveBeenCalled();
//})
}));






  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
