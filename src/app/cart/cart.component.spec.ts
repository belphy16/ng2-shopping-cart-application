import { CartComponent } from './cart.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductService } from '../product.service';
import { MockBackend } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { BaseRequestOptions, Http } from '@angular/http';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let productService: ProductService;

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
      declarations: [ CartComponent, NavbarComponent],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    productService = TestBed.get(ProductService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
