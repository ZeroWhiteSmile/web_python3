<template>
  <div ref="echarts"
       class="echarts"> </div>
</template>
<script>
import chainaJson from './json/chaina.js'
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
      echarts.registerMap('chaina', chainaJson)
      let myCharts = echarts.init(this.$refs.echarts)
      myCharts.showLoading()
      myCharts.setOption({
        series: [{
          type: 'map',
          map: 'chaina',
          geo: {
            map: 'chaina',
            nameMap: {
              'chaina': '中国'
            },
            roam: 'scale',
            // itemStyle无效
            itemStyle: {
              areaColor: '#8a2be2',
              color: '#8a2be2',
              borderColor: '#8a2be2',
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 10
            },
            regions: [
              {
                name: '中国',
                itemStyle: {
                  areaColor: 'red'
                }
              }
            ],
            emphasis: {
              lable: {
                show: true,

              }
            }
          }
        }]
      })
      myCharts.hideLoading()
    }
  }
}
</script>
<style lang="scss" scoped>
  .echarts {
    width: 100%;
  }
</style>