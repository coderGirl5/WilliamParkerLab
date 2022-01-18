import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="content-container">
      <div class="content-title-group not-found">
        <h2 class="title">Our Team</h2>
        <p>
          Our lab team strives to conduct research that will significantly contribute to the scientific community. 
          Meet our current and past collaborators down below.
        </p>
        <br/>

        <h2 class="title">Current and Former Students</h2>
        <p>
          
        </p>
        <br />

        <h2 class="title">Howard Hughes Pre-College Program Students, North Carolina School of Science and Math fellows, and other high school students</h2>
        <ul>
          <li>1995 Sarah Washburn</li>
          <li>1996 Lilly Farrell</li>
          <li>1997 Catherine M. Ward</li>
          <li>2001 Lindsay A. Edwards</li>
        </ul>
      </div>
    </div>
  `,
})
export class AboutComponent {}
