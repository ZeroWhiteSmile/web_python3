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
      let myCharts = echarts.init(this.$refs.echartsMap)
      myCharts.showLoading()
      let option = {
        // 图例
        legend: {},

      }
      myCharts.setOption(option)
      myCharts.hideLoading()
    }
  }
}
</script>