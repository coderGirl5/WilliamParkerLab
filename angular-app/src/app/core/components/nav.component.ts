import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="menu">
      <p class="menu-label">Menu</p>
      <ul class="menu-list">
        <a routerLink="/products" routerLinkActive="router-link-active">
          <span>Our Research</span>
        </a>
        <a routerLink="/about" routerLinkActive="router-link-active">
          <span>About Us</span>
        </a>
      </ul>
    </nav>
  `,
})
export class NavComponent {}
