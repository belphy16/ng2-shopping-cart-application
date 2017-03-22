import { TestBed, inject } from '@angular/core/testing';
import { PRODUCTS } from './product-data';
import { Product } from './Product';
import { ProductService } from './product.service';

describe('ProductService', () => {

const PRODUCT:Product[] = [
      { id: 1, name: 'Nexus S', src: "/assets/img/phones/nexus-s.0.jpg", price: 99.99, 
      info: "The Nexus S is a smartphone co-developed by Google and Samsung and manufactured by Samsung Electronics for release in 2010. It was the first smartphone to use the Android 2.3 Gingerbread operating system, and the first Android device to support Near Field Communication (NFC)." },
      { id: 2, name: 'Dell Venue', src: "/assets/img/phones/dell-venue.0.jpg", price: 109.99,
      info: "The Dell Venue is a line of Android smartphones and tablets manufactured by Dell. The first Dell Venue was released for both T-Mobile and AT&T in the United States, and for KT in South Korea. It was the second Dell smartphone to be released in the US and features the Dell Stage UI also found on the Dell Streak line of tablets." }
  ];




  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService]
    });
  });

  it('should be truthy', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

 it('should return whole data for listing', inject([ProductService], (service: ProductService) => {
    return service.getProducts().then( data => {
      expect(data).toEqual(PRODUCTS);
  });

  }));

it('should return single data for detail page', inject([ProductService], (service: ProductService) => {
    return service.getProducts(1).then( data => {
      expect(data).toEqual(PRODUCTS[0]);
  });

  }));






});
