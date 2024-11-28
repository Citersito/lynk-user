import { reactive } from "vue";

export const cartStore = reactive({
  items: [],

  addToCart(producto) {
    // Check if product already exists in cart
    const existingProduct = this.items.find(
      (item) => item.ProductoID === producto.ProductoID
    );

    if (existingProduct) {
      // If product exists, increase quantity
      existingProduct.cantidad += 1;
    } else {
      // If new product, add to cart with cantidad 1
      this.items.push({
        ...producto,
        cantidad: 1,
      });
    }
  },

  removeFromCart(productId) {
    const index = this.items.findIndex((item) => item.ProductoID === productId);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  },

  updateQuantity(productId, cantidad) {
    const product = this.items.find((item) => item.ProductoID === productId);
    if (product) {
      product.cantidad = cantidad;
    }
  },

  calculateTotal() {
    return this.items.reduce((total, item) => {
      return total + parseFloat(item.Precio) * item.cantidad;
    }, 0);
  },

  clearCart() {
    this.items = [];
  },
});
