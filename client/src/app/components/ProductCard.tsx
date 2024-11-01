// src/components/ProductCard.tsx
"use client";

import React from 'react';
import { addToCart } from '../services/cartService';
import styles from '../styles/ProductCard.module.css';

type Product = {
  id: string;
  name: string;
  rating: number;
  price: number;
  imageUrl: string;
  color: string;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = async () => {
    await addToCart(product.id);
    alert(`${product.name} added to cart`);
  };

  // Format the price using Intl.NumberFormat
  const formattedPrice = new Intl.NumberFormat('sv-SE').format(product.price);

  return (
    <div className={styles.card}>
      <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
      <div className={styles.priceTag}>
        <span>{formattedPrice} SEK</span>
      </div>
      <h3 className={styles.title} style={{ color: product.color }}>
        {product.name}
      </h3>
      
      {/* Dynamic Star Rating */}
      <div className={styles.stars}>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={index < Math.round(product.rating) ? styles.starFilled : styles.starEmpty}
          />
        ))}
      </div>
      
      <button onClick={handleAddToCart} className={styles.button} style={{ backgroundColor: product.color }}>
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;