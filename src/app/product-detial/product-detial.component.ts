import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../Product';
import {ActivatedRoute, Router, Routes} from '@angular/router';
import {ProductServiceService} from '../product-service.service';

@Component({
  selector: 'app-product-detial',
  templateUrl: './product-detial.component.html',
  styleUrls: ['./product-detial.component.css']
})
export class ProductDetialComponent implements OnInit {


  constructor(private service: ProductServiceService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  product: Product;

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.activatedRoute.params.subscribe(param => {
      this.service.getProduct(param.productID).subscribe(data => {
        this.product = data;
      });
    });
  }
}
