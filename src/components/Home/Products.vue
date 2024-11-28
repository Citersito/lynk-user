<template>
  <div
    class="product-card-cart cursor-pointer"
    @click="navigateToProductDetail"
  >
    <div class="product-image-cart">
      <img
        v-if="imagenPrincipal"
        :src="imagenPrincipal"
        :alt="producto.Nombre"
        class="product-image"
        @error="handleImageError"
      />
      <div v-else class="image-placeholder">Imagen no disponible</div>
    </div>
    <div class="product-info">
      <div class="product-header">
        <div class="product-details">
          <h3>{{ producto.Nombre }}</h3>
          <h4>{{ producto.Descripcion }}</h4>
        </div>
        <h2 class="product-price">${{ producto.Precio }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    producto: {
      type: Object,
      required: true,
    },
    imagenPrincipal: {
      type: String,
      default: null,
    },
  },
  methods: {
    handleImageError(event) {
      event.target.src = "https://via.placeholder.com/150"; // Imagen de respaldo
    },
    navigateToProductDetail() {
      // Navega a la página de detalle del producto usando el ID
      this.$router.push({
        name: "product-detail",
        params: { id: this.producto.ProductoID },
      });
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cursor-pointer {
  cursor: pointer;
  transition: transform 0.2s;
}
.cursor-pointer:hover {
  transform: scale(1.02);
}
</style>
