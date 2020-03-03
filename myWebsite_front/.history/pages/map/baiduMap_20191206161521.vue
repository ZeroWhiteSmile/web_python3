<template>
  <!-- 基础组件 -->
  <baidu-map style="width:100%; height: 100%;"
             :center="{lng: 104.114129, lat: 37.550339}"
             :scroll-wheel-zoom="true"
             :zoom="1"
             class="map"
             ak="c1UeaC9cqD1MQNttQb7y5jNbH2GdV7Nj">
    <!--比例尺控件-->
    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
  </baidu-map>
</template>
<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmScale from 'vue-baidu-map/components/controls/Scale'
import BmNavigation from 'vue-baidu-map/components/controls/Navigation'
import BmMarkerClusterer from 'vue-baidu-map/components/extra/MarkerClusterer'
import BmMarker from 'vue-baidu-map/components/overlays/Marker'
import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow'
export default {
  components: {
    BaiduMap
  }
}
</script>