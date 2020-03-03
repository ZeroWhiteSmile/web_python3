<template>
  <div>
    <div ref="echartsMap"></div>
    <div>
      <p>使用方法</p>
      <a href="https://github.com/apache/incubator-echarts/tree/master/extension/bmap">github地址</a>
      
    </div>
  </div>
</template>
<script type="text/javascript" src="http://api.map.baidu.com/getscript?v=2.0&ak=c1UeaC9cqD1MQNttQb7y5jNbH2GdV7Nj"></script>
<script>
import '../echarts/package/extension/bmap/bmap.js'
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
        // 加载 bmap 组件
        bmap: {
          // 百度地图中心经纬度
          center: [104.114129, 37.550339],
          // 百度地图缩放
          zoom: 5,
          // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
          roam: true,
          // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
          mapStyle: {
            styleJson: [
              {
                'featureType': 'land',     //调整土地颜色
                'elementType': 'geometry',
                'stylers': {
                  'color': '#081734'
                }
              },
              {
                'featureType': 'building',   //调整建筑物颜色
                'elementType': 'geometry',
                'stylers': {
                  'color': '#04406F'
                }
              },
              {
                'featureType': 'building',   //调整建筑物标签是否可视
                'elementType': 'labels',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'highway',     //调整高速道路颜色
                'elementType': 'geometry',
                'stylers': {
                  'color': '#015B99'
                }
              },
              {
                'featureType': 'highway',    //调整高速名字是否可视
                'elementType': 'labels',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'arterial',   //调整一些干道颜色
                'elementType': 'geometry',
                'stylers': {
                  'color':'#003051'
                }
              },
              {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'green',
                'elementType': 'geometry',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'water',
                'elementType': 'geometry',
                'stylers': {
                  'color': '#044161'
                }
              },
              {
                'featureType': 'subway',    //调整地铁颜色
                'elementType': 'geometry.stroke',
                'stylers': {
                  'color': '#003051'
                }
              },
              {
                'featureType': 'subway',
                'elementType': 'labels',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'railway',
                'elementType': 'geometry',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'railway',
                'elementType': 'labels',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'all',     //调整所有的标签的边缘颜色
                'elementType': 'labels.text.stroke',
                'stylers': {
                  'color': '#313131'
                }
              },
              {
                'featureType': 'all',     //调整所有标签的填充颜色
                'elementType': 'labels.text.fill',
                'stylers': {
                  'color': '#FFFFFF'
                }
              },
              {
                'featureType': 'manmade',
                'elementType': 'geometry',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'manmade',
                'elementType': 'labels',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'local',
                'elementType': 'geometry',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'local',
                'elementType': 'labels',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'subway',
                'elementType': 'geometry',
                'stylers': {
                  'lightness': -65
                }
              },
              {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                  'lightness': -40
                }
              },
              {
                'featureType': 'boundary',
                'elementType': 'geometry',
                'stylers': {
                  'color': '#8b8787',
                  'weight': '1',
                  'lightness': -29
                }
              }
            ]
          }
        },
        // 数据
        series: [{
            type: 'scatter',
            // 使用百度地图坐标系
            coordinateSystem: 'bmap',
            // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
            data: [ 
              [1164383,401471,-11,-13,1,-49,-26,-14,99,-170,4,-36,87,-2,16,-141,-2,-15,-47,-6,-168,-9,-2,22,-74,-4,-138,10,12,-152,9,-55,-17,-111,13,-176,-20,-38,1,-57,31,-54,28,-85,-5,-126,-13,-62,1,-34,-84,1,-3,-218,15,6,78,2,4,-52,70,1,7,-142,99,2,21,-5,229,-150,16,-23,0,-180,168,1,-4,-257,82,0,33,-22,78,20],
              [1164311,399594,8,1,33,0,56,1,29,3,30,27,8,-5,21,-14,3,-2,1,-1,-4,-3,-13,-13,-21,-19,-9,-9,-16,-9,-93,-6,8,50,-100,-1,-1,0,-171,-3,-1,0,0,-1,0,-8,0,-15,1,-8,0,-28,0,-4,1,-11,0,-19,0,-12,2,-22,1,-26,1,-25,0,-25,1,-24,0,-4,2,-25,0,-1,0,-7,1,-28,2,-25,17,-30,0,-1,0,-2,2,-55,-44,-1,0,-32,1,0,48,3,11,0,12,-34,0,-7,-24,-9,0,-12,1,-12,0,-1,7,0,8,0,8,0,41,1,1,-10,0,-4,1,-5,0,-6,0,-3,2,-21,1,-12,0,-8,0,-2,2,0,31,-6,6,0,51,2,0,1,-70,0,7,13,7,5,30,22,1,1],
              [1163521,398776,16,1,55,2,47,1,0,1,0,0,0,4,0,8,0,1,-1,7,0,11,-1,16,0,4,0,15,-1,45,0,1,-1,16,-1,54,0,29,0,1,0,2,0,1,0,2,0,4,0,37,-1,7,0,7,0,18,107,0,2,0,30,0,129,2,56,2,36,1,22,1,53,1,47,2,7,0,8,0,8,0,41,1,2,1,17,0,4,0,10,0,33,1,7,0,18,0,1,-32,0,-2,37,0,1,0]
             ]
        }]
      }
      myCharts.setOption(option)  
      myCharts.hideLoading()

      // 百度地图API功能
      // 获取百度地图实例，使用百度地图自带的控件
      let baidumap = myCharts.getModel().getComponent('bmap').getBMap()
      bmap.addControl(new BMap.MapTypeControl())

      //设置地图的中心点和缩放级别
	// mapModal.centerAndZoom(new BMap.Point(113.1357014149, 29.3632163433), 10);

    }
  }
}
</script>
