<template>
  <div class="container mx-auto px-4 py-6">
    <h1 class="text-2xl font-bold mb-4">Reporte de Insumos del Día</h1>

    <div class="mb-4 flex justify-between items-center">
      <div class="flex space-x-2">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar insumo..."
          class="border rounded-lg px-4 py-2"
        />
        <button
          @click="searchSupply"
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          <i class="fas fa-search"></i> Buscar
        </button>
      </div>
      <button
        @click="exportSupplyReport"
        class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        <i class="fas fa-file-export"></i> Exportar Reporte
      </button>
    </div>

    <div class="overflow-x-auto rounded-lg shadow-md">
      <table class="min-w-full bg-white border border-gray-300">
        <thead class="bg-gray-200">
          <tr>
            <th class="py-2 px-4 border-b">Insumo</th>
            <th class="py-2 px-4 border-b">Cantidad Utilizada</th>
            <th class="py-2 px-4 border-b">Responsable</th>
            <th class="py-2 px-4 border-b">Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="supply in filteredSupplies" :key="supply.id">
            <td class="py-2 px-4 border-b">{{ supply.name }}</td>
            <td class="py-2 px-4 border-b">{{ supply.quantityUsed }}</td>
            <td class="py-2 px-4 border-b">{{ supply.responsible }}</td>
            <td class="py-2 px-4 border-b">{{ supply.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Datos de ejemplo (normalmente esto vendría de una API)
const supplies = ref([
  {
    id: 1,
    name: "Desinfectante",
    quantityUsed: 5,
    responsible: "Ana Torres",
    date: "2024-10-01",
  },
  {
    id: 2,
    name: "Guantes",
    quantityUsed: 20,
    responsible: "Carlos Ruiz",
    date: "2024-10-01",
  },
  // Agrega más insumos según sea necesario
]);

const searchQuery = ref("");

// Computed property para filtrar insumos
const filteredSupplies = computed(() => {
  return supplies.value.filter((supply) => {
    return supply.name.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

// Funciones para exportar y buscar insumos
const exportSupplyReport = () => {
  alert("Función de exportar reporte de insumos aún no implementada.");
};

const searchSupply = () => {
  // Lógica para realizar la búsqueda
  alert("Buscar insumos según el término ingresado.");
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
