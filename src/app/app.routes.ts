import { Router, RouterLink, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsPageComponent } from './products-page/products-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    // { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent},
    {path:'cart', component: CartComponent},
    {path:'adminProducts', component:AdminProductsComponent},
    { path: 'add-product', component: AddProductComponent },
    { path: 'admin-products', component: AdminProductsComponent },
    { path: 'update-product/:id', component: UpdateProductComponent }, 
    { path: 'products/:id', component: ProductDetailComponent },
    { path: 'products-page/:category', component: ProductsPageComponent},
];
