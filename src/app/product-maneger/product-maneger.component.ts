import {Component, OnInit} from '@angular/core';
import {Product} from '../Product';
import {ProductServiceService} from '../product-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-maneger',
  templateUrl: './product-maneger.component.html',
  styleUrls: ['./product-maneger.component.css']
})
export class ProductManegerComponent implements OnInit {
  // data = ListProduct;
  // //
  // //
  // xoaSp(pro: Product) {
  //   this.data = this.data.filter(function(value) {
  //     return value !== pro;
  //   });
  // }
  searchText;
  pro: Product[];
  prodetail: Product;
  product: Product;
  button: boolean = true;

  page = 1;
  pageSize = 12;


  // xem(pr): void {
  //   this.prodetail = pr;
  // }
  //
  //
  // thoat(): void {
  //   this.prodetail = null;
  // }

  constructor(
    private productServiceService: ProductServiceService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productServiceService.getProducts().subscribe(data => {
      this.pro = data;
    });
  }

  them() {
    this.product = new Product();
    this.button = false;
  }

  exit() {
    this.button = true;
    this.product = null;
  }

  deleteProduct(id) {
    this.productServiceService.deleteProduct(id).subscribe(data => {
      // this.router.navigateByUrl('/admin');
      this.getProducts();
    });
  }

  // addProduct() {
  //   this.p.id = this.pro.length + 1;
  //   this.productServiceService.addProduct(this.p);
  // }
}
