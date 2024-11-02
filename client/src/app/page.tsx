// src/app/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { fetchProducts } from './services/productService';
import ProductCard from './components/ProductCard';
import styles from './styles/HomePage.module.css';
import { addToCart, removeFromCart, viewCart } from './services/cartService';

type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  color: string;
  rating: number;
};

type CartItem = Product & { quantity: number };

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const productsData = await fetchProducts();
      setProducts(productsData);
    }
    loadProducts();
  }, []);

  useEffect(() => {
    async function loadCart() {
      const cartData = await viewCart();
      setCart(cartData);
    }
    loadCart();
  }, []);

  const handleAddToCart = async (productId: string) => {
    const updatedCart = await addToCart(productId);
    setCart(updatedCart);
  };

  const handleRemoveFromCart = async (productId: string) => {
    const updatedCart = await removeFromCart(productId);
    setCart(updatedCart);
  };

  return (
    <div className={styles.mainContainer}>
      <h1>Our Products</h1>

      {/* Floating Cart Icon */}
      <div className={styles.cartIcon} onClick={() => setIsCartVisible(!isCartVisible)}>
        🛒
        {cart.length > 0 && <span className={styles.cartCount}>{cart.length}</span>}
      </div>

      {/* Product Grid */}
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>

{/* Cart Sidebar */}
{isCartVisible && (
  <div className={styles.cartSidebar}>
    <button onClick={() => setIsCartVisible(false)} className={styles.closeButton}>X</button>
    <h2 className={styles.cartTitle}>Shopping Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <div>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.imageUrl} alt={item.name} className={styles.cartImage} />
            <div className={styles.cartDetails}>
              <h3>{item.name}</h3>
              <p className={styles.cartPrice}>Price: {item.price} SEK</p>
            </div>
            <button onClick={() => handleRemoveFromCart(item.id)} className={styles.cartButton}>
              Remove
            </button>
          </div>
        ))}
        <button onClick={() => setCart([])} className={styles.clearButton}>Clear Cart</button>
      </div>
    )}
  </div>
)}

    </div>
  );
};

export default HomePage;
