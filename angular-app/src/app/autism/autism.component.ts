import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  template: `
    <div class="content-container">
      <div class="content-title-group">
       <h2 class="title">The Link Between Autism and Acetaminophen</h2>
       <br/>
       </div>
       <div class="content-title-group not-found"> 
       <h2 class="title">Overview</h2>
        <p>
        Acetaminophen is one of the country’s most popular over-the-counter pain relievers, but there is a concerning link to the development of autism. This page is devoted to an objective look at the connection between acetaminophen use and the recent rise of autism. Although most infants and children are probably safe when taking acetaminophen, current evidence indicates that many infants and children, especially boys, have a condition (called oxidative stress) that, when combined with acetaminophen, leads to the development of autism. Below, there are various articles and blog post links where you can view our current knowledge regarding the connection between acetaminophen and autism.
        </p>
        <br/>

        <h2 class="title">2013</h2>
        <p>
          
        </p>
        <br />
        <h2 class="title">2012</h2>
        <p>
          
        </p>
        <br />
        
      </div>
    </div>
  `,
})

export class AutismComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
