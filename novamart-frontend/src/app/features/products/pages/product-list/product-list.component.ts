import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductService } from '../../../../core/services/product.service';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { SomethingWentWrongComponent } from '../../../../shared/components/something-went-wrong/something-went-wrong.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, SomethingWentWrongComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit, OnDestroy {
  productService = inject(ProductService);

  $destroy = new Subject<void>();

  load = false;
  isError = false;
  productList: any;

  ngOnInit(): void {
    this.productService
      .getProductList()
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (result: any) => {
          console.log('Products:', result.data);
          this.productList = result.data;
        },
        error: (err: any) => {
          this.load = true;
          this.isError = true;
        },
        complete: () => {
          this.load = true;
        },
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
