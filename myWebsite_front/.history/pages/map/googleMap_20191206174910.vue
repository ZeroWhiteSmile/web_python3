<template>
  <div class="googleBox">
    <p>日了狗的地图，为啥呀刷新才加载出来</p>
    <div id='google'
         ref='google'
         class="google"></div>
  </div>
</template>
<!-- <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyACR_kQ-mPYkYJC9GhAVHgjT_XyEx8WC5A&callback=initMap"
  type="text/javascript"></script>-->
<script>
import { promiseUrl } from '@/tools/tool.js'
export default {
  components: {
  },
  data() {
    return {

    }
  },
  created() {
  },
  mounted() {
    let url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyACR_kQ-mPYkYJC9GhAVHgjT_XyEx8WC5A&callback=initialize'
    promiseUrl(url).then(value => {
      console.dir('加载完成', value)
      this.initMaps()
    }, reason => {
      console.dir('加载失败', reason)
    })
  },
  methods: {
    initMaps() {
      let position = { lat: -25.344, lng: 131.036 }
      let map = new google.maps.Map(document.getElementById('google'), {
        zoom: 4, center: position
      })
      let marker = new google.maps.Marker({ position: position, map: map })
    }
  }
}
</script>
<style lang="scss" scoped>
.google{
  width: 100%;
  height: 100%;
}
</style>