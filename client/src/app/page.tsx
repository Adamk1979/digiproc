// src/app/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { fetchProducts } from './services/productService';
import ProductCard from './components/ProductCard';
import styles from './styles/HomePage.module.css';

// Define the Product type
type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  color: string;
  rating: number;
};

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const products = await fetchProducts();
      setProducts(products);
    }
    loadProducts();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h1>Our Products</h1>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} /> // Ensure each product has a unique `id`
        ))}
      </div>
    </div>
  );
};

export default HomePage;
