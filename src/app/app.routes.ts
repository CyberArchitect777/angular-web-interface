import { Routes } from '@angular/router';
import { Index } from './index/index';
import { RandomForm } from './random-form/random-form';

export const routes: Routes = [
    { path: '', component: Index},
    { path: 'random-form', component: RandomForm}
    
];

