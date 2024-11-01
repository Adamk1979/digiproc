// src/services/productService.ts

export async function fetchProducts() {
    const response = await fetch('http://localhost:4000/api/products');
    const products = await response.json();
    return products;
  }
  