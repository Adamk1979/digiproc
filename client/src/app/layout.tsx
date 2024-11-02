// src/app/layout.tsx
import React from 'react';
import { CartProvider } from './contexts/CartContext';
import "./globals.css";

export const metadata = {
  title: 'DigiProc Products',
  description: 'Showcasing DigiProc’s products',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
};

export default RootLayout;
