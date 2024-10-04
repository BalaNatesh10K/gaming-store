import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent implements OnInit{
  products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
    { id: 4, name: 'Product 4', price: 24.99 },
  ];

  constructor() {}

  ngOnInit() {
    // In a real application, fetch products from the server here.
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.products = this.products.filter(product => product.id !== id);
    }
  }
}
