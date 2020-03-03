<template>
  <div ref="echartsMap">
  </div>
</template>
<!--百度地图 -->
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=c1UeaC9cqD1MQNttQb7y5jNbH2GdV7Nj"></script>
<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
vue.use(BaiduMap)
let echarts = require('echarts')
export default {
  components
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
            type: 'bmap',
            coordinateSystem: 'bmap',
            data: [ [120, 30, 1] ]
        }]
      }
      myCharts.setOption(option)
      myCharts.hideLoading()

      // 百度地图API功能
	    // let map = new BMap.Map(this.$refs.echartsMap);
      // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
  
      console.log(myCharts.getModel().getComponent('bmap'))
      let bmap = myCharts.getModel().getComponent('bmap').getBMap()
      bmap.addControl(new BMap.MapTypeControl())

    }
  }
}
</script>