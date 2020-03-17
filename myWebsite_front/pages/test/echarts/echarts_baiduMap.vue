<template>
  <div>
    <div ref="echartsMap"
         class="echartsMap"></div>
  </div>
</template>
<!-- <script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=c1UeaC9cqD1MQNttQb7y5jNbH2GdV7Nj"></script>-->
<script>
import echarts from 'echarts'
import 'echarts/extension/bmap/bmap'
import { promiseUrl } from '@/tools/tool.js'
export default {
  data() {
    return {
    }
  },
  created() {
  },
  watch: {
  },
  mounted() {
    // 百度一步加载教程:http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/usage
    // 注意：v=3.0 不是v=2.0
    let url = "http://api.map.baidu.com/api?v=3.0&ak=c1UeaC9cqD1MQNttQb7y5jNbH2GdV7Nj&callback=initialize"
    promiseUrl(url).then(value => {
      console.dir('加载完成', value)
      // callback=initialize先初始化地图
      let initialize = () => {
        let mp = new BMap.Map('map')
        console.log('初始化地图', mp)
      }
      initialize()
      this.initEcharts()
    }, reason => {
      console.dir('加载失败', reason)
    })
  },
  methods: {
    initialize() {
      let mp = new BMap.Map('map')
    },
    initEcharts() {
      let myCharts = echarts.init(this.$refs.echartsMap)
      myCharts.showLoading()
      let option = {
        // 图例
        legend: {
          orient: 'vertical',
          id: 1,
          y: 'bottom',
          x: 'right',
          itemWidth: 15,
          data: [
            {
              name: '单身狗top10',
              icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACSElEQVRYR+2XQXbTQAyGf+XlFXbNEZwTQE+Ai82a3qDNBic7cgLKCRJWjdkk3KBd49D0BIQTEE5Qd1leavEUx/a4ju0ZQx+beDsj6RtJv/RM+JvPd0dg7qA/7zV1Q00NMXGmIDrb2DPPmkI0A7h4fYZWa5qDbwhhDnBhW2i1f5ZkbggvGJtk1Rxg4l6DYO8OwiEOHrroLUJdCDOA6tfHMaOoh8G32dMA+O57AKNK54wr9IOTpwJYAHhV4/wGXlBSoqKlWQl8VwcA8AJtv9oXN+x6AP89A4YAE2cM0IusOrwC6BL94KpQMd89B/Chpgd2zwLfOQWLfMlSYv0g+M4tQJ2CU+YVCEN488v0TEuG6y4Gi1Vq4zsnYIxAauDklEOC77LRi6r6gPkT+nORavyp+6IkiADI1DqshIhwjEEgCgDiLCx32NzhYG2lU1CrXPxLAOqlJeV49nCUOv/85iWYvyvQdyCy8e6rgCWQZftCfeuNAOg0luzcL/Dm8frdBHFttBD3hxp8I1dnBtBpTWnleEjblOrQLuEFRzmnkgn5kpcnh2WN/ZgoWnfjQaQz4+WezoTTUYr42jZsNgl1ekFtRnGyKwNxaa5r0p8Oqwxgandw356B8LbUWAVQGzGnkjqAfC8Vd0E8OM5B6nTcIpUH+ggvkGYG5CG/27eFR8iaZoxTOW8vlC8jqSXaFhBZaFGIiEI8Xy9TKeZTnQEkClEJVLtHZGbbUDWuAtDQX3JlD7DPwD4D/yYDhj8jqkqbA2RLTJaU0f+gCvAHSKkI31OjatgAAAAASUVORK5CYII="
            },
            {
              name: '单身狗',
              icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC9ElEQVRYR+2WPUwTYRjH/8/1DgygaUATYoiUxEGDCV0YjAO9DsboIMZ2MUZxcXBiYQAHyyAkLsqgiYmJuLC0URlcuTYmLgxqRCWRoRoGg3zUQMtHPx7z3pWmH8ddeyWBwSe55e593+f3/p+vIxyw0QH7x+EGcI+zx8Xpl0Kl8z3kfcRDUrO8JVup9mGnd/P59q3NLz94AeDEykjjNav1lgq4x9M+F7MmDrh0gTCxfRetyoZl1F6nLuJFdgCzc6yvy5LSlRim+F6bLAFaH26HiOhBfQCkJoaVqDOAsZ1JAm7vAijLvyBT1lKBpOsY1qitoAAzj67ebww5Amgb2xHkfWJz50lAlqvL2fUkY2nFcMnAq9WRhgGnAEYg67PYykiDryaAm+/TvlQKVxeXeLA+38bu06cohJw8PaXSp/LzTDW9EUtHKS/9fgDkQxGb6lMqlDi0AE+O8rqvA4s9+6HAdzobAxCd6lMqqmHPtGat381Q1uoGYPyV/GF3TUm4uzinBeuvAkZM8odrq4ICwEwwCjL6gKnJTcbrTMpCKJ6W1Ei/MwWsAFo8IE8QyCTB8TCw9cfUB4NHXWrEWSfMaoEQwZgFBZObQGfuGbcWj1BBbjZA5p9VQBBwh9TwpCMFWAsMMuhx8WY6NwRengV+l82Xdh+oxQNeKPVFYJXUiLNhxFrAxyB9HOsmZO+4bHpT8Zm8IfD805JwENJdpL51No5ZC3oZ+FgAaM8nc/nt8wtETnDiK5D4VtgiqWHLCWY73kpKUQBkkoAIgYlVADA+S/6w16JE7P8JczOBOIg69UOOnICeAyLryyFEDrT7SkNg0wP0sFnRiW+54lI83gvquAJefFcBoJekSMKiBGVgwqWGLSeqLUBWC0wSSP8r2jXdmbsbnJjTX5G7W4+7rkyR2fWAqhQw7QVip6j/Fo/hbiNu2g3tSrAqANau9zOkN3ahMk1Kmx5QJUBZL6iBxK4EqwRwOJaZf0r+SD5Ge1PbJmENF3a09D/APzM9MDBOoIkUAAAAAElFTkSuQmCC",
            }, {
              name: '单身喵',
              icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhklEQVRYR+2WT1KDMBTG3wt2ph3paBfitu5aNvYG6lE8gR7B3kBv4E3EG9ANdclWXJQZGHWmlecEJrUihIamxUWzySa875cv7w8IDS9sWB8wCoYOApACyMS0prcK56VHMQ5sFXEgoOeuNb3UBhC9DZSCIbHQtDxXG4AIFAfDewA4lwTWar3QWSZhlgt4UQag2/o9gBYHolf7jjGgwxNvXDcpN8oBUcKm5dVuaGsDAIBrYPKrAX0Rc/jNDUwqS7l98DnBnh/mnVIBqOvyynfkGC267vRefOUc0KCehiCA0Gy9nwk3duyAuAY9iHnSCMBqU/s/ANkswBtdby2LU+gAzfrH8bzjI+DRtiEKAbjox2zQX8zxUTaUdMCVAixzlLuxaI+qxJDYU1pamFytnkVi0tFeCVAl/PMPkf1N5Vuxymiv3cO5MB9GfO+eeuku1s4AypzaAzTuAG9qBFBaRQjg/pkF62a+7Fwc2CMDE6VGtlEV5GGqrC+C1wpQZf3WAeo8o1YH6gB8Axqb1zdNIMxTAAAAAElFTkSuQmCC",
            },
            {
              name: '吃狗粮',
              icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACSElEQVRYR+2XQXbTQAyGf+XlFXbNEZwTQE+Ai82a3qDNBic7cgLKCRJWjdkk3KBd49D0BIQTEE5Qd1leavEUx/a4ju0ZQx+beDsj6RtJv/RM+JvPd0dg7qA/7zV1Q00NMXGmIDrb2DPPmkI0A7h4fYZWa5qDbwhhDnBhW2i1f5ZkbggvGJtk1Rxg4l6DYO8OwiEOHrroLUJdCDOA6tfHMaOoh8G32dMA+O57AKNK54wr9IOTpwJYAHhV4/wGXlBSoqKlWQl8VwcA8AJtv9oXN+x6AP89A4YAE2cM0IusOrwC6BL94KpQMd89B/Chpgd2zwLfOQWLfMlSYv0g+M4tQJ2CU+YVCEN488v0TEuG6y4Gi1Vq4zsnYIxAauDklEOC77LRi6r6gPkT+nORavyp+6IkiADI1DqshIhwjEEgCgDiLCx32NzhYG2lU1CrXPxLAOqlJeV49nCUOv/85iWYvyvQdyCy8e6rgCWQZftCfeuNAOg0luzcL/Dm8frdBHFttBD3hxp8I1dnBtBpTWnleEjblOrQLuEFRzmnkgn5kpcnh2WN/ZgoWnfjQaQz4+WezoTTUYr42jZsNgl1ekFtRnGyKwNxaa5r0p8Oqwxgandw356B8LbUWAVQGzGnkjqAfC8Vd0E8OM5B6nTcIpUH+ggvkGYG5CG/27eFR8iaZoxTOW8vlC8jqSXaFhBZaFGIiEI8Xy9TKeZTnQEkClEJVLtHZGbbUDWuAtDQX3JlD7DPwD4D/yYDhj8jqkqbA2RLTJaU0f+gCvAHSKkI31OjatgAAAAASUVORK5CYII="
            },
            {
              name: '绿地',
              icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACZUlEQVRYR7WX300bQRDGfyPBc0gFMRWQVBBb8j2TDoAKAhUEVxCoAFJB4PlO4lxBnApiKgg829JEuz7b92f3dm9F7sWStTPzzezM980KCZ9OGSOcsWImJcsEFzsTSTHWMSMO+WNtlWspmKX4MTZJAGzcDK0FXQAXkmN+B31vBcBU4gVhMhREEgDN+Aj8cqS6YMVESl5iy5AGYMolwndPkB+Sc/5/AWT2rk+8QVYcx07H4ApUI/jUm6FyJQU3MVUYBEDHHHGICW56oO+bS8747QFk3ANnEY6XknMccS6eBzQ+uI0reZzv4BXYsh9wh/AlJqOKHZ+lYKQZNygqBVc+214A1bzfRdx52/8c7HUZW/PdS86FC4QXgO12+IlwFJ35/qARqFHLzlC1AdX4nAA0s0SyRZ8Q32vyqU3VHQC27MpTYub9YJVSCib1Q10AU5YIH4JpK88ID8DX4Nn6AWUiBeX2rwYA7ef4vRvlkTXnHFhN+DYIADS0og0gJvudg8ReaZDUDkBFs38D2TTQNzajIWVY8X4r2XsAmz3PLzLKK2tGba3XkDK6gNX6YAgAp8JVU1MivIsuQhKAWtnagYb2Ql0n4npAeZWinxEHgPgt+V7Om1Pgv88oedUpDwingatoUHIbgJeCY+Q1OBWORm4C2EjvwsOEHR53Nnj/VHQEyacF3a5WZlJwHep09VO5c1v2qaERpDaIYB94r6Cibtd7wb8PbN5/Rr8/77IObLueSbiVnEtf5cIr2WY3MA5O7PNrbXd+58unVf559XDdKd+gjchBNmYVty8eV0ZV9gaoCWhWsKiH6j/NPeohS8oR6gAAAABJRU5ErkJggg==",
            },
            {
              name: '天堂',
              icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEY0lEQVRYR8VXS3IaVxQ996EGT6zgWapiZDSJmlHQCoxWEGkFllYgeQXBKzBegdEKRFZgsgK3RiiZGINTlZlbaJL0C++m3q/7NSBAqlSZiarUzXvnnnvOuRfCN/7QN74fDwLwxw9RWwm8AtAGoQ5Q2xbACRgpgEQoXP74p0y2LWwrAKNGdEpEvwBobnnwmMDdg4m83PT+WgCm4greF5XqYvErExIoNSQhPpj6lTqCEB1iw8zPxaWciDnO1jFyL4DfG5VjJqEvrwN8y6Dek1nW208N1eZzs1dl/TeeZPk5n+qo/71bvSBAM6bhpcTq7GA6H6xiYyUAe3nlyn6fr2t3shNerJlhoZqKyYARxHUl50nrL4z9JaPv0aQoGoDoJ89S68u/w0UQSwAc7R905cx82ZrK0/zQQAvM/FtrKjv62agRDYnopRYjsXrjqzVsPI0G7lkq5jhabMcSgJtGlBjUzNfxVBqV64P+eRpdgchcaIkpwBUA8ofD2p080ay57w4tE5zEE3kYslAC4NT+Xve8NpPN/IDdSDNiwDDwBlnWD+l2LGimtFteOohJbSaP9BmmHdXqJwf8rDWVfQ+iDGCvOibghb6kNcm6C/TesuLjVX0MK7rZiy4AeutB+IpHe9WuE+Y4nmT7SwBs7+mjflCbZc808vAwbTV/uRPYuQkkAEQ0VFl26VkpmLSM6WJMK3arX41o53zotZAzcPM86kHQufZ5PM2OTfWekaDfZXuGtXPKjNee3ptGdWAzgdPaTO6bgvz/FL+Lv8gLAz5QuFGyRxxa0SMOWTKBxKpnGRAXPoBWvUs8P9HO8G0IHVQw4NTvqc57FrghryBgyRfgn5XcsaCp0fOdjk3Pwg0FAJdqTjwpZ/JwUek++UI95AwWh6fxRD4Lm2NdEH20qWo/Pj3vA3DLmWw/BEDYsjCajZYsgASg7+4H4FrgHVDYpqCrCCkM4ml2UrKfF1jQslzEzgl5C4J3lkXo7BZWxFm2r9koeZwxqDgRzq0IjXOY2QRNKNjtROht6CxifRuNNW1hMBX2Cut3ygnmQy5K4HNrkpk9Yq0NC8SciyhIr1J42P+zTjzX0/K4LgWRY2RjEIXBA/DreCKNx/O+g5emmRYXdnaaYTzby/HWTdNiYroo5oCRUhC53NfDRA+jPL3K08wkVzeMXd8IuyPgnIns+A72iK2HUali5mE8lUf6f+W5nvc73xUWdaGT7smdPF6apoH6PfD7FpKh7i8x9w+m8sy/bJwB0dWzfdVCoukFc9fPg/Iewbdijs7GhURfVlrJwAln8mRx3RJRpR2uZKTEODzchc9VvkcE0zT0z6altG+VzimBetVZ9m6bpTTbrZ4zYPYJs9Cu2SM2r+UCfb9Y2vMwINI/QNRwLoRZMitKdZQQHbZruQkkL0ShcPqotTykSVsLRHqjebEcPysCaUEL676z1S+j0GqKcMqENgH1nBnmawZSYiSC0f/ff5ptU/Vj33kQA4+9ZN33/gN9L0NOF3U7kQAAAABJRU5ErkJggg=="
            },
          ],
          textStyle: {
            color: '#fff'
          }
        },
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
            coordinateSystem: 'bmap',
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
            coordinateSystem: 'bmap',
            data: []
          },
          {
            name: '单身喵',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: []
          },
          {
            name: '吃狗粮',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: []
          },
          {
            name: '绿地',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: []
          },
          {
            name: '天堂',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: []
          }
        ]
      }
      myCharts.setOption(option)
      myCharts.hideLoading()
      // 百度地图API功能
      // 获取百度地图实例，使用百度地图自带的控件
      let baidumap = myCharts.getModel().getComponent('bmap').getBMap()
      console.log('getComponent', myCharts.getModel().getComponent('bmap'))
      console.log('baidumap', baidumap)
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
      // 禁用双击放大
      // 麻蛋无效
      // baidumap.disableDoubleClickZoom()
      // window.addEventListener("dblclick", () => {
      //   baidumap.disableDoubleClickZoom()
      // })
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