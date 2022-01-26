import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="menu">
    <p class="menu-label">Welcome</p>
      <ul class="menu-list">
        <a routerLink="/about" routerLinkActive="router-link-active">
          <span>About Us</span>
        </a>
      </ul>
      <p class="menu-label">Autism Research</p>
      <ul class="menu-list">
          <a routerLink="/autism" routerLinkActive="router-link-active">
            <span>The Link Between Autism and Acetaminophen</span>
          </a>
          <a routerLink="/appendix" routerLinkActive="router-link-active">
          <span>The Appendix as a Safe House</span>
        </a>
      </ul>
   
      <img src="assets/Images/WilliamParkerLabLogo.png" />
    </nav>
  `,
})
export class NavComponent {}
