import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
// import { environment } from '../../../environments/environment';
import { environment } from '../../../environments/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  baseURL = environment.apiUrl;

  constructor() {}

  getProductList() {
    return this.http
      .get(`${this.baseURL}/products`)
      .pipe(catchError((error) => throwError(() => error)));
  }
}
