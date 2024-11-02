// src/app/services/cartService.ts

export async function addToCart(productId: string) {
  const response = await fetch(`http://localhost:4000/api/cart/add/${productId}`, {
    method: 'POST',
  });
  return await response.json(); // Returns the updated cart
}

export async function removeFromCart(productId: string) {
  const response = await fetch(`http://localhost:4000/api/cart/remove/${productId}`, {
    method: 'DELETE',
  });
  return await response.json(); // Returns the updated cart
}

export async function viewCart() {
  const response = await fetch('http://localhost:4000/api/cart');
  return await response.json();
}
