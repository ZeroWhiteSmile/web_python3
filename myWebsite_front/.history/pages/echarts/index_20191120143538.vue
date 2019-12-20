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
  methods: {
    initEcharts () {
      let mycharts = echarts.init(thi.$refs.echartsMap)
      myChart.showLoading()
    }
  }
}
</script>