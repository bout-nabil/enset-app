import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {
  products = [
    { id: 1, name: 'Samsung', price: 1000 , description: 'A smartphone with a large display' ,stocked: 10, selected: true },
    { id: 2, name: 'Apple', price: 2000 , description: 'A smartphone with a sleek design' ,stocked: 5, selected: true },
    { id: 3, name: 'HP', price: 3000 , description: 'A laptop with high performance' ,stocked: 2, selected: false },
    { id: 4, name: 'Dell', price: 4000 , description: 'A laptop with a long battery life' ,stocked: 7, selected: false },
    { id: 5, name: 'Lenovo', price: 3000 , description: 'A laptop with a lightweight design' ,stocked: 0, selected: false },
  ]
  constructor() { }

  getAllProducts() {
    return this.products;
  }
  deleteProduct(product: any) {
    const confirmed = confirm(`Are you sure you want to delete ${product.name}?`);
    if (confirmed) {
      this.products = this.products.filter((p) => p.id !== product.id);
    }
  }
}
