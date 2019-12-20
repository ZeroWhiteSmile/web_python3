<template>
  <div>
    <div ref="echartsMap"
         class="echartsMap"></div>
    <div>
      <h3>使用方法</h3>
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
          <p>2.引入百度地图script src链接，这是挂载外部库，需要异步加载</p>
          <code>
            promise_map(ak) {
            return new Promise((resolve, reject) => {
            window.onload = function () {
            resolve(BMap)
            }
            var script = document.createElement("script")
            script.type = "text/javascript"
            // 注意：v=3.0 不是v=2.0
            script.src = "http://api.map.baidu.com/api?v=3.0&ak=" + ak + "&callback=init"
            script.onerror = reject
            document.head.appendChild(script)
            // 不resolve()，then方法没法执行
            resolve()
            })
            }
            this.promise_map(ak).then(value => {})
          </code>
        </li>
        <li>
          <p>3.关键代码</p>
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
          <p>5.setMapStyleV2设置发布的样式id</p>
          baidumap.setMapStyleV2({
          styleId: '87bc7325823ced99c2fe15129509dbc9'
          })
        </li>
      </ul>
    </div>
  </div>
</template>
<!-- <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=c1UeaC9cqD1MQNttQb7y5jNbH2GdV7Nj"></script>-->
<script>
// let echarts = require('echarts')
import echarts from 'echarts'
import 'echarts/extension/bmap/bmap'
export default {
  data() {
    return {

    }
  },
  created() {
  },
  mounted() {
    this.promise_map('c1UeaC9cqD1MQNttQb7y5jNbH2GdV7Nj').then(value => {
      this.initEcharts()
    }).catch(reason => {
      console.dir('失败原因', reason)
    })
  },
  methods: {
    promise_map(ak) {
      return new Promise((resolve, reject) => {
        window.onload = function () {
          resolve(BMap)
        }
        var script = document.createElement("script")
        script.type = "text/javascript"
        // 注意：v=3.0 不是v=2.0
        script.src = "http://api.map.baidu.com/api?v=3.0&ak=" + ak + "&callback=init"
        script.onerror = reject
        document.head.appendChild(script)
        // 不resolve()，then方法没法执行
        resolve()
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
          // 百度地图中心经纬度, 使用centerAndZoom设置
          center: [],
          // 百度地图缩放
          zoom: 5,
          // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
          roam: true,
          // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
          mapStyle: {}
        },
        // 数据
        series: [
          {
            type: 'scatter',
            // 使用百度地图坐标系
            coordinateSystem: 'bmap',
            // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
            data: []
          },
          {
            name: '单身狗top10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            hoverAnimation: true,
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{b}',
              }
            },
            itemStyle: {
              normal: {
                color: '#05C3F9',
                shadowBlur: 10,
                shadowColor: '#05C3F9'
              }
            },
            data: [
              {
                name: '北京中央音乐学院',
                value: [116.365749, 39.908294, 199]
              },
              {
                name: '江苏扬州蝶湖公园',
                value: [119.416682, 32.372195, 39]
              },
              {
                name: '四川瓜皮子山',
                value: [104.118405, 30.50845, 152]
              },
              {
                name: '新疆库木塔格沙漠',
                value: [90.253805, 42.69646, 152]
              },
              {
                name: '云南丽江漫香酒吧',
                value: [100.243914, 26.877432, 152]
              },
              {
                name: '广州皮大学城星海音乐学院',
                value: [113.387593, 23.063188, 152]
              }
            ]
          },
          {
            name: '单身狗',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: []
          },
          {
            name: '单身喵',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: []
          },
          {
            name: '吃狗粮',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: []
          },
          {
            name: '绿地',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: []
          },
          {
            name: '天堂',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: []
          }
        ]
      }
      myCharts.setOption(option)
      myCharts.hideLoading()

      // 百度地图API功能
      // 获取百度地图实例，使用百度地图自带的控件
      let baidumap = myCharts.getModel().getComponent('bmap').getBMap()
      // 控件 - 地图类型 => 地图、三维、微信
      baidumap.addControl(new BMap.MapTypeControl())
      // 定位 - 浏览器定位 => 中心点和缩放级别
      baidumap.centerAndZoom(new BMap.Point(105.755971, 35.713033), 6)
      // setMapStyleV2方法需要在地图初始化（centerAndZoom）完成后执行
      baidumap.setMapStyleV2({
        styleId: '87bc7325823ced99c2fe15129509dbc9'
      })
      //图表自适应
      window.addEventListener("resize", () => {
        myCharts.resize()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.echartsMap{
  width: 100%;
  height: 100%;
}
</style>