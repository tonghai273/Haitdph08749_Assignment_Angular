import {Injectable} from '@angular/core';
import {Product} from './Product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  api = 'https://5e79b9a117314d00161334f5.mockapi.io/product';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
    // return this.products;
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
  }

  addProduct(product): Observable<Product> {
    return this.http.post<Product>(`${this.api}`, product);
  }

  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }

  // deleteProduct(product): Observable<Product> {
  //   return this.http.delete<Product>(`${this.api}/${product.id}`);
  // }

  deleteProduct(id): Observable<Product> {
    return this.http.delete<Product>(`${this.api}/${id}`);
  }

  //
  // product: Product;
  // data = ListProduct;

  // getProducts() {
  //   return this.data;
  // }
  //
  // addProduct(pro) {
  //   let newObj = {image: '', ...pro};
  //   this.data.push(newObj);
  // }

  // xoaSp(product) {
  //   this.data = this.data.filter(function(value) {
  //     return value !== product;
  //   });
  // }
  //
  // getbyID = (id: number) => {
  //   const product = this.getProducts().filter(p => p.id === id);
  //   if (product) {
  //     return product;
  //   } else {
  //     throw  Error('Not Found');
  //   }
  // };

  // updateProduct(product) {
  //   this.data.forEach((value, index) => {
  //     if (value.id === product.id) {
  //       this.data = this.data.splice(index, 1, product);
  //     }
  //   });
  // }

}
