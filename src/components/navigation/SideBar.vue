<script lang="ts" setup></script>

<template>
  <aside class="sidebar bg-gray-800 text-white w-64 h-full fixed">
    <ul class="menu flex flex-col space-y-6 text-lg mt-8">
      <li>
        <router-link
          to="/our-users"
          class="menu-item flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
        >
          <span class="icon bg-gray-600 text-white rounded-full p-2">
            <i class="fas fa-users text-sm"></i>
          </span>
          <span>Usuarios</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/activities"
          class="menu-item flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
        >
          <span class="icon bg-blue-500 text-white rounded-full p-2">
            <i class="fas fa-tasks text-sm"></i>
          </span>
          <span>Actividades</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/add-zones"
          class="menu-item flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
        >
          <span class="icon bg-green-500 text-white rounded-full p-2">
            <i class="fas fa-map-marked-alt text-sm"></i>
          </span>
          <span>Agregar Zonas</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/attendance"
          class="menu-item flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
        >
          <span class="icon bg-yellow-500 text-white rounded-full p-2">
            <i class="fas fa-user-check text-sm"></i>
          </span>
          <span>Asistencia</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/schedules"
          class="menu-item flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
        >
          <span class="icon bg-purple-500 text-white rounded-full p-2">
            <i class="fas fa-calendar-alt text-sm"></i>
          </span>
          <span>Horarios</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/report"
          class="menu-item flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
        >
          <span class="icon bg-red-500 text-white rounded-full p-2">
            <i class="fas fa-file-alt text-sm"></i>
          </span>
          <span>Informe</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/overtime"
          class="menu-item flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
        >
          <span class="icon bg-pink-500 text-white rounded-full p-2">
            <i class="fas fa-clock text-sm"></i>
          </span>
          <span>Horas Extras</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/supplies"
          class="menu-item flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
        >
          <span class="icon bg-teal-500 text-white rounded-full p-2">
            <i class="fas fa-boxes text-sm"></i>
          </span>
          <span>Insumos</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/history"
          class="menu-item flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700"
        >
          <span class="icon bg-indigo-500 text-white rounded-full p-2">
            <i class="fas fa-history text-sm"></i>
          </span>
          <span>Historia</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.menu-item {
  transition: all 0.3s ease;
}
.menu-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

/* Reducimos el tamaño de los íconos y centramos verticalmente */
.icon {
  width: 35px; /* 30% más pequeño */
  height: 35px; /* 30% más pequeño */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Margen superior de 2rem para la lista */
.menu {
  margin-top: 2rem;
}
</style>
