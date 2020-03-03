import Vue from 'vue'
import baiduMap from 'vue-baidu-map/components/map/Map.vue'
Vue.use(baiduMap, {
  ak: 'c1UeaC9cqD1MQNttQb7y5jNbH2GdV7Nj'
})

// 此处为模块化使用方法 并且在nuxt.config.js的plugins: ['@/plugins/baidumap']引入