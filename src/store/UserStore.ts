import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    name: '',
    email: ''
  }),
  getters: {
    getName: (state) => state.name,
    getEmail: (state) => state.email
  },
  actions: {
    setUser(name: string, email: string) {
      this.name = name
      this.email = email
    },
    clearUser() {
      this.name = ''
      this.email = ''
    }
  }
})
