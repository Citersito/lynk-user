<template>
	<div class="auth-container">
		<div class="auth-form">
			<h2>Login</h2>
			<form @submit.prevent="login">
				<input type="email" v-model="email" placeholder="Email" required />
				<input
					type="password"
					v-model="password"
					placeholder="Password"
					required
				/>
				<button type="submit">Iniciar Sesión</button>
			</form>
			<router-link to="/registro"
				>¿No tienes una cuenta? Regístrate</router-link
			>
		</div>
	</div>
</template>

<script>
import apiClient from "@/services/api.js"; // Asegúrate de que tienes configurado tu apiClient

export default {
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		async login() {
			try {
				const payload = {
					email: this.email,
					password: this.password,
				};

				// Realizar la solicitud POST al endpoint de login
				const response = await apiClient.post("/auth/login/", payload);

				// Si el login es exitoso, puedes manejar la respuesta
				alert("Inicio de sesión exitoso");
				// Aquí podrías redirigir al usuario a otra ruta, por ejemplo:
				this.$router.push("/home");
			} catch (error) {
				console.error("Error en el login:", error);
				alert("Error al iniciar sesión. Por favor, verifica tus credenciales.");
			}
		},
	},
};
</script>
