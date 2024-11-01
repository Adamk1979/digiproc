// src/app/components/Header.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../contexts/CartContext';
import CartSidebar from './CartSidebar';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.title}>
        DigiProc
      </Link>
      <button
        className={styles.cartButton}
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        🛒 Cart ({itemCount})
      </button>

      {isCartOpen && <CartSidebar closeSidebar={() => setIsCartOpen(false)} />}
    </header>
  );
};

export default Header;
