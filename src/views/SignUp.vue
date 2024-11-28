<template>
	<div class="auth-container">
		<div class="auth-form">
			<h2>Registro</h2>
			<form @submit.prevent="register">
				<input type="text" v-model="name" placeholder="Nombre" required />
				<input type="email" v-model="email" placeholder="Email" required />
				<input
					type="password"
					v-model="password"
					placeholder="Password"
					required
				/>
				<button type="submit">Registrarse</button>
			</form>
			<router-link to="/login"
				>¿Ya tienes una cuenta? Inicia Sesión</router-link
			>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: "",
			email: "",
			password: "",
		};
	},
	methods: {
		register() {
			// Verificar si ya existe un usuario con el mismo email
			const users = JSON.parse(localStorage.getItem("users")) || [];
			const existingUser = users.find((user) => user.email === this.email);

			if (existingUser) {
				alert("Este correo ya está registrado.");
				return;
			}

			// Crear nuevo usuario
			const newUser = {
				name: this.name,
				email: this.email,
				password: this.password, // En un entorno real, nunca debes guardar la contraseña en texto claro.
			};

			// Guardar el usuario en el localStorage
			users.push(newUser);
			localStorage.setItem("users", JSON.stringify(users));

			alert("Registro exitoso");
			// Redirigir al login
			this.$router.push("/login");
		},
	},
};
</script>
