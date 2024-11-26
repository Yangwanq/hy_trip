import { defineStore } from 'pinia'

const useCityStore = defineStore('cify', {
  state() {
    return {
      cities: []
    }
  },
  actions: {

  }
})

export default useCityStore