<template>
  <Menu theme="dark"
        accordion>
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-paper" />echarts实例
      </template>
      <MenuItem name="1-1"
                to="/echarts/echarts_baiduMap">echarts结合百度地图</MenuItem>
      <MenuItem name="1-2"
                to="/echarts/echarts_json">echarts json数据地图</MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-paper" />地图实例
      </template>
      <MenuItem name="2-1"
                to="/map/baiduMap">百度地图</MenuItem>
      <MenuItem name="2-2"
                to="/map/googleMap">全球Google地图</MenuItem>
      <MenuItem name="2-2"
                to="/map/googleMap">全球openstreetmap地图</MenuItem>
    </Submenu>
  </Menu>
</template>
<script>
export default {
  methods: {},
  mounted() { }
}
</script>