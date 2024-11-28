<template>
	<section class="product-container">
		<div class="product-content">
			<!-- Product Title -->
			<h1 class="product-title">{{ product.name }}</h1>

			<!-- Description -->
			<p class="product-description">{{ product.description }}</p>

			<!-- Product Price -->
			<p class="product-price">${{ product.price.toFixed(2) }}</p>

			<!-- Action Buttons -->
			<div class="button-container">
				<button class="add-to-cart-button" @click="addToCart">
					Agregar al Carrito
				</button>
			</div>

			<!-- Availability -->
			<p class="stock-status">
				Disponible ({{ product.availableStock }} unidades)
			</p>

			<!-- Product Details -->
			<div class="details-container">
				<h3 class="details-title">Descripción</h3>
				<ul class="details-list">
					<li>
						Tamaño: Usamos talla asiática (1-2 tallas más pequeñas que las de
						EE. UU.).
					</li>
					<li>Material: Tela agradable al tacto, transpirable y suave.</li>
					<li>
						Ocasión: Negocios, oficina, viajes, correr, descanso, escuela,
						citas.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "ProductDetails",
	data() {
		return {
			product: {
				name: "Sudadera con capucha",
				description:
					"Kingkingma - Sudadera con capucha para hombre con cierre completo, suéter de punto sólido con cuello alto y manga larga",
				rating: 4.5,
				reviewsCount: 231,
				price: 665.0,
				availableStock: 85,
			},
		};
	},
	methods: {
		// Método para obtener emojis de calificación
		getEmojis(rating) {
			const fullEmojis = Math.floor(rating);
			return "⭐".repeat(fullEmojis);
		},
		buyNow() {
			console.log("Comprando ahora...");
		},
		addToCart() {
			console.log("Agregando al carrito...");
		},
	},
};
</script>
