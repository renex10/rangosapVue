<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4">Gestión de Asistencia</h1>

    <div class="flex justify-between items-center mb-4">
      <input
        type="text"
        v-model="search"
        placeholder="Buscar empleado..."
        class="border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        @click="markAttendance"
        class="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
      >
        <i class="fas fa-check-circle"></i> Marcar Asistencia
      </button>
    </div>

    <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow">
      <thead>
        <tr class="bg-gray-800 text-white text-left">
          <th class="py-2 px-4 border-b">Nombre</th>
          <th class="py-2 px-4 border-b">Cargo</th>
          <th class="py-2 px-4 border-b">Fecha</th>
          <th class="py-2 px-4 border-b">Hora de Llegada</th>
          <th class="py-2 px-4 border-b">Asistencia</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="employee in filteredEmployees"
          :key="employee.id"
          class="hover:bg-gray-100"
        >
          <td class="py-2 px-4 border-b">{{ employee.name }}</td>
          <td class="py-2 px-4 border-b">{{ employee.position }}</td>
          <td class="py-2 px-4 border-b">{{ formatDate(employee.attendanceDate) }}</td>
          <td class="py-2 px-4 border-b">{{ formatTime(employee.arrivalTime) }}</td>
          <td class="py-2 px-4 border-b">
            <span
              :class="{
                'text-green-500': employee.arrived,
                'text-red-500': !employee.arrived,
              }"
            >
              <i
                :class="{
                  'fas fa-check-circle': employee.arrived,
                  'fas fa-times-circle': !employee.arrived,
                }"
              ></i>
              {{ employee.arrived ? "Llegó" : "No llegó" }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="!filteredEmployees.length" class="mt-4 text-center text-gray-500">
      No se encontraron empleados.
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

// Simulación de datos de empleados
const employees = ref([
  {
    id: 1,
    name: "Juan Pérez",
    position: "Supervisor",
    attendanceDate: new Date(),
    arrivalTime: new Date(), // Agregamos la hora de llegada
    arrived: true,
  },
  {
    id: 2,
    name: "Ana Gómez",
    position: "Limpieza",
    attendanceDate: new Date(),
    arrivalTime: null, // Indica que no llegó
    arrived: false,
  },
  {
    id: 3,
    name: "Luis Martínez",
    position: "Operario",
    attendanceDate: new Date(),
    arrivalTime: new Date(), // Hora de llegada
    arrived: true,
  },
  {
    id: 4,
    name: "Carla Ruiz",
    position: "Administrativo",
    attendanceDate: new Date(),
    arrivalTime: null, // Indica que no llegó
    arrived: false,
  },
]);

const search = ref("");

// Filtrar empleados según la búsqueda
const filteredEmployees = computed(() => {
  if (!search.value) return employees.value;
  return employees.value.filter((employee) =>
    employee.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

// Formatear la fecha
const formatDate = (date) => {
  return new Intl.DateTimeFormat("es-ES", { dateStyle: "short" }).format(date);
};

// Formatear la hora de llegada
const formatTime = (time) => {
  if (!time) return "No llegó"; // Retornar un mensaje si no hay hora de llegada
  return new Intl.DateTimeFormat("es-ES", { timeStyle: "short" }).format(time);
};

// Función para marcar asistencia (simulada)
const markAttendance = () => {
  // Lógica para marcar asistencia
  alert("Asistencia marcada.");
};
</script>

<style scoped>
.container {
  max-width: 800px;
}

.table {
  margin-top: 1rem;
}
</style>
