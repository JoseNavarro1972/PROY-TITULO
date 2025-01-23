<template>
  <div>
    <header class="header">
      <router-link to="/menu" class="volver-btn">Volver</router-link>
      <h1>Consulta Registro Forense</h1>
    </header>
    <div class="container">
      <main>
        <!-- Formulario -->
        <div class="form-group">
          <label>Fecha Ingreso</label>
          <div>
            <button @click="buscarFecha('desde')">Desde</button>
            <input type="date" v-model="fechaIngresoDesde" />
          </div>
          <div>
            <button @click="buscarFecha('hasta')">Hasta</button>
            <input type="date" v-model="fechaIngresoHasta" />
          </div>
        </div>
        <div class="form-group">
          <label for="busqueda-por-año">Búsqueda por Año</label>
          <input type="date" v-model="busquedaPorAño" />
          <button @click="buscarPorAño">Buscar</button>
        </div>
        <div class="form-group">
          <label for="busqueda-por-estado-de-pericia">Búsqueda por Estado de Pericia</label>
          <input
            type="text"
            id="busqueda_por_estado_de_pericia"
            v-model="busquedaPorEstadoDePericia"
            placeholder="Ingrese el estado"
          />
          <button @click="buscarPorEstado">Buscar</button>
        </div>
        <div class="form-group">
          <label for="busqueda-por-nue">Búsqueda por NUE</label>
          <input
            type="text"
            id="busqueda_por_nue"
            v-model="busquedaPorNue"
            placeholder="Ingrese el NUE"
          />
          <button @click="buscarPorNue">Buscar</button>
        </div>
        <div class="form-group">
          <label for="busqueda-por-ruc">Búsqueda por RUC</label>
          <input
            type="text"
            id="busqueda_por_ruc"
            v-model="busquedaPorRuc"
            placeholder="Ingrese el RUC"
          />
          <button @click="buscarPorRuc">Buscar</button>
        </div>
        <div class="form-group">
          <label for="busqueda-por-marca">Búsqueda por Marca</label>
          <input
            type="text"
            id="busqueda_por_marca"
            v-model="busquedaPorMarca"
            placeholder="Ingrese la marca"
          />
          <button @click="buscarPorMarca">Buscar</button>
        </div>
        <div class="form-group">
          <label for="busqueda-por-seccion">Búsqueda por Sección</label>
          <input
            type="text"
            id="busqueda_por_seccion"
            v-model="busquedaPorSeccion"
            placeholder="Ingrese la sección"
          />
          <button @click="buscarPorSeccion">Buscar</button>
        </div>
        <!-- Campos adicionales -->
        <div v-for="(campo, index) in camposAdicionales" :key="index" class="form-group">
          <label :for="campo.id">{{ campo.label }}</label>
          <input
            type="text"
            :id="campo.id"
            v-model="campo.valor"
            :placeholder="campo.placeholder"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "ingreso_registro",
  data() {
    return {
      fechaIngresoDesde: "",
      fechaIngresoHasta: "",
      busquedaPorAño: "",
      busquedaPorEstadoDePericia: "",
      busquedaPorNue: "",
      busquedaPorRuc: "",
      busquedaPorMarca: "",
      busquedaPorSeccion: "",
      camposAdicionales: [
        { id: "tipo-extraccion", label: "TIPO EXTRACCIÓN", placeholder: "Haga clic para agregar texto", valor: "" },
        { id: "estado-de-la-pericia", label: "ESTADO DE LA PERICIA", placeholder: "Haga clic para agregar texto", valor: "" },
        { id: "región", label: "REGIÓN", placeholder: "Haga clic para agregar texto", valor: "" },
        { id: "cantidad-celulares", label: "CANTIDAD CELULARES", placeholder: "Haga clic para agregar texto", valor: "" },
        { id: "delito", label: "DELITO", placeholder: "Haga clic para agregar texto", valor: "" },
        { id: "observacion", label: "OBSERVACIÓN", placeholder: "Haga clic para agregar texto", valor: "" },
      ],
    };
  },
  methods: {
    buscarFecha(tipo) {
      console.log(`Buscar fecha: ${tipo}`);
    },
    buscarPorAño() {
      console.log(`Buscar por año: ${this.busquedaPorAño}`);
    },
    buscarPorEstado() {
      console.log(`Buscar por estado: ${this.busquedaPorEstadoDePericia}`);
    },
    buscarPorNue() {
      console.log(`Buscar por NUE: ${this.busquedaPorNue}`);
    },
    buscarPorRuc() {
      console.log(`Buscar por RUC: ${this.busquedaPorRuc}`);
    },
    buscarPorMarca() {
      console.log(`Buscar por marca: ${this.busquedaPorMarca}`);
    },
    buscarPorSeccion() {
      console.log(`Buscar por sección: ${this.busquedaPorSeccion}`);
    },
  },
};
</script>

<style scoped>
/* Variables de colores y fuentes */
:root {
    --color-fondo-encabezado: #4CAF50; /* Fondo verde oscuro */
    --color-texto-encabezado: white; /* Texto blanco */
    --color-fondo-pagina: #A8D08D; /* Fondo verde claro */
    --color-boton: white; /* Fondo blanco para botones */
    --color-borde-boton: black; /* Borde negro */
    --color-hover-boton: #e7e7e7; /* Fondo gris claro al pasar */
    --color-texto: #333; /* Texto general */
    --fuente-principal: Arial, sans-serif; /* Fuente principal */
}

/* Estilo para el cuerpo de la página */
body {
    margin: 0;
    font-family: var(--fuente-principal);
    background-color: var(--color-fondo-pagina);
    color: var(--color-texto);
}

/* Estilo para el encabezado */
.header {
    background-color: var(--color-fondo-encabezado);
    color: var(--color-texto-encabezado);
    text-align: center;
    padding: 20px 0; /* Espaciado interno */
}

/* Estilo para el botón de volver */
.volver-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 6px 12px;
    background-color: var(--color-boton);
    border: 1px solid var(--color-borde-boton);
    color: var(--color-texto);
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
}

.volver-btn:hover {
    background-color: var(--color-hover-boton);
}

/* Estilo para el contenedor principal */
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px); /* Altura total menos el encabezado */
    background-color: var(--color-fondo-pagina);
}

/* Estilo para los formularios */
.form-group {
    margin: 10px 0; /* Espaciado entre grupos */
    width: 90%; /* Ancho de cada grupo */
    display: flex;
    justify-content: flex-start; /* Alineación de elementos al inicio */
    align-items: center; /* Alineación vertical de los elementos */
    gap: 10px; /* Espaciado entre elementos */
}

/* Estilo para las etiquetas */
label {
    color: var(--color-texto);
    font-size: 16px;
    margin-right: 10px; /* Espaciado a la derecha de la etiqueta */
    white-space: nowrap; /* Evita que el texto de la etiqueta haga salto de línea */
}

/* Estilo para los campos de entrada */
input {
    flex: 2; /* Ocupa más espacio */
    padding: 5px 10px; /* Espaciado interno */
    font-size: 14px;
    border: 1px solid var(--color-borde-boton);
    border-radius: 4px;
}

/* Estilo para los botones */
button {
    padding: 5px 10px;
    margin-left: 10px;
    font-size: 14px;
    background-color: var(--color-boton);
    border: 1px solid var(--color-borde-boton);
    cursor: pointer;
    flex: 1;
}

button:hover {
    background-color: var(--color-hover-boton);
}

/* Estilo específico para la sección de Fecha Ingreso */
.form-group div {
    display: flex;
    align-items: center;
    gap: 10px; /* Espaciado entre botón y campo de fecha */
}

/* Estilo para los botones de búsqueda */
button {
    padding: 5px 10px;
    font-size: 14px;
    background-color: var(--color-boton);
    border: 1px solid var(--color-borde-boton);
    cursor: pointer;
    flex: 1;
}

button:hover {
    background-color: var(--color-hover-boton);
}

</style>
