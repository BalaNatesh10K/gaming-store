import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems = [
    { name: 'Marvel\'s Spiderman 2', price: 59.99, image: 'assets/products/spiderman.jpg', quantity: 1 },
    { name: 'PS5 Pro', price: 499.99, image: 'assets/products/ps5.jpg', quantity: 1 }
  ];

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeItem(item);
    }
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(i => i !== item);
  }

  totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
