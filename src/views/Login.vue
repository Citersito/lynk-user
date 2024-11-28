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
export default {
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		login() {
			// Verificar si el usuario existe en localStorage
			const users = JSON.parse(localStorage.getItem("users")) || [];
			const user = users.find(
				(user) => user.email === this.email && user.password === this.password
			);

			if (user) {
				alert("Inicio de sesión exitoso");
				// Redirigir al panel principal o a la página deseada
				this.$router.push("/"); // O la ruta que desees
			} else {
				alert("Credenciales incorrectas.");
			}
		},
	},
};
</script>
