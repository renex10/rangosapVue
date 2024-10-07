<script lang="ts" setup>
import { ref, computed } from "vue";

// Datos de ejemplo (normalmente esto vendría de una API)
const overtimeRecords = ref([
  { id: 1, employee: "Pedro García", hours: 3, date: "2024-10-01" },
  { id: 2, employee: "Ana Torres", hours: 2, date: "2024-10-01" },
  { id: 3, employee: "Carlos Ruiz", hours: 5, date: "2024-10-02" },
  // Agrega más registros según sea necesario
]);

const searchQuery = ref("");

// Computed property para filtrar registros
const filteredOvertimeRecords = computed(() => {
  return overtimeRecords.value.filter((record) => {
    return record.employee.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});
</script>

<template>
  <div class="container mx-auto px-4 py-6">
    <h2 class="text-2xl font-bold mb-4">Reporte de Horas Extras</h2>

    <div class="mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Buscar empleado..."
        class="border rounded-lg px-4 py-2 w-full"
      />
    </div>

    <div class="overflow-x-auto rounded-lg shadow-md">
      <table class="min-w-full bg-white border border-gray-300">
        <thead class="bg-gray-200">
          <tr>
            <th class="py-2 px-4 border-b">Empleado</th>
            <th class="py-2 px-4 border-b">Horas Extras</th>
            <th class="py-2 px-4 border-b">Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="record in filteredOvertimeRecords" :key="record.id">
            <td class="py-2 px-4 border-b">{{ record.employee }}</td>
            <td class="py-2 px-4 border-b">{{ record.hours }}</td>
            <td class="py-2 px-4 border-b">{{ record.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
/* Estilos adicionales si es necesario */
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
