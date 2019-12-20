<template>
  <div ref="echartsMap">
  </div>
</template>
<script>
let echarts = require('echarts')
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.initEcharts()
  },
  methods: {
    initEcharts () {
      let mycharts = echarts.init(this.$refs.echartsMap)
      mycharts.showLoading()
      let option = {

      }
      mycharts.setOption(option)
    }
  }
}
</script>