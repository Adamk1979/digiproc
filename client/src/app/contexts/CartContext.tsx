// src/app/contexts/CartContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { addToCart as addToCartService, viewCart, removeFromCart as removeFromCartService } from '../services/cartService';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  color: string;
};

interface CartContextProps {
  cart: CartItem[];
  addToCart: (productId: string) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from backend on mount
  useEffect(() => {
    async function loadCart() {
      const fetchedCart = await viewCart();
      setCart(fetchedCart || []);
    }
    loadCart();
  }, []);

  const addToCart = async (productId: string) => {
    const updatedCart = await addToCartService(productId);
    setCart(updatedCart); // Update state with the latest cart
  };

  const removeFromCart = async (productId: string) => {
    const updatedCart = await removeFromCartService(productId);
    setCart(updatedCart); // Update state with the latest cart
  };

  const clearCart = async () => {
    // Assuming clearCart API returns an empty array
    const response = await fetch('http://localhost:4000/api/cart/clear', { method: 'POST' });
    const clearedCart = await response.json();
    setCart(clearedCart); // Reset cart to an empty array
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
