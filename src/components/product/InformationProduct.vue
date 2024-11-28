<template>
  <section class="product-container">
    <div class="product-content">
      <h1 class="product-title">{{ producto.Nombre }}</h1>
      <p class="product-description">{{ producto.Descripcion }}</p>
      <p class="product-price">${{ producto.Precio }}</p>

      <div class="button-container">
        <button class="add-to-cart-button" @click="addToCart">
          Agregar al Carrito
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { cartStore } from "@/stores/cartStore";
import { useRouter } from "vue-router";

export default {
  name: "ProductDetails",
  props: {
    producto: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const router = useRouter();

    const addToCart = () => {
      try {
        cartStore.addToCart(this.producto);
        router.push({ name: "cart" });
      } catch (error) {
        console.error("Error al agregar al carrito:", error);
      }
    };

    return {
      addToCart,
    };
  },
};
</script>
