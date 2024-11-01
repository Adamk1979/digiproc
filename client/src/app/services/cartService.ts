export async function addToCart(productId: string) {
  const response = await fetch(`http://localhost:4000/api/cart/add/${productId}`, {
    method: 'POST',
  });
  const data = await response.json();
  return data;
}

export async function removeFromCart(productId: string) {
  const response = await fetch(`http://localhost:4000/api/cart/remove/${productId}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}

export async function viewCart() {
  const response = await fetch('http://localhost:4000/api/cart');
  const cart = await response.json();
  return cart;
}
