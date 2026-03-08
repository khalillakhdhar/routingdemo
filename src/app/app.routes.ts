import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Imc } from './imc/imc';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  {
    path: 'imc',
    component: Imc,
  },
];
