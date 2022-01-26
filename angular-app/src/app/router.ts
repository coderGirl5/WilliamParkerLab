import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AutismComponent } from './autism/autism.component';
import { AppendixComponent } from './appendix/appendix.component';
import { NotFoundComponent } from './core';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'autism' },
  { path: 'appendix', component: AppendixComponent},
  { path: 'autism', component: AutismComponent},
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];
