<template>
  <baidu-map
    style="width:100%; height: 100%;"
    :center="{lng: 104.114129, lat: 37.550339}"
    :scroll-wheel-zoom="true"
    :zoom="1"
    class="map"
    ak="c1UeaC9cqD1MQNttQb7y5jNbH2GdV7Nj"
    ></baidu-map>
</template>
<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
  components: {
    BaiduMap
  }
}
</script>