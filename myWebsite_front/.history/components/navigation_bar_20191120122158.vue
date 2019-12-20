<template>
   <Menu theme="dark" accordion :open-names="['1']">
      <Submenu name="1">
          <template slot="title">
              <Icon type="ios-paper" />
              echarts实例
          </template>
          <MenuItem name="1-1" to='/echarts'>地图类</MenuItem>
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