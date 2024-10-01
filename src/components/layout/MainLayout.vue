<template>
  <div class="layout flex h-screen">
    <!-- Sidebar -->
    <SideBar />

    <!-- Main content area -->
    <div class="main-content flex-1 ml-64 p-4">
      <!-- Margen izquierdo para el sidebar -->
      <TopMenu />
      <!-- Aquí se renderiza el contenido dinámico según la ruta -->
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideBar from "../navigation/SideBar.vue";
import TopMenu from "../navigation/TopMenu.vue";
</script>

<style scoped>
.layout {
  /* Sin necesidad de definir 'display: flex;' y 'height: 100vh' aquí, ya que se maneja con Tailwind CSS */
}

.main-content {
  /* Sin necesidad de definir 'display: flex;' y 'flex-direction: column;' aquí, ya que se maneja con Tailwind CSS */
}
</style>
