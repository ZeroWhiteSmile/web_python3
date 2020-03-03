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
        // 地图
        geo: {
          
        },
        bmap: {
            center: [104.114129, 37.550339],
            zoom: 5,
            roam: true,
            mapStyle: {
            }
        },
        // 数据
        series: [{
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [ [120, 30, 1] ]
        }]
      }
      myCharts.setOption(option)
      console.log(myCharts.getModel())
      let bmap = myCharts.getModel().getComponent('bmap').getBMap()
      bmap.addControl(new BMap.MapTypeControl())
      myCharts.hideLoading()
    }
  }
}
</script>