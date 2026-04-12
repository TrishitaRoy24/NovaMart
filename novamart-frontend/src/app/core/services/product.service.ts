import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
// import { environment } from '../../../environments/environment';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  baseURL = environment.apiUrl;

  constructor() {}

  getProductList() {
    // return this.http.get(`${this.baseURL}/products`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   observe: 'response',
    // });
    return this.http.get(`${this.baseURL}/products`);
  }
}
