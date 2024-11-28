<template>
  <div class="auth-container">
    <div class="auth-form">
      <h2>Registro</h2>
      <form @submit.prevent="register">
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
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        await auth.createUserWithEmailAndPassword(this.email, this.password);
        alert("Registro exitoso");
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>
