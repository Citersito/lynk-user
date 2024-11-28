<template>
  <div v-if="loading" class="loading">Cargando...</div>
  <div v-else-if="producto" class="containerApp">
    <!-- Sección de imágenes -->
    <div class="left-pane">
      <PicturesProduct :images="productImages" />
    </div>

    <!-- Sección de texto o contenido adicional -->
    <div class="right-pane">
      <div class="product-details">
        <h1>{{ producto.Nombre }}</h1>
        <p>{{ producto.Descripcion }}</p>
        <p class="price">${{ producto.Precio }}</p>

        <button class="add-to-cart-btn" @click="addToCart">
          Agregar al Carrito
        </button>
      </div>
    </div>
  </div>
  <div v-else class="error">No se pudo cargar el producto</div>
</template>

<script>
import apiClient from "@/services/api.js";
import { cart } from "@/services/cart.js";
import InformationProduct from "@/components/product/InformationProduct.vue";
import PicturesProduct from "@/components/product/PicturesProduct.vue";

export default {
  components: {
    PicturesProduct,
    InformationProduct,
  },
  data() {
    return {
      producto: null,
      imagenPrincipal: null,
      loading: true,
      productImages: ["https://via.placeholder.com/500x500"],
    };
  },
  methods: {
    async fetchProductDetails() {
      try {
        const productId = this.$route.params.id;

        const [productoResponse, imagenResponse] = await Promise.all([
          apiClient.get(`/api/productos/${productId}`),
          apiClient.get(`/api/productos/imagenes/principal/${productId}`),
        ]);

        this.producto = productoResponse.data;

        if (imagenResponse.data && imagenResponse.data.length > 0) {
          this.imagenPrincipal = imagenResponse.data[0].ImagenURL;
          this.productImages = [
            this.imagenPrincipal,
            ...this.productImages.slice(1),
          ];
        }
      } catch (error) {
        console.error("Error al cargar detalles del producto:", error);
      } finally {
        this.loading = false;
      }
    },
    addToCart() {
      // Agregar el producto al carrito
      cart.addToCart(this.producto);

      // Navegar al carrito
      this.$router.push("/cart");
    },
  },
  created() {
    this.fetchProductDetails();
  },
};
</script>

<style scoped>
.containerApp {
  display: flex;
  justify-content: center;
  gap: 4rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100vw;
  padding: 20px;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.add-to-cart-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart-btn:hover {
  background-color: #45a049;
}
</style>
