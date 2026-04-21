import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'product-card',
  imports: [MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  @Input() productDetail: any;

  ngOnInit(): void {
    // console.log(this.productDetail);
  }
}
