import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    loaded: false,
    name: '',
    email: ''
  }),
  getters: {},
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
