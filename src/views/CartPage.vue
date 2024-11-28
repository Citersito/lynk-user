<template>
  <div class="cart-container">
    <div class="cart-content">
      <div class="products-section">
        <product-card />
        <!-- Repite el componente de ProductCard si hay varios productos -->
        <product-card />
        <product-card />
      </div>
      <div class="order-summary-section">
        <OrderSummary />
      </div>
    </div>
  </div>
</template>

<script>
import OrderSummary from "@/components/Cart/OrderSummary.vue";
import ProductCard from "@/components/Cart/ProductCard.vue";

export default {
  components: {
    ProductCard,
    OrderSummary,
  },
};
</script>

<style scoped>
.cart-container {
  padding: 20px;
}

.cart-content {
  display: flex;
  justify-content: space-between; /* Alinea los elementos a los extremos */
  gap: 20px; /* Espacio entre las secciones */
}

.products-section {
  flex: 3; /* Asigna más espacio a los productos si hay varios */
}

.order-summary-section {
  flex: 1; /* El resumen ocupa menos espacio */
}
</style>
