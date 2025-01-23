<template>
  <div>
    <h2>Registrar Nueva Evidencia</h2>
    <form @submit.prevent="registrarEvidencia">
      <div>
        <label for="marca">Marca</label>
        <input>
        v-model="marca"
        type="text"
        id="marca"
        required
        />
      </div>
      <div>
        <label for="modelo">Modelo</label>
        <input>
        v-model="modelo"
        type="text"
        id="modelo"
        required
        />
      </div>
      <div>
        <label for="telefono">Número de Teléfono</label>
        <input>
        v-model="telefono"
        type="text"
        id="telefono"
        required
        />
      </div>
      <button type="submit">
        Registrar
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      marca: '',
      modelo: '',
      telefono: ''
    };
  },
  methods: {
    async registrarEvidencia() {
      try {
        await axios.post('http://localhost:3000/api/evidencia', {
          marca: this.marca,
          modelo: this.modelo,
          telefono: this.telefono
        });
        alert('Evidencia registrada con éxito');
      } catch (error) {
        console.error('Hubo un error al registrar la evidencia:', error);
        alert('Error al registrar la evidencia');
      }
    }
  }
};
</script>

<style scoped>
/* Estilos para el formulario */
</style>
