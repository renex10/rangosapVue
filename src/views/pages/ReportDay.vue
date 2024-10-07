<template>
  <div class="container mx-auto px-4 py-6">
    <h1 class="text-2xl font-bold mb-4">Reportes de Actividades e Insumos</h1>

    <div class="mb-4 flex justify-between items-center">
      <div class="flex space-x-2">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar..."
          class="border rounded-lg px-4 py-2"
        />
        <button
          @click="searchReport"
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          <i class="fas fa-search"></i> Buscar
        </button>
      </div>
      <button
        @click="exportReport"
        class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        <i class="fas fa-file-export"></i> Exportar Reporte
      </button>
    </div>

    <div class="overflow-x-auto rounded-lg shadow-md">
      <table class="min-w-full bg-white border border-gray-300">
        <thead class="bg-gray-200">
          <tr>
            <th class="py-2 px-4 border-b">Fecha</th>
            <th class="py-2 px-4 border-b">Actividad</th>
            <th class="py-2 px-4 border-b">Insumo</th>
            <th class="py-2 px-4 border-b">Cantidad</th>
            <th class="py-2 px-4 border-b">Responsable</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="report in filteredReports" :key="report.id">
            <td class="py-2 px-4 border-b">{{ report.date }}</td>
            <td class="py-2 px-4 border-b">{{ report.activity }}</td>
            <td class="py-2 px-4 border-b">{{ report.supply }}</td>
            <td class="py-2 px-4 border-b">{{ report.quantity }}</td>
            <td class="py-2 px-4 border-b">{{ report.responsible }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Datos de ejemplo (normalmente esto vendría de una API)
const reports = ref([
  {
    id: 1,
    date: "2024-10-01",
    activity: "Limpieza General",
    supply: "Desinfectante",
    quantity: 10,
    responsible: "Ana Torres",
  },
  {
    id: 2,
    date: "2024-10-02",
    activity: "Revisión de Insumos",
    supply: "Guantes",
    quantity: 50,
    responsible: "Carlos Ruiz",
  },
  // Agrega más reportes según sea necesario
]);

const searchQuery = ref("");

// Computed property para filtrar reportes
const filteredReports = computed(() => {
  return reports.value.filter((report) => {
    return (
      report.activity.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      report.supply.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      report.responsible.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
});

// Funciones para exportar y buscar reportes
const exportReport = () => {
  alert("Función de exportar reporte aún no implementada.");
};

const searchReport = () => {
  // Lógica para realizar la búsqueda
  alert("Buscar reportes según el término ingresado.");
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
