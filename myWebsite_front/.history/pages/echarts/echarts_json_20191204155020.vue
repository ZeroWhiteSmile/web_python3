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
      let myCharts = echarts.init(this.$refs.echarts)
      let options = {
        seri
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .echarts {
    width: 100%;
  }
</style>