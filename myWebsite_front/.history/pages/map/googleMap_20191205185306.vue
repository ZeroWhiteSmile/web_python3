<template>
  <div class="googleBox">
    <div id='google'
         ref='google'
         class="google"></div>
  </div>
</template>
 <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyACR_kQ-mPYkYJC9GhAVHgjT_XyEx8WC5A&callback=initMap"
  type="text/javascript"></script>
<script>
// &language=ZH&region=ZH
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
    let url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyACR_kQ-mPYkYJC9GhAVHgjT_XyEx8WC5A&callback=initMap'
    promiseUrl(url).then(value => {
      this.initMaps()
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