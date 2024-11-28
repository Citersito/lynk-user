<template>
	<div class="containerApp">
		<!-- Sección de imágenes -->
		<div class="left-pane">
			<PicturesProduct :images="productImages" />
		</div>

		<!-- Sección de texto o contenido adicional -->
		<div class="right-pane">
			<InformationProduct />
		</div>
	</div>
</template>

<script>
import InformationProduct from "@/components/product/InformationProduct.vue";
import PicturesProduct from "@/components/product/PicturesProduct.vue";

export default {
	components: {
		PicturesProduct,
		InformationProduct,
	},
	data() {
		return {
			productImages: [
				"https://via.placeholder.com/500x500", // Imagen principal
				"https://via.placeholder.com/100x100", // Miniaturas
				"https://via.placeholder.com/101x101",
				"https://via.placeholder.com/102x102",
				"https://via.placeholder.com/103x103",
			],
		};
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
}
</style>
