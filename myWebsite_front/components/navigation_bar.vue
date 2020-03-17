<template>
  <Menu theme="dark"
        accordion>
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-paper" />echarts地图实例
      </template>
      <MenuItem name="1-1"
                to="/test/echarts/echarts_baiduMap">echarts结合百度地图</MenuItem>
      <MenuItem name="1-2"
                to="/test/echarts/echarts_json">echarts json数据地图</MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-paper" />地图实例
      </template>
      <MenuItem name="2-1"
                to="/test/map/baiduMap">百度地图</MenuItem>
      <MenuItem name="2-2"
                to="/test/map/googleMap">全球Google收费地图</MenuItem>
      <MenuItem name="2-3"
                to="/test/map/openstreetmap">全球openstreetmap免费地图(OSM)</MenuItem>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <Icon type="ios-paper" />python程序
      </template>
      <MenuItem name="3-1"
                to="/develop/python/shakeDown">公众号抢票</MenuItem>
      <MenuItem name="3-2"
                to="/develop/python/shakeDown">刷屏赚钱</MenuItem>
    </Submenu>
  </Menu>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {},
  mounted () { }
}
</script>
