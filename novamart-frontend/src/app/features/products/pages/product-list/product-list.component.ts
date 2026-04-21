import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';
import { JsonPipe } from '@angular/common';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [JsonPipe, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  productService = inject(ProductService);

  load = false;
  productList: any;

  ngOnInit(): void {
    this.productService.getProductList().subscribe({
      next: (result: any) => {
        console.log('Products:', result.data);
        this.productList = result.data;
      },
      error: (err: any) => {
        this.load = true;
      },
      complete: () => {
        this.load = true;
      },
    });
  }
}
