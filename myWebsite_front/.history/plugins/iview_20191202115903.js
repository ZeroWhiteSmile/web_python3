import Vue from 'vue'
import iview from 'view-design'
import locale from 'view-design/dist/locale/en-US' // Change locale, check node_modules/iview/dist/locale
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BMap from 'BMap'

Vue.use(iview, BaiduMap, BMap, {
  locale
})
