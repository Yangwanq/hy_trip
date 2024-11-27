<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9854" :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city) in groupData.hotCities" :key="city.cityId">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>

      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)"/>
        </template>
      </template>
    </van-index-bar>

    <!-- <template v-for="group in groupData.cities" :key="group">
      <h2 class="title">{{group.group}}</h2>
      <div class="list">
        <template v-for="(city, index) in group.cities" :key="index">
          <div class="city">{{ city.cityName }}</div>
        </template>
      </div>
    </template> -->
  </div>
</template>

<script setup>
  import { defineProps, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import useCityStore from '@/store/modules/city'
  // 定义props
  const props = defineProps({
    groupData: {
      type: Object,
      default: () => ({})
    }
  })

  const router = useRouter()

  // 动态的索引
  const indexList = computed(() => {
    const list =  props.groupData.cities.map(item => item.group)
    list.unshift('#')
    return list
  })

  // 监听城市的点击
  const cityStore = useCityStore()
  const cityClick = (city) => {
    // 选中当前城市
    cityStore.currentCity = city

    // 返回上一级
    router.back()
  }

</script>

<style lang="less" scoped>
.city-group {
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;
    .city {
      width: 70px;
      height: 28px;
      margin: 6px 0;
      font-size: 12px;
      text-align: center;
      line-height: 28px;
      border-radius: 14px;
      background-color: #fff4ec;
      color: #000;
    }
  }
}
</style>