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
  mounted() {
    this.initMaps()
  },
  methods: {
    initMaps() {
      console.log(new google.maps)
    }
  }
}
</script>