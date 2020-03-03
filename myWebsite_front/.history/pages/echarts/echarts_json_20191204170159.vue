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
          // map: 'chaina', 
        }],
        geo: {
          show: true,
          map: 'chaina',
          nameMap: {
            'chaina': '中国'
          },
          zoom: 1.2,
          roam: 'scale',
          // 普通显示设置
          itemStyle: {
            areaColor: 'transparent',
            borderColor: '#3fdaff',
            borderWidth: 2,
            shadowColor: 'rgba(63, 218, 255, 0.5)',
            shadowBlur: 30,
            color: '#f00'
          },
          // 高亮设置
          emphasis: {
            itemStyle: {
              areaColor: '#2B91B7',
            }
          },
          // 特地区域设置
          regions: [
            {
              name: '广东',
              itemStyle: {
                normal: {
                  areaColor: '#8a2be2',
                },
                emphasis: {
                }
              },
              label: {
                normal: {
                  show: true,
                  color: '#fff',
                },
                emphasis: {
                  color: '#f00'
                }
              }
            },
            {
              name: '香港',
              itemStyle: {
                normal: {
                  areaColor: '#8a2be2',
                },
                emphasis: {
                }
              },
              label: {
                normal: {
                  show: true,
                  color: '#fff',
                },
                emphasis: {
                  color: '#f00'
                }
              }
            }
          ]
        }
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