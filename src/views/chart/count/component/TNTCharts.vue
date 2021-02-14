<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-02-08 21:35:05
 * @LastEditors: tao
 * @LastEditTime: 2021-02-08 23:18:42
-->
<template>
  <ECharts
    :autoresize="true"
    class="my-chart"
    :options="configuration"
  ></ECharts>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/toolbox";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
export default {
  components: {
    ECharts,
  },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    configuration() {
      return {
        // color: this.options.color || ["#409eff", "#006699"],
        title: {
          // left: "center",
          text: this.options.title,
        },
        tooltip: {
          trigger: "axis",
          // axisPointer: {
          //   type: "shadow",
          // },
        },
        toolbox: {
          // show: true,
          // orient: "vertical",
          // left: "right",
          // top: "center",
          feature: {
            // mark: { show: true },
            // dataView: { show: true, readOnly: false },
            // magicType: { show: true, type: ["bar", "stack", "tiled"] },
            // restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          // left: "right",
          data: this.options.legend,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.options.xAxis,
        },
        yAxis: {
          type: "value",
        },
        series: this.options.series || [],
      };
    },
  },
};
</script>

<style lang="less" scoped>
.my-chart {
  // min-width: 800px;
  width: 100%;
  min-height: 500px;
}
</style>