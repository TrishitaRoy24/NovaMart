import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const product_routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent,
  },
];
