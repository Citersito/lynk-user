<template>
  <div class="order-summary">
    <h2>Tu Orden</h2>

    <!-- Lista de productos en la orden -->
    <div class="order-items">
      <div class="order-item">
        <p class="item-name">Producto 1</p>
        <p class="item-price">$100.00</p>
      </div>
      <div class="order-item">
        <p class="item-name">Producto 2</p>
        <p class="item-price">$200.00</p>
      </div>
      <div class="order-item">
        <p class="item-name">Producto 3</p>
        <p class="item-price">$150.00</p>
      </div>
    </div>

    <!-- Detalles del resumen de la orden -->
    <div class="order-details">
      <div class="order-detail">
        <span>Subtotal:</span>
        <span>$450.00</span>
      </div>
      <div class="order-detail">
        <span>Descuento:</span>
        <span>$50.00</span>
      </div>
      <div class="order-detail">
        <span>Costo de Envío:</span>
        <span>$20.00</span>
      </div>
      <div class="order-detail total">
        <span>Total:</span>
        <span>$420.00</span>
      </div>
    </div>

    <!-- Botón para continuar al pago -->
    <router-link to="/pay">
      <button class="checkout-button">Continuar a Pagar</button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "OrderSummary",
};
</script>

<style scoped>
/* Aquí puedes agregar estilos específicos del componente más adelante */
</style>
