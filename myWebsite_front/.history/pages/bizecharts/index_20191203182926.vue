<template>
  <div>
    <div id="echartsMap" class="echartsMap"></div>
  </div>
</template>
<script>
import React from 'react';
import ReactDOM from 'react-dom';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
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
      // 数据源
      const data = [
        { genre: 'Sports', sold: 275, income: 2300 },
        { genre: 'Strategy', sold: 115, income: 667 },
        { genre: 'Action', sold: 120, income: 982 },
        { genre: 'Shooter', sold: 350, income: 5271 },
        { genre: 'Other', sold: 150, income: 3710 }
      ];

      // 定义度量
      const cols = {
        sold: { alias: '销售量' },
        genre: { alias: '游戏种类' }
      };

      // 渲染图表
      ReactDOM.render((
        <Chart width={600} height={400} data={data} scale={cols}>
            <Axis name="genre" title/>
            <Axis name="sold" title/>
            <Legend position="top" dy={-20} />
            <Tooltip />
            <Geom type="interval" position="genre*sold" color="genre" />
          </Chart>
      ), document.getElementById('mountNode'));
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