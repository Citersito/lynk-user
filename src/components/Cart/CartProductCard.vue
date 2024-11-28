<template>
  <div class="cart-product-card">
    <div class="product-info">
      <h3>{{ producto.Nombre }}</h3>
      <p>Precio: ${{ producto.Precio }}</p>
    </div>

    <div class="quantity-control">
      <button @click="decreaseQuantity" :disabled="cantidad <= 1">-</button>
      <input
        type="number"
        :value="cantidad"
        @input="updateQuantity($event.target.value)"
        min="1"
      />
      <button @click="increaseQuantity">+</button>
    </div>

    <div class="total-price">
      Total: ${{ (parseFloat(producto.Precio) * cantidad).toFixed(2) }}
    </div>

    <button class="remove-button" @click="removeFromCart">Eliminar</button>
  </div>
</template>

<script>
export default {
  props: {
    producto: {
      type: Object,
      required: true,
    },
    cantidad: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    increaseQuantity() {
      this.$emit(
        "update-quantity",
        this.producto.ProductoID,
        this.cantidad + 1
      );
    },
    decreaseQuantity() {
      if (this.cantidad > 1) {
        this.$emit(
          "update-quantity",
          this.producto.ProductoID,
          this.cantidad - 1
        );
      }
    },
    updateQuantity(newCantidad) {
      const cantidad = parseInt(newCantidad);
      if (cantidad > 0) {
        this.$emit("update-quantity", this.producto.ProductoID, cantidad);
      }
    },
    removeFromCart() {
      this.$emit("remove", this.producto.ProductoID);
    },
  },
};
</script>
