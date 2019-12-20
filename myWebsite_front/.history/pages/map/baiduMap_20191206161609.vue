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
    <!--缩放控件-->
    <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
    <!--聚合动态添加的点坐标-->
    <bm-marker-clusterer :averageCenter="true">
      <bm-marker v-for="marker of markers"
                 :key="marker.code"
                 :position="{lng: 104.114129, lat: 37.550339}"
                 @click="lookDetail(marker)"></bm-marker>
    </bm-marker-clusterer>
    <!--信息窗体-->
    <bm-info-window :position="{lng: infoWindow.info.lng, lat: infoWindow.info.lat}"
                    :title="infoWindow.info.name"
                    :show="infoWindow.show"
                    @close="infoWindowClose"
                    @open="infoWindowOpen">
      <p><span class="left">单位面积能耗：</span><span class="right">{{infoWindow.info.areaEnergy}}kWh/㎡</span></p>
      <p><span class="left">建筑面积：</span><span class="right">{{infoWindow.info.area}}㎡</span></p>
      <p><span class="left">电耗：</span><span class="right">{{infoWindow.info.energy}}kWh</span></p>
      <p><span class="left">水耗：</span><span class="right">{{infoWindow.info.water}}m³</span></p>
      <p><span class="left">气耗：</span><span class="right">{{infoWindow.info.air}}m³</span></p>
    </bm-info-window>
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