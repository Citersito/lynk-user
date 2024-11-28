<template>
  <div class="order-summary">
    <h2>Tu Orden</h2>

    <div class="order-items">
      <div v-for="item in items" :key="item.ProductoID" class="order-item">
        <p class="item-name">{{ item.Nombre }}</p>
        <p class="item-price">
          ${{ (parseFloat(item.Precio) * item.cantidad).toFixed(2) }}
        </p>
      </div>
    </div>

    <div class="order-details">
      <div class="order-detail">
        <span>Subtotal:</span>
        <span>${{ total.toFixed(2) }}</span>
      </div>
      <div class="order-detail">
        <span>Envío:</span>
        <span>$20.00</span>
      </div>
      <div class="order-detail total">
        <span>Total:</span>
        <span>${{ (total + 20).toFixed(2) }}</span>
      </div>
    </div>

    <button class="checkout-button">Continuar al Pago</button>
  </div>
</template>

<script>
export default {
  name: "OrderSummary",
  props: {
    total: {
      type: Number,
      default: 0,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
