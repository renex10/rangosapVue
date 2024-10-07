<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4">Agregar Zonas</h1>

    <!-- Botón para ver todas las zonas -->
    <router-link to="/zones" class="inline-block mb-4">
      <button
        class="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
      >
        <i class="fas fa-table"></i> Ver Zonas
      </button>
    </router-link>

    <form @submit.prevent="addZone" class="bg-white shadow-md rounded-lg p-6">
      <div class="mb-4">
        <label for="zoneName" class="block text-lg font-medium text-gray-700"
          >Nombre de la Zona</label
        >
        <input
          type="text"
          id="zoneName"
          v-model="zoneName"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Ejemplo: Zona de Juegos"
        />
      </div>

      <div class="mb-4">
        <label for="zoneDescription" class="block text-lg font-medium text-gray-700"
          >Descripción</label
        >
        <textarea
          id="zoneDescription"
          v-model="zoneDescription"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          rows="3"
          placeholder="Descripción de la zona"
        ></textarea>
      </div>

      <div class="mb-4">
        <label for="zoneLocation" class="block text-lg font-medium text-gray-700"
          >Ubicación</label
        >
        <input
          type="text"
          id="zoneLocation"
          v-model="zoneLocation"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="Ejemplo: Primer piso, ala oeste"
        />
      </div>

      <div class="flex items-center mb-4">
        <input
          type="checkbox"
          id="isActive"
          v-model="isActive"
          class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label for="isActive" class="ml-2 block text-lg text-gray-700">Zona Activa</label>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        <i class="fas fa-plus-circle"></i> Agregar Zona
      </button>
    </form>

    <div v-if="message" class="mt-4 p-2 text-green-700 bg-green-200 rounded">
      {{ message }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const zoneName = ref("");
const zoneDescription = ref("");
const zoneLocation = ref("");
const isActive = ref(false);
const message = ref("");

const addZone = () => {
  // Lógica para agregar la zona
  // Puedes hacer una llamada a la API aquí

  // Simulando una respuesta exitosa
  message.value = `Zona "${zoneName.value}" agregada exitosamente.`;

  // Limpiar el formulario
  zoneName.value = "";
  zoneDescription.value = "";
  zoneLocation.value = "";
  isActive.value = false;
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
