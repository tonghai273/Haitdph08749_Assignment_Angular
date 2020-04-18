import {Component, OnInit} from '@angular/core';
import {ListProduct} from '../ListProduct';
import {ProductServiceService} from '../product-service.service';
import {Product} from '../Product';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // data = ListProduct;

  constructor(private productServiceService: ProductServiceService) {
  }

  pro: Product[];
  page=1;
  pageSize = 12;

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productServiceService.getProducts().subscribe(data => {
      this.pro = data;
    });
  }

  //
  // getProducts() {
  //   this.pro = this.productServiceService.getProducts();
  // }
}
