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
    setTimeout(() => {
      this.initMaps()
    }, 0)
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