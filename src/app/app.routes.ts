import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Products} from './products/products';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },// Redirect to home if no path is specified
  {path: "home", component: Home},  // Define the home route
  {path: "products", component: Products} // Define the products route
];
