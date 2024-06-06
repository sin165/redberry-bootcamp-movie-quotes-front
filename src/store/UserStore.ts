import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    loaded: false,
    name: '',
    email: ''
  }),
  getters: {
    getName: (state) => state.name,
    getEmail: (state) => state.email
  },
  actions: {
    setLoaded() {
      this.loaded = true
    },
    setUser(name: string, email: string) {
      this.name = name
      this.email = email
      this.loaded = true
    },
    clearUser() {
      this.name = ''
      this.email = ''
    }
  }
})
