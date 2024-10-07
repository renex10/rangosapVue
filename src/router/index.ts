import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../components/layout/MainLayout.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/pages/HomeView.vue')
      },
      {
        path: 'our-users',  // Nueva ruta
        name: 'our-users',
        component: () => import('../views/pages/OurUsers.vue') // Asegúrate de que la ruta sea correcta
      },
      {
        path: 'activities',
        name: 'activities',
        component: () => import('../views/pages/DayActivities.vue')
      },
      {
        path: 'add-zones',
        name: 'add-zones',
        component: () => import('../views/pages/AddZones.vue')
      },
      {
        path: 'zones',  // Nueva ruta para la tabla de zonas
        name: 'table-zones',
        component: () => import('../views/ref/TableZones.vue')  // Ruta de la tabla de zonas
      },
      {
        path: 'attendance',
        name: 'attendance',
        component: () => import('../views/pages/AttendanceDay.vue')
      },
      {
        path: 'schedules',
        name: 'schedules',
        component: () => import('../views/pages/SchedulesWork.vue')
      },
      {
        path: 'report',
        name: 'report',
        component: () => import('../views/pages/ReportDay.vue')
      },
      {
        path: 'overtime',
        name: 'overtime',
        component: () => import('../views/pages/OvertimeDay.vue')
      },
      {
        path: 'supplies',
        name: 'supplies',
        component: () => import('../views/pages/SuppliesDay.vue')
      },
      {
        path: 'history',
        name: 'history',
        component: () => import('../views/pages/HistoryDay.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
