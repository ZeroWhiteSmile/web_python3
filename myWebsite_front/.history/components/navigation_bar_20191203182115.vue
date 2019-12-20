<template>
   <Menu theme="dark" accordion>
      <Submenu name="1">
          <template slot="title">
              <Icon type="ios-paper" />
              bizecharts实例
          </template>
          <MenuItem name="1-1" to='/bizecharts'>地图类</MenuItem>
      </Submenu>
      <Submenu name="2">
          <template slot="title">
              <Icon type="ios-paper" />
              地图
          </template>
          <MenuItem name="2-1" to='/baiduMap'>百度地图</MenuItem>
      </Submenu>
   </Menu>
</template>
<script>
export default {
    methods: {
    },
    mounted () {
    }
}
</script>