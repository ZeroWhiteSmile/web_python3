<template>
  <div>
    <div id="echartsMap" class="echartsMap"></div>
  </div>
</template>
<script>
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