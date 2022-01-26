import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AutismComponent } from './autism/autism.component';
import { NotFoundComponent } from './core';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'research' },
  { path: 'research', component: AutismComponent},
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];
