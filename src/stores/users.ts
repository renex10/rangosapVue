import { defineStore } from 'pinia';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  // Elimina la propiedad role ya que no la necesitas
}

function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || 'Error de red';
  }
  return error instanceof Error ? error.message : 'Ocurrió un error desconocido';
}

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as User[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchUsers() {
      this.loading = true;
      this.error = null;
      console.log("Cargando usuarios...");
      try {
        const response = await axios.get('http://127.0.0.1:8000/v1/users');
        console.log('Respuesta de la API:', response.data);
        this.users = response.data; // Asegúrate de que esto coincida con la respuesta de tu API
      } catch (error) {
        this.error = getErrorMessage(error);
      } finally {
        this.loading = false;
      }
    },
  },
});

