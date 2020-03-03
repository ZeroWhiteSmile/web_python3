<template>
  <div>
    <div id="hostmap" class="echartsMap"></div>
    <div>
      <p>使用方法</p>
      <a href="https://github.com/apache/incubator-echarts/tree/master/extension/bmap">github地址</a>
      
    </div>
  </div>
</template>
<script type="text/javascript" src="http://api.map.baidu.com/getscript?v=2.0&ak=c1UeaC9cqD1MQNttQb7y5jNbH2GdV7Nj"></script>
<script>
let echarts = require('echarts')
export default {
  data () {
    return {

    }
  },
  mounted () {
    // this.initEcharts()


  // 全局钩子
 var vueThis=this;
 var hostmap=document.getElementById('hostmap');
 hostmap.style.width=window.innerWidth+'px';
 hostmap.style.height=((window.innerHeight)*0.9)+'px';
var myChart = echarts.init(hostmap);
var geoCoordMap ={
 '新研大楼':[121.411147,31.178764],
 '总部大楼':[121.409992,31.178243],
 '虹钦园':[121.413475,31.184491],
 '虹漕园':[121.414904,31.182674],
 '国际商务中心':[121.410404,31.16982],
 '科技绿洲一二期':[121.397616,31.170258],
 '科技绿洲三期':[121.392763,31.170833],
 '新园科技广场':[	121.411539,31.170511],
 '现代服务业园区':[121.404426,31.170689],	
 '现代服务业园区二期三期':[121.405324,31.172052],
 '新银大厦':[121.409445,31.177932],
 '科产楼':[121.408121,31.17802],
 '新思大楼':[121.404895,31.177335],
 '创新大楼':[121.407503,31.176499],
 '光启园':[121.415518,31.185707],
 '新汇园':[121.409942,31.184367],	
 '凤凰园':[121.402823,31.16888],
 '宝石园':[121.401039,31.170811],
 '新业园':[121.404866,31.174181],	
 '钦江园':[121.406347,31.180214],
 '桂箐园':[121.411445,31.180385],
 '田林园':[121.410629,31.173165],
 '桂果园':[121.41026,31.172969],	
 '桂中园':[121.409064,31.174439],
 '桂平园':[121.409271,31.176429],	
 '创业园':[121.409315,31.179581],
 '智汇园':[121.406648,31.182804],
 '华美达酒店':[121.412265,31.169405],
 '能通加油站':[121.408324,31.171377],

};
var Data =[
    [{name:'创新大楼'},{name:'新研大楼',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'总部大楼',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'虹钦园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'虹漕园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'国际商务中心',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'科技绿洲一二期',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'科技绿洲三期',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'新园科技广场',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'现代服务业园区',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'现代服务业园区二期三期',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'新银大厦',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'科产楼',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'新思大楼',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'光启园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'新汇园',value:35,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'凤凰园',value:94,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'宝石园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'新业园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'钦江园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'桂箐园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'田林园',value:63,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'桂果园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'桂中园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'桂平园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'创业园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'智汇园',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'华美达酒店',value:90,color:'#03FED2'}],
    [{name:'创新大楼'},{name:'能通加油站',value:94,color:'#03FED2'}],

   



]
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[1].name];
        var toCoord = geoCoordMap[dataItem[0].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var series = [];
[['创新大楼', Data]].forEach(function (item,i) {
    var color='';
    item[1].map(function (dataItem) {
      // console.log(dataItem[1].color);
    })
    series.push({
            name: item[0],
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 1,
            // 动线样式
            effect: {
                show: true,
                period:7,
                trailLength:0.8,
                color:'#03FED2',
                symbolSize:2,
            },
            // 实线样式
            lineStyle: {
                normal: {
                    color:'#03FED2',
                    width: 0,
                    curveness:0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            coordinateSystem: 'bmap',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
            
            },
            lineStyle: {
                normal: {
                    color:'#03FED2',
                    width:1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name:'详细信息',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 5;
            },
             data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                     itemStyle: {
                normal:{
                color:dataItem[1].color
                }
            },
                };
            })
        });
});

    var option = {
      tooltip : {
          trigger: 'item'
      },
      bmap: {   
          roam: true,
          silent:true,
          mapStyle:{
            styleJson: [
                  {
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                      'color': '#031628'
                    }
                  },
                  {
                    'featureType': 'land',
                    'elementType': 'geometry',
                    'stylers': {
                      'color': '#000102'
                    }
                  },
                  {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                      'visibility': 'off'
                    }
                  },
                  {
                    'featureType': 'arterial',
                    'elementType': 'geometry.fill',
                    'stylers': {
                      'color': '#000000'
                    }
                  },
                  {
                    'featureType': 'arterial',
                    'elementType': 'geometry.stroke',
                    'stylers': {
                      'color': '#0b3d51'
                    }
                  },
                  {
                    'featureType': 'local',
                    'elementType': 'geometry',
                    'stylers': {
                      'color': '#000000'
                    }
                  },
                  {
                    'featureType': 'railway',
                    'elementType': 'geometry.fill',
                    'stylers': {
                      'color': '#000000'
                    }
                  },
                  {
                    'featureType': 'railway',
                    'elementType': 'geometry.stroke',
                    'stylers': {
                      'color': '#08304b'
                    }
                  },
                  {
                    'featureType': 'subway',
                    'elementType': 'geometry',
                    'stylers': {
                      'lightness': -70
                    }
                  },
                  {
                    'featureType': 'building',
                    'elementType': 'geometry.fill',
                    'stylers': {
                      'color': '#000000'
                    }
                  },
                  {
                    'featureType': 'all',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                      'color': '#857f7f'
                    }
                  },
                  {
                    'featureType': 'all',
                    'elementType': 'labels.text.stroke',
                    'stylers': {
                      'color': '#000000'
                    }
                  },
                  {
                    'featureType': 'building',
                    'elementType': 'geometry',
                    'stylers': {
                      'color': '#022338'
                    }
                  },
                  {
                    'featureType': 'green',
                    'elementType': 'geometry',
                    'stylers': {
                      'color': '#062032'
                    }
                  },
                  {
                    'featureType': 'boundary',
                    'elementType': 'all',
                    'stylers': {
                      'color': '#465b6c'
                    }
                  },
                  {
                    'featureType': 'manmade',
                    'elementType': 'all',
                    'stylers': {
                      'color': '#022338'
                    }
                  },
                  {
                    'featureType': 'label',
                    'elementType': 'all',
                    'stylers': {
                      'visibility': 'off'
                    }
                  },
                  {
                      "featureType": "poi",
                      "elementType": "all",
                      "stylers": {
                                "color": "#03FED2",
                                "visibility": "off"
                      }
            }

                ]
          }
      },
      series: series
    }
    myChart.setOption(option);
    console.log(myChart.getModel().getComponent('bmap'))
    var map = myChart.getModel().getComponent('bmap').getBMap();
    map.disableDoubleClickZoom();
    map.centerAndZoom(new BMap.Point(121.39908,31.177505), 17);  // 初始化地图
    window.onresize = myChart.resize;//图表自适应
  },
  methods: {
    initEcharts () {
      let myCharts = echarts.init(document.getElementById('echartsMap'))
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
        // series: [{
        //     type: 'scatter',
        //     // 使用百度地图坐标系
        //     coordinateSystem: 'bmap',
        //     // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
        //     data: []
        // }]
        xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'scatter',
        coordinateSystem: 'bmap'
    }]
      }
      myCharts.setOption(option)  
      myCharts.hideLoading()

      // 百度地图API功能
      // 获取百度地图实例，使用百度地图自带的控件
      console.log( myCharts.getModel().getComponent())
      // let baidumap = myCharts.getModel().getComponent('bmap').getBMap()
      // bmap.addControl(new BMap.MapTypeControl())
      // // 初始化地图->设置地图的中心点和缩放级别
      // map.centerAndZoom(new BMap.Point(121.39908,31.177505), 17);
      // //图表自适应
      // window.onresize = myChart.resize;
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