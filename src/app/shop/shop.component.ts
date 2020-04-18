import {Component, OnInit} from '@angular/core';
import {Product} from '../Product';
import {ProductServiceService} from '../product-service.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

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

}
