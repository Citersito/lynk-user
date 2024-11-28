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
    async login() {
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password);
        alert("Inicio de sesión exitoso");
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>
