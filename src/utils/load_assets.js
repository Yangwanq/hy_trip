export const  getAssetURL = (image) => {
  // 第一个参数: 相对路径
  // 第二个参数：当前路径的URL
  // return new URL('../../assets/img/tabbar/tab_favor.png', import.meta.url).href
  return new URL(`../assets/img/${image}`, import.meta.url).href
}