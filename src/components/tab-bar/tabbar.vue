<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="item.path">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL('tabbar/'+item.image)" alt="">
            <img v-else :src="getAssetURL('tabbar/'+item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import tabbarData from '@/assets/data/tabbar.js'
  import { getAssetURL } from '@/utils/load_assets.js'

  const currentIndex = ref(0)

</script>

<style lang="less" scoped>
.tab-bar {
  img {
    height: 26px;
  }
}
</style>