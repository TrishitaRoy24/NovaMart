import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuItems = [
    {
      slug: 'home',
      label: 'Home',
    },
    {
      slug: 'products',
      label: 'Products',
    },
    {
      slug: 'favorites',
      label: 'Favorites',
    },
    {
      slug: 'carts',
      label: 'Cart',
    },
  ];
}
