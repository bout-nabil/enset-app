import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Product} from '../services/product';

@Component({
  selector: 'app-products',
  imports: [
    FormsModule, // Import FormsModule for ngModel
    CommonModule // Import CommonModule for ngIf, ngFor, etc.
  ],
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  standalone: true // This component is standalone
})
export class Products implements OnInit {
  // Sample data for products
  products: Array<any> = [];

  constructor(private productService : Product) {
  }
  ngOnInit() {
    // Initialize products from the service
    this.getAllProducts();
  }

  getAllProducts() {
    this.products = this.productService.getAllProducts();
  }

  deleteProduct(product: any) {
    const confirmed = confirm(`Are you sure you want to delete ${product.name}?`);
    if (confirmed) {
      this.productService.deleteProduct(product);
      // Refresh the product's list after deletion
      this.getAllProducts();
    }
  }
}
