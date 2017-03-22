import { Component } from '@angular/core';
import {AuthenticationService, User} from '../my-new-service.service';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent {
    selectedProduct:Product;
    product:Product[];
    
    constructor(
        private productService:ProductService,
        private route:ActivatedRoute,
        private location:Location
    ) { }

    addToCart(product:Product[]) {
        console.log(product)
        this.productService.addToCart(product)
    }

    // To get selected product
    ngOnInit() {
        this.route.params.forEach(param => {
            let id = parseInt(param['id'])
            this.productService.getProduct(id)
                .then(product => this.selectedProduct = product)
        })
    }

    goBack() {
        this.location.back()
    }
}
