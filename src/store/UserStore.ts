import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    loaded: false,
    name: '',
    email: '',
    avatar: ''
  }),
  getters: {},
  actions: {
    setLoaded() {
      this.loaded = true
    },
    setUser(name: string, email: string, avatar: string) {
      this.name = name
      this.email = email
      this.avatar = avatar
      this.loaded = true
    },
    clearUser() {
      this.name = ''
      this.email = ''
      this.avatar = ''
    }
  }
})
