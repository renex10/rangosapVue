<template>
  <div class="container mx-auto px-4 py-6">
    <h1 class="text-2xl font-bold mb-4">Horarios de Empleados</h1>
    <div class="mb-4 flex justify-end">
      <button
        @click="addSchedule"
        class="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        <i class="fas fa-plus mr-2"></i> Agregar Horario
      </button>
    </div>
    <div class="overflow-x-auto rounded-lg shadow-md">
      <table class="min-w-full bg-white border border-gray-300">
        <thead class="bg-gray-200">
          <tr>
            <th class="py-2 px-4 border-b">Empleado</th>
            <th class="py-2 px-4 border-b">Día</th>
            <th class="py-2 px-4 border-b">Hora de Inicio</th>
            <th class="py-2 px-4 border-b">Hora de Fin</th>
            <th class="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="schedule in schedules" :key="schedule.id">
            <td class="py-2 px-4 border-b">{{ schedule.employee }}</td>
            <td class="py-2 px-4 border-b">{{ schedule.day }}</td>
            <td class="py-2 px-4 border-b">{{ schedule.startTime }}</td>
            <td class="py-2 px-4 border-b">{{ schedule.endTime }}</td>
            <td class="py-2 px-4 border-b flex space-x-2">
              <button
                @click="editSchedule(schedule.id)"
                class="text-yellow-500 hover:text-yellow-700"
              >
                <i class="fas fa-edit"></i>
              </button>
              <button
                @click="deleteSchedule(schedule.id)"
                class="text-red-500 hover:text-red-700"
              >
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Datos de ejemplo (normalmente esto vendría de una API)
const schedules = ref([
  {
    id: 1,
    employee: "Juan Pérez",
    day: "Lunes",
    startTime: "08:00 AM",
    endTime: "05:00 PM",
  },
  {
    id: 2,
    employee: "María López",
    day: "Martes",
    startTime: "09:00 AM",
    endTime: "06:00 PM",
  },
  // Agrega más horarios según sea necesario
]);

const addSchedule = () => {
  // Lógica para agregar horario
  alert("Agregar Horario");
};

const editSchedule = (id) => {
  // Lógica para editar horario
  alert(`Editar Horario con ID: ${id}`);
};

const deleteSchedule = (id) => {
  // Lógica para eliminar horario
  alert(`Eliminar Horario con ID: ${id}`);
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
