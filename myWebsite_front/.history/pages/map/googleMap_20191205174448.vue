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
    //填入申请的apiKey账号
    apiKey: 'AIzaSyACR_kQ-mPYkYJC9GhAVHgjT_XyEx8WC5A',
  }
})
export default {

}
</script>