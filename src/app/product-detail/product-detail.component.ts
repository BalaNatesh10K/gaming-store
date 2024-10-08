import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/productModel/product';
import { ProductService } from '../services/productService/product-service.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cartService/cart-service.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService // Inject CartService
  ) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    if (productId) {
      this.productService.getProductById(productId).subscribe((product: Product) => {
        this.product = product;
      });
    }
  }

  addToCart(product: Product) {
    const cartItem = {
      cartId: 1, // Static for now; replace with user's cart ID if needed
      productId: product.id,
      quantity: 1
    };

    this.cartService.addToCart(cartItem); // Use CartService to add item
    console.log(`${product.name} added to cart!`);
  }
}
