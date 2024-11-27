<template>
  <div class="top-page city">
    <div class="top">
      <!-- 1.搜索框 -->
      <van-search  
        v-model="searchValue" 
        shape="round"
        show-action
        @cancel="cancelClick"
        placeholder="城市/区域/位置" 
      />

      <!-- 2.tab的切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="2">
        <template v-for="(value, key, index) in allCity" :key="index">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    
    <div class="content">
      <!-- <city-group :groupData="currentGroup"></city-group>
      <city-group :groupData="currentGroup"></city-group> -->

      <template v-for="(value, key, index) in allCity" :key="index">
        <!-- <h2 v-show="tabActive === key">{{ value.title }}</h2> -->
        <city-group v-show="tabActive === key" :groupData="value"></city-group>
      </template>
    </div>

  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { storeToRefs } from 'pinia'
  // import hyRequest from '@/service/request'
  // import { getCityAll } from '@/service'
  import useCityStore from '@/store/modules/city'
  import CityGroup from './cpns/city-group.vue'

  const router = useRouter()

  // 搜索框功能
  const searchValue = ref('')
  const cancelClick = () => {
    router.back()
  }

  // tab的切换
  const tabActive = ref({})
  

  /**
   * 这个位置发送网络请求有两个缺点：
   *  1.如果网络请求太多，那么页面组件中就包含大量的对于网络请求和数据的处理逻辑
   *  2.如果页面封装了很多的子组件，子组件需要这些数据，我们必须一步步将数据传递过去(props)
   */
  // 网络请求：请求城市的数据
  // const allCity = ref()
  // hyRequest.get({url: '/city/all'}).then(res => {
  //   console.log(res)
  // })
  // getCityAll().then(res => {
  //   allCity.value = res.data
  // })

  // 从Store中获取数据
  const cityStore = useCityStore()
  cityStore.fetchAllCitiesData()
  const { allCity } = storeToRefs(cityStore)

  // 目的：获取选中标签后的数据
  // 1.获取正确的key：将tabs中绑定的tabActive正确绑定
  // 2.根据key从allCity获取数据，默认直接获取的数据不是响应式的，所以必须包裹computed
  const currentGroup = computed(() => allCity.value[tabActive.value])
  
</script>

<style lang="less" scoped>
  .city {

    // top固定定位
    // .top {
    //   position: fixed;
    //   top: 0;
    //   left: 0;
    //   right: 0;
    // }
    // .content {
    //   margin-top: 98px;
    // }

    .top {
      position: relative;
      z-index: 9;
    }
    // 局部滚动
    .content {
      height: calc(100vh - 98px);
      overflow-y: auto;
    }
  }
</style>