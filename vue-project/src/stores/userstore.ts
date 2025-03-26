import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userData', () => {
  const email = ref('')
  const password = ref('')
  return { email, password }
})
