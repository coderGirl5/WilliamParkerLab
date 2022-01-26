import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="menu">
      <p class="menu-label">Autism Research</p>
      <ul class="menu-list">
          <a routerLink="/research" routerLinkActive="router-link-active">
            <span>The Link Between Autism and Acetaminophen</span>
          </a>
          <a routerLink="/about" routerLinkActive="router-link-active">
            <span>About Us</span>
          </a>
      </ul>
      <img src="assets/Images/WilliamParkerLabLogo.png" />
    </nav>
  `,
})
export class NavComponent {}
