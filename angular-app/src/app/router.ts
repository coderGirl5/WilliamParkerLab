import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { ResearchComponent } from './research.component';
import { NotFoundComponent } from './core';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'research' },
  //{
  //  path: 'products',
  //  loadChildren: () =>
  //    import('./products/products.module').then((m) => m.ProductsModule),
  //},
  { path: 'research', component: ResearchComponent},
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];
