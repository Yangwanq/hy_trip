import { defineStore } from 'pinia'
// import hyRequest from '@/service/request'
import { getHomeHotSuggests } from '@/service'


const useHomeStore = defineStore('home', {
  state() {
    return {
      hotSuggests: [],
      categories: []
    }
  },
  actions: {
    async fetchHotSuggestData() {
      // const res = await hyRequest.get({ url: '/home/hotSuggests' })
      // this.hotSuggests = res.data

      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    }
  }
})

export default useHomeStore