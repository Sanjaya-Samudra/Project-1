import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
    },
    { 
        path: 'product-details', 
        component: ProductDetailsComponent,
    },
];
