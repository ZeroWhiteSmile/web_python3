<template>
  <div class="googleBox">
    <div id='google'
         ref='google'
         class="google"></div>
  </div>
</template>
<script>
import googleMaps from 'vue-googlemaps'
import Vue from 'vue'
Vue.use(googleMaps, {
  load: {

  }
})
export default {

}
</script>