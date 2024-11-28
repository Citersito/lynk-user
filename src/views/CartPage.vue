<template>
  <div class="cart-container">
    <div class="cart-content">
      <div class="products-section">
        <div v-if="cartItems.length === 0" class="empty-cart">
          Tu carrito está vacío
        </div>
        <div
          v-for="producto in cartItems"
          :key="producto.ProductoID"
          class="cart-item"
        >
          <h3>{{ producto.Nombre }}</h3>
          <p>Precio: ${{ producto.Precio }}</p>
          <div class="quantity-control">
            <button
              @click="decreaseQuantity(producto.ProductoID)"
              :disabled="producto.cantidad <= 1"
            >
              -
            </button>
            <input
              type="number"
              v-model.number="producto.cantidad"
              min="1"
              @change="updateQuantity(producto.ProductoID, producto.cantidad)"
            />
            <button @click="increaseQuantity(producto.ProductoID)">+</button>
          </div>
          <p>
            Total: ${{
              (parseFloat(producto.Precio) * producto.cantidad).toFixed(2)
            }}
          </p>
          <button @click="removeFromCart(producto.ProductoID)">Eliminar</button>
        </div>
      </div>

      <div class="order-summary">
        <h2>Total: ${{ total }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { cartStore } from "@/stores/cartStore";

export default {
  setup() {
    const cartItems = computed(() => cartStore.items);
    const total = computed(() => cartStore.calculateTotal());

    const removeFromCart = (productId) => {
      cartStore.removeFromCart(productId);
    };

    const updateQuantity = (productId, cantidad) => {
      if (cantidad > 0) {
        cartStore.updateQuantity(productId, cantidad);
      }
    };

    const increaseQuantity = (productId) => {
      const product = cartStore.items.find(
        (item) => item.ProductoID === productId
      );
      if (product) {
        cartStore.updateQuantity(productId, product.cantidad + 1);
      }
    };

    const decreaseQuantity = (productId) => {
      const product = cartStore.items.find(
        (item) => item.ProductoID === productId
      );
      if (product && product.cantidad > 1) {
        cartStore.updateQuantity(productId, product.cantidad - 1);
      }
    };

    return {
      cartItems,
      total,
      removeFromCart,
      updateQuantity,
      increaseQuantity,
      decreaseQuantity,
    };
  },
};
</script>
