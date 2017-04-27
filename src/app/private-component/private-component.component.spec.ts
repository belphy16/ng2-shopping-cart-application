import { ProductComponent } from './private-component.component';
import { ProductService } from '../product.service';
import { MockBackend } from '@angular/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { BaseRequestOptions, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { Product } from '../Product';


let MockProduct: Product = <Product>{id: 1, name: 'Superman',src: 'new',info: 'hai how are you', price: 100};


describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
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
      declarations: [
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
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    productService = TestBed.get(ProductService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
