<template>
  <div class="container mx-auto w-4/5 mt-8">
    <!-- Primer Div: Tareas Completadas Ayer -->
    <div class="mb-8 p-6 bg-white rounded shadow-md">
      <h2 class="text-xl font-bold mb-4">Tareas Completadas Ayer</h2>
      <ul class="space-y-2">
        <li class="flex items-center">
          <i class="fas fa-check-circle text-green-500 mr-2"></i>
          <span>Mantenimiento y limpieza del pasillo principal (100%)</span>
        </li>
        <li class="flex items-center">
          <i class="fas fa-check-circle text-green-500 mr-2"></i>
          <span>Mantenimiento del patio central (100%)</span>
        </li>
        <li class="flex items-center">
          <i class="fas fa-check-circle text-green-500 mr-2"></i>
          <span>Limpieza de alfombras (100%)</span>
        </li>
        <li class="flex items-center">
          <i class="fas fa-check-circle text-green-500 mr-2"></i>
          <span>Limpieza de los baños (100%)</span>
        </li>
        <li class="flex items-center">
          <i class="fas fa-check-circle text-green-500 mr-2"></i>
          <span>Limpieza del laboratorio de química (100%)</span>
        </li>
      </ul>
    </div>

    <!-- Segundo Div: Asistentes Actuales -->
    <div class="p-6 bg-white rounded shadow-md pb-16">
      <!-- Padding inferior añadido -->
      <h2 class="text-xl font-bold mb-4">Asistentes Actuales</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex items-center p-4 bg-gray-100 rounded">
          <i class="fas fa-user-circle text-blue-600 text-3xl mr-3"></i>
          <div>
            <p class="font-semibold">María Alarcón</p>
            <p class="text-gray-600">Supervisora</p>
            <p class="text-gray-500">Llegada: 08:00</p>
          </div>
        </div>
        <div class="flex items-center p-4 bg-gray-100 rounded">
          <i class="fas fa-user-circle text-blue-600 text-3xl mr-3"></i>
          <div>
            <p class="font-semibold">Hernesto Ramírez</p>
            <p class="text-gray-600">Limpiador</p>
            <p class="text-gray-500">Llegada: 07:58</p>
          </div>
        </div>
        <div class="flex items-center p-4 bg-gray-100 rounded">
          <i class="fas fa-user-circle text-blue-600 text-3xl mr-3"></i>
          <div>
            <p class="font-semibold">Verónica Hormazábal</p>
            <p class="text-gray-600">Limpiadora</p>
            <p class="text-gray-500">Llegada: 07:56</p>
          </div>
        </div>
        <div class="flex items-center p-4 bg-gray-100 rounded">
          <i class="fas fa-user-circle text-blue-600 text-3xl mr-3"></i>
          <div>
            <p class="font-semibold">Leo Valenzuela</p>
            <p class="text-gray-600">Limpiador</p>
            <p class="text-gray-500">Llegada: 07:52</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Aquí puedes añadir la lógica en el futuro para obtener datos de una API externa si es necesario.
</script>

<style scoped>
.container {
  /* Opcional: puedes agregar más estilos aquí si es necesario */
}
</style>
