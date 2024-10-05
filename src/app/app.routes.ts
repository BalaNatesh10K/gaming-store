import { Router, RouterLink, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'cart', component: CartComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'admin-products', component: AdminProductsComponent },
    { path: 'update-product/:id', component: UpdateProductComponent }, 
    { path: 'login', component: LoginComponent },
];
