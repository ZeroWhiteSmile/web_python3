<template>
  <div ref="echartsMap">
  </div>
</template>
<!--百度地图 -->
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=c1UeaC9cqD1MQNttQb7y5jNbH2GdV7Nj"></script>
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
      console.log(myCharts.getModel().getComponent('bmap'))
      let bmap = myCharts.getModel().getComponent('bmap').getBMap()
      bmap.addControl(new BMap.MapTypeControl())
      myCharts.setOption(option)
      myCharts.hideLoading()
    }
  }
}
</script>