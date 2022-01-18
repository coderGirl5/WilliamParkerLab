import { Component } from '@angular/core';

@Component({
  selector: 'app-header-bar-brand',
  template: `
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href=""
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab js-logo fa fa-flask fa-2x" aria-hidden="true"></i>
      </a>
      <a class="navbar-item nav-home" router-link="/">
        <span class="brand-first">William</span>
        <span class="brand-second">Parker</span>
        <span class="brand-third">Lab</span>
      </a>
    </div>
  `,
})
export class HeaderBarBrandComponent {}
