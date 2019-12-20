<template>
  <div>
    <div ref="echartsMap"
         class="echartsMap"></div>
    <div>
      <h3>使用方法</h3>
      <a href="https://github.com/apache/incubator-echarts/tree/master/extension/bmap">github源码地址</a>
      <h3>挖坑一：</h3>
      <p>github上说require(bmap.js)，但是这个js会报错不能用</p>
      <h3>正确方法：</h3>
      <ul>
        <li>
          <p>1.引入echarts和bmap</p>
          <code>
            import 'echarts/extension/bmap/bmap'
            import echarts from 'echarts'
          </code>
        </li>
        <li>
          <p>2.引入echarts和bmap和百度地图</p>
          <code>
            myCharts.setOption({
            bmap: {
            // 百度地图中心经纬度
            center: [104.114129, 37.550339],
            // 百度地图缩放
            zoom: 5,
            // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
            roam: true,
            // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
            mapStyle: {}
            },
            series: [{}]
            })
            // 百度地图API功能
            // 获取百度地图实例，使用百度地图自带的控件
            let baidumap = myCharts.getModel().getComponent('bmap').getBMap()
            baidumap.addControl(new BMap.MapTypeControl())
            // 初始化地图->设置地图的中心点和缩放级别
            baidumap.centerAndZoom(new BMap.Point(121.39908, 31.177505), 17);
            //图表自适应
            window.onresize = myCharts.resize;
          </code>
        </li>
        <li>
          <p>3.刷新后BMap api is not loaded处理</p>

        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=c1UeaC9cqD1MQNttQb7y5jNbH2GdV7Nj"></script>
<script>
// let echarts = require('echarts')
import echarts from 'echarts'
import 'echarts/extension/bmap/bmap'
export default {
  data() {
    return {

    }
  },
  mounted() {

    this.initEcharts()
  },
  methods: {
    MP(ak) {
      return new Promise(function (resolve, reject) {
        window.onload = function () {
          resolve(BMap)
        }
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://api.map.baidu.com/api?v=2.0&ak=" + ak + "&callback=init";
        script.onerror = reject;
        document.head.appendChild(script);
      })
    },
    initEcharts() {
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
                  'color': '#003051'
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
          data: []
        }]
        // xAxis: {
        // type: 'category',
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        // },
        // yAxis: {
        //     type: 'value'
        // },
        // series: [{
        //     data: [820, 932, 901, 934, 1290, 1330, 1320],
        //     type: 'scatter'
        // }]
      }
      myCharts.setOption(option)
      myCharts.hideLoading()

      // 百度地图API功能
      // 获取百度地图实例，使用百度地图自带的控件
      let baidumap = myCharts.getModel().getComponent('bmap').getBMap()
      baidumap.addControl(new BMap.MapTypeControl())
      // 初始化地图->设置地图的中心点和缩放级别
      baidumap.centerAndZoom(new BMap.Point(121.39908, 31.177505), 17);
      //图表自适应
      window.onresize = myCharts.resize;
    }
  }
}
</script>
<style lang="scss" scoped>
.echartsMap{
  width: 100%;
  height: 600px;
}
</style>