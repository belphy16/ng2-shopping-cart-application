import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductDetailComponent } from './product-detail.component';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { MockBackend } from '@angular/http/testing';


let MockProduct: Product = <Product>{id: 1, name: 'Superman',src: 'new',info: 'hai how are you', price: 100};

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let productService: ProductService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[ProductService],
      declarations: [ ProductDetailComponent, NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
