export const CartService = {
  addToCart(product) {
    const cart = this.getCart();
    const existingProductIndex = cart.findIndex(
      (item) => item.ProductoID === product.ProductoID
    );

    if (existingProductIndex > -1) {
      cart[existingProductIndex].cantidad += 1;
    } else {
      cart.push({
        ...product,
        cantidad: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  },

  getCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  },

  removeFromCart(productId) {
    const cart = this.getCart();
    const updatedCart = cart.filter((item) => item.ProductoID !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  },

  updateQuantity(productId, cantidad) {
    const cart = this.getCart();
    const productIndex = cart.findIndex(
      (item) => item.ProductoID === productId
    );

    if (productIndex > -1) {
      cart[productIndex].cantidad = cantidad;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  },

  calculateTotal() {
    const cart = this.getCart();
    return cart.reduce((total, item) => {
      return total + parseFloat(item.Precio) * item.cantidad;
    }, 0);
  },
};
