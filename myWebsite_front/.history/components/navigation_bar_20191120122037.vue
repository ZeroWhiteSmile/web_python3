<template>
   <Menu theme="dark" accordion :open-names="['1']"  active-name="1-1" on-select='navigationClick'>
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
    mounted () {
        navigationClick () {
            console.log(12312)
        }
    }
}
</script>