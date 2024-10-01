<template>
    <router-view />  <!-- Las rutas manejarán qué layout y vistas cargar -->
  </template>
  
  <script lang="ts">
  export default {
    name: 'App',
  };
  </script>
  
  <style>
  /* Estilos globales */
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
  }
  </style>
  