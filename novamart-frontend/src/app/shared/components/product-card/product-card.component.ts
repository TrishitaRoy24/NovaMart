import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  @Input() productDetail: any;

  ngOnInit(): void {
    // console.log(this.productDetail);
  }
}
