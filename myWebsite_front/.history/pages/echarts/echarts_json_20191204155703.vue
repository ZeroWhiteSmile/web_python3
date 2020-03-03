<template>
  <div ref="echarts"
       class="echarts"> </div>
</template>
<script>
let echarts = require('echarts')
export default {
  data() {
    return {}
  },
  methods: {
    initEcgarts() {
      myChart.showLoading()
      $.get('./json/chaina.json', function (chainaJson) {
        echarts.registerMap('chaina', chainaJson)
        let myCharts = echarts.init(this.$refs.echarts)
        myCharts.setOptions({
          series: [{ type: 'map', map: 'chaina' }]
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .echarts {
    width: 100%;
  }
</style>