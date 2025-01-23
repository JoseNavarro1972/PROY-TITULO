<template>
  <div v-if="isAuthenticated">
    <div class="header">
      <h2>DEPARTAMENTO ANTIDROGAS O.S.7</h2>
      <h2>JEFATURA INTELIGENCIA ANTIDROGAS</h2>
    </div>

    <div class="container">
      <button @click="redirectTo('ingreso.php')">INGRESO REGISTRO</button>
      <br />
      <button @click="redirectTo('modificar.php')">MODIFICAR REGISTRO</button>
      <br />
      <button @click="redirectTo('consultar.php')">CONSULTAR REGISTRO</button>
    </div>
  </div>
  <div v-else>
    <p>Acceso denegado. No estás autenticado.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: false,  // Inicialmente no está autenticado
    };
  },
  methods: {
    redirectTo(page) {
      window.location.href = page; // Redirige a las páginas deseadas
    },
    // Aquí puedes tener alguna lógica para autenticar al usuario
    login() {
      // Simula un inicio de sesión exitoso
      this.isAuthenticated = true;
    },
  },
  created() {
    // Llamamos a 'login' para simular que el usuario está autenticado.
    // Esto debe ser reemplazado por tu lógica de autenticación real.
    this.login();
  },
};
</script>

<style scoped>
/* Aquí irían los estilos del componente */
</style>
