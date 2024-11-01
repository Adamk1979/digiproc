// server/index.ts
import express from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

let products = [
  {
    id: '1',
    name: 'Product 1',
    rating: 4.5,
    price: 90000,
    imageUrl: 'https://i.imgur.com/Nx5kfLG.png',
    color: '#4CAF50',
  },
  {
    id: '2',
    name: 'Product 2',
    rating: 4.0,
    price: 90000,
    imageUrl: 'https://i.imgur.com/UNRl34M.png',
    color: '#2196F3',
  },
  {
    id: '3',
    name: 'Product 3',
    rating: 5.0,
    price: 90000,
    imageUrl: 'https://i.imgur.com/rlum59Z.png',
    color: '#FF9800',
  },
];

let cart: any[] = [];

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
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push({ ...product, quantity: 1 });
    }
  }

  res.json(cart);
});

// Route to remove item from cart
app.delete('/api/cart/remove/:productId', (req, res) => {
  const productId = req.params.productId;
  cart = cart.filter(item => item.id !== productId);
  res.json(cart);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
