// src/index.ts
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const productsFilePath = path.join(__dirname, 'products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// In-memory cart, limiting each product to one
let cart: { id: string; name: string; price: number; imageUrl: string; color: string; quantity: number }[] = [];

// Route to get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Route to view cart
app.get('/api/cart', (req, res) => {
  res.json(cart);
});

// Route to add item to cart
app.post('/api/cart/add/:productId', (req, res) => {
  const productId = req.params.productId;
  const existingItem = cart.find((item) => item.id === productId);

  if (!existingItem) {
    const product = products.find((p: { id: string }) => p.id === productId);
    if (product) {
      cart.push({ ...product, quantity: 1 }); // Add item with quantity set to 1
    }
  }

  res.json(cart);
});

// Route to remove item from cart
app.delete('/api/cart/remove/:productId', (req, res) => {
  const productId = req.params.productId;
  cart = cart.filter((item) => item.id !== productId);
  res.json(cart);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
