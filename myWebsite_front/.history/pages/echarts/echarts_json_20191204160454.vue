<template>
  <div ref="echarts"
       class="echarts"> </div>
</template>
<script>
import { resolve } from 'q'
let echarts = require('echarts')
export default {
  data() {
    return {}
  },
  mounted() {
    this.initEcgarts()
  },
  methods: {
    initEcgarts() {
      let promise = new Promise((resolve, reject))
      $.get('./json/chaina.json', function (chainaJson) {
        echarts.registerMap('chaina', chainaJson)
        let myCharts = echarts.init(this.$refs.echarts)
        myChart.showLoading()
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