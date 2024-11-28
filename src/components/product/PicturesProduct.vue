<template>
	<div class="product-images">
		<!-- Imagen principal grande -->
		<div class="main-image-container">
			<div class="main-image-wrapper">
				<img :src="selectedImage" alt="Imagen principal" class="main-image" />
			</div>
		</div>

		<!-- Imágenes pequeñas debajo -->
		<div class="thumbnail-images">
			<div
				v-for="(image, index) in images"
				:key="index"
				class="thumbnail-wrapper"
				:class="{ active: image === selectedImage }"
				@click="selectImage(image)"
			>
				<div class="thumbnail-background">
					<img
						:src="image"
						:alt="'Miniatura ' + (index + 1)"
						class="thumbnail-image"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProductImages",
	props: {
		images: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			selectedImage: this.images[0],
		};
	},
	methods: {
		selectImage(image) {
			this.selectedImage = image;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.product-images {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 2rem 0 0 2rem;

	// Contenedor de imagen principal
	.main-image-container {
		width: 100%;
		margin-bottom: 1rem;
	}

	// Wrapper de imagen principal
	.main-image-wrapper {
		width: 100%;
		max-width: 600px; // Mucho más grande que las miniaturas
		height: 500px; // Añade altura fija
		margin: 0 auto;
		background-color: $secondary-color; // Fondo de color secundario
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	// Imagen principal
	.main-image {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain; // Cambia a contain para mostrar imagen completa
		border-radius: 8px;
	}

	// Contenedor de miniaturas
	.thumbnail-images {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
		justify-content: center;
		width: 100%;
	}

	// Wrapper de miniatura
	.thumbnail-wrapper {
		width: 100px;
		height: 100px;
		cursor: pointer;
		transition: transform 0.3s ease;

		&:hover {
			transform: scale(1.05);
		}

		&.active {
			transform: scale(1.1);
		}
	}

	// Fondo de miniatura
	.thumbnail-background {
		width: 100%;
		height: 100%;
		background-color: $secondary-color;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
		padding: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	// Imagen de miniatura
	.thumbnail-image {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		border-radius: 4px;
	}
}
</style>
