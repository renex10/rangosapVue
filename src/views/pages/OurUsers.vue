<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4">Usuarios</h1>

    <button
      @click="usersStore.fetchUsers()"
      class="mb-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
    >
      Cargar Usuarios
    </button>

    <div v-if="usersStore.loading" class="text-center">Cargando usuarios...</div>
    <div v-if="usersStore.error" class="text-center text-red-500">
      {{ usersStore.error }}
    </div>

    <table
      v-if="usersStore.users && usersStore.users.length"
      class="min-w-full bg-white border border-gray-200 rounded-lg shadow mt-4"
    >
      <thead>
        <tr class="bg-gray-800 text-white text-left">
          <th class="py-2 px-4 border-b">Nombre</th>
          <th class="py-2 px-4 border-b">Email</th>
          <!-- La columna Rol ha sido eliminada -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in usersStore.users" :key="user.id" class="hover:bg-gray-100">
          <td class="py-2 px-4 border-b">{{ user.name || "N/A" }}</td>
          <td class="py-2 px-4 border-b">{{ user.email || "N/A" }}</td>
          <!-- La columna Rol ha sido eliminada -->
        </tr>
      </tbody>
    </table>

    <div
      v-if="!usersStore.loading && (!usersStore.users || !usersStore.users.length)"
      class="mt-4 text-center text-gray-500"
    >
      No se encontraron usuarios.
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useUsersStore } from "../../stores/users";

const usersStore = useUsersStore();

console.log(usersStore);

// Carga los usuarios cuando se monta el componente
onMounted(() => {
  usersStore.fetchUsers();
});
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
