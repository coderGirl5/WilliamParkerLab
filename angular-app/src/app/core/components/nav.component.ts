import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="menu">
      <p class="menu-label">Menu</p>
      <ul class="menu-list">
        <a routerLink="/research" routerLinkActive="router-link-active">
          <span>Our Research</span>
        </a>
        <a routerLink="/about" routerLinkActive="router-link-active">
          <span>About Us</span>
        </a>
      </ul>
      <br />
      <br />
      <img src="assets/Images/WilliamParkerLabLogo.png" />
    </nav>
  `,
})
export class NavComponent {}
//<a routerLink="/products" routerLinkActive="router-link-active">
//<span>Our Research</span>
//</a>