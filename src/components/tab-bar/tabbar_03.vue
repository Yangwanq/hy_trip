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

    <!-- <template v-for="(item, index) in tabbarData" :key="item.path">
      <div class="tab-bar-item" 
          :class="{ active: currentIndex === index }"
          @click="itemClick(index, item)"
      >
        <img v-if="currentIndex !== index" :src="getAssetURL('tabbar/'+item.image)" alt="">
        <img v-else :src="getAssetURL('tabbar/'+item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template> -->
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  // import { useRouter } from 'vue-router'
  import tabbarData from '@/assets/data/tabbar.js'
  import { getAssetURL } from '@/utils/load_assets.js'
  
  // const router = useRouter()

  const currentIndex = ref(0)
  // const itemClick = (index, item) => {
  //   currentIndex.value = index
  //   router.push(item.path)
  // }

</script>

<style lang="less" scoped>
// .tab-bar {
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 50px;
//   display: flex;

//   border-top: 1px solid #f3f3f3;
//   .tab-bar-item {
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     &.active {
//       color: var(--primary-color);
//     }
//     .text {
//       font-size: 12px;
//       margin-top: 2px;
//     }
//     img {
//       width: 36px;
//     }
//   }
// }

.tab-bar {
  // 局部定义一个变量：只针对.tab-bar子元素才生效
  // --van-tabbar-item-icon-size: 30px!import;

  // 找到类，对类中的css属性重写
  // :deep(.class)找到子组件的类，让子组件的类也可以生效
  :deep(.van-tabbar-item__icon) {
    font-size: 50px;
  }

  img {
    height: 28px;
  }
}
</style>