<template>
  <div>
    <div id="echartsMap" class="echartsMap"></div>
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
    this.initBizcharts()
  },
  methods: {
    initBizcharts () {
      let myCharts = echarts.init(document.getElementById('echartsMap'))
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