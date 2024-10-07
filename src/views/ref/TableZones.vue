<script lang="ts" setup>
import { ref } from "vue";

// Datos de ejemplo (normalmente esto vendría de una API)
const zones = ref([
  { id: 1, name: "Zona A", description: "Descripción de la Zona A" },
  { id: 2, name: "Zona B", description: "Descripción de la Zona B" },
  { id: 3, name: "Zona C", description: "Descripción de la Zona C" },
]);

const editZone = (id) => {
  console.log("Editar zona con ID:", id);
  // Lógica para editar la zona
};

const deleteZone = (id) => {
  console.log("Eliminar zona con ID:", id);
  // Lógica para eliminar la zona
};
</script>

<template>
  <div class="container mx-auto px-4 py-6">
    <h2 class="text-2xl font-bold mb-4">Lista de Zonas</h2>

    <div class="mb-4">
      <router-link
        to="/add-zones"
        class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Agregar Nueva Zona
      </router-link>
    </div>

    <div class="overflow-x-auto rounded-lg shadow-md">
      <table class="min-w-full bg-white border border-gray-300">
        <thead class="bg-gray-200">
          <tr>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Nombre</th>
            <th class="py-2 px-4 border-b">Descripción</th>
            <th class="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="zone in zones" :key="zone.id">
            <td class="py-2 px-4 border-b">{{ zone.id }}</td>
            <td class="py-2 px-4 border-b">{{ zone.name }}</td>
            <td class="py-2 px-4 border-b">{{ zone.description }}</td>
            <td class="py-2 px-4 border-b">
              <button
                @click="editZone(zone.id)"
                class="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
              >
                Editar
              </button>
              <button
                @click="deleteZone(zone.id)"
                class="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 ml-2"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 12px 15px;
  border: 1px solid #dddddd;
  text-align: left;
}

.table th {
  background-color: #f2f2f2;
}
</style>
