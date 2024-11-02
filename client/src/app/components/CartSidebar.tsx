// src/app/components/CartSidebar.tsx
"use client";

import React from 'react';
import { useCart } from '../contexts/CartContext';
import styles from '../styles/CartSidebar.module.css';

interface CartSidebarProps {
  closeSidebar: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ closeSidebar }) => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className={styles.sidebar}>
      <button onClick={closeSidebar} className={styles.closeButton}>X</button>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.imageUrl} alt={item.name} className={styles.cartImage} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: {item.price} SEK</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <button onClick={clearCart} className={styles.clearButton}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
