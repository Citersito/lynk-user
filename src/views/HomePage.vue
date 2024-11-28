<template>
  <div id="homepage">
    <div
      v-if="productos.length > 0"
      class="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <ProductCard
        v-for="producto in productos"
        :key="producto.ProductoID"
        :producto="producto"
        :imagenPrincipal="imagenesProductos[producto.ProductoID]"
      />
    </div>
    <div v-else>
      <p>
        No se pudieron cargar los productos en este momento. Intente más tarde.
      </p>
    </div>
  </div>
</template>

<script>
import apiClient from "@/services/api.js";
import ProductCard from "@/components/Home/Products.vue";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      productos: [],
      imagenesProductos: {},
    };
  },
  methods: {
    async obtenerProductos() {
      try {
        const response = await apiClient.get("/api/productos");
        this.productos = response.data;

        // Obtener imágenes para cada producto
        await Promise.all(
          this.productos.map(async (producto) => {
            try {
              const imagenResponse = await apiClient.get(
                `/api/productos/imagenes/principal/${producto.ProductoID}`
              );
              if (imagenResponse.data && imagenResponse.data.length > 0) {
                this.imagenesProductos[producto.ProductoID] =
                  imagenResponse.data[0].ImagenURL;
              } else {
                this.imagenesProductos[producto.ProductoID] = null;
              }
            } catch (error) {
              console.error(
                `Error al obtener imagen para producto ${producto.ProductoID}:`,
                error
              );
              this.imagenesProductos[producto.ProductoID] = null;
            }
          })
        );
      } catch (error) {
        console.error(
          "Error al obtener los productos:",
          error instanceof Error ? error.message : error
        );
      }
    },
  },
  async mounted() {
    await this.obtenerProductos();
  },
};
</script>
