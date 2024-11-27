<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box></home-search-box>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import HomeNavBar from './cpns/home-nav-bar.vue'
  import HomeSearchBox from './cpns/home-search-box.vue'

  // import hyRequest from '@/service/request'
  import useHomeStore from '@/store/modules/home.js'

  // 发送网络请求
  // 1.热门建议
  // const hotSuggests = ref([])
  // hyRequest.get({
  //   url: '/home/hotSuggests'
  // }).then(res => {
  //   hotSuggests.value = res.data
  // })

  // 2.
  // const categories = reef([])
  // hyRequest.get({
  //   url: '/home/categoried'
  // }).then(res => {
  //   categories.value = res.data
  // })

  const homeStore = useHomeStore()
  homeStore.fetchHotSuggestData()

</script>

<style lang="less" scoped>
  .home {
    .banner img {
      width: 100%;
    }
    
  }
</style>