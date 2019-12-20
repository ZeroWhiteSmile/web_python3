<template>
  <div ref="echarts"
       class="echarts"> </div>
</template>
<script>
import { resolve } from 'q'
let echarts = require('echarts')
let chainaJson from './json/chaina.json'
export default {
  data() {
    return {}
  },
  mounted() {
    this.initEcgarts()
  },
  methods: {
    initEcgarts() {
      echarts.registerMap('chaina', chainaJson)
      let myCharts = echarts.init(this.$refs.echarts)
      myChart.showLoading()
      myCharts.setOptions({
        series: [{ type: 'map', map: 'chaina' }]
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