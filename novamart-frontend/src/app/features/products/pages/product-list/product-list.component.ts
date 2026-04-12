import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  productService = inject(ProductService);

  ngOnInit(): void {
    console.log('Hello');

    // this.productService.getProductList().subscribe((result) => {
    //   console.log(result);
    // });
    // let obj = this.productService.getProductList();
    // console.log(obj.subscribe());

    this.productService.getProductList().subscribe({
      next: (result) => {
        console.log('Products:', result);
        console.log(result);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
      complete: () => {
        console.log('Request completed');
      },
    });
  }
}
