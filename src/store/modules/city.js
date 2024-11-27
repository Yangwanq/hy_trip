import { getCityAll } from '@/service'
import { defineStore } from 'pinia'

const useCityStore = defineStore('cify', {
  state() {
    return {
      allCity: [],
      currentCity: { cityName: '广州' }
    }
  },
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCity = res.data
    }
  }
})

export default useCityStore