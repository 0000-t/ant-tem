<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-24 11:04:33
 * @LastEditors: tao
 * @LastEditTime: 2021-02-09 23:50:40
-->
<template>
  <div class="Count">
    <Management>
      <Top slot="top"></Top>
      <div slot="body">
        <div class="title">
          <span :class="{ isCheck: isCheck }" @click="isCheck = !isCheck"
            >日销售统计</span
          >
          <span :class="{ isCheck: !isCheck }" @click="isCheck = !isCheck"
            >月销售统计</span
          >
        </div>
        <TNTCharts v-show="isCheck" :options="dateOptions"></TNTCharts>
        <TNTCharts v-show="!isCheck" :options="monthOptions"></TNTCharts>
      </div>
    </Management>
  </div>
</template>

<script>
import Management from "components/common/management/Management";
import Top from "./component/Top";
import TNTCharts from "./component/TNTCharts";
import { getProfit, getStatistic } from "network/info";
export default {
  components: {
    Management,
    Top,
    TNTCharts,
  },
  data() {
    return {
      dateOptions: {},
      monthOptions: {},
      isCheck: true,
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const result = await Promise.all([getStatistic(), getProfit()]);
      // this.manageData(result[0].data);
      console.log(result);
      this.computeDate(result[0].data);

      this.computeMonth(result[1].data.slice());
    },

    manageData(date) {
      let arr = Object.keys(date).sort(function (a, b) {
        //sort按时间正序排序
        return Date.parse(a) - Date.parse(b);
      });

      let a = arr.map((item) => {
        if (date[item].length == 0) {
          item = [
            {
              modifyDate: item,
              name: null,
              specification: null,
              tradeCnt: 0,
              tradeMoney: 0,
            },
          ];
        } else {
          item = date[item];
        }
        return item;
      });
      console.log(a);
      this.computeDate(a);
    },

    computeDate(day) {
      this.dateOptions = {
        // title: "日销售统计",
        legend: ["订单数", "交易额"],
        xAxis: day.map((item) => item.date),
        series: [
          {
            name: "订单数",
            type: "line",
            data: day.map((item) => item.tradeCnt),
          },
          {
            name: "交易额",
            type: "line",
            data: day.map((item) => item.tradeMoney),
          },
        ],
      };
    },

    computeMonth(month) {
      this.monthOptions = {
        // title: "月销售统计",
        legend: ["利润", "交易额", "成本"],
        xAxis: month.map((item) => item.month),
        series: [
          {
            name: "利润",
            type: "line",
            data: month.map((item) => item.profit),
          },
          {
            name: "交易额",
            type: "line",
            data: month.map((item) => item.trade),
          },
          {
            name: "成本",
            type: "line",
            data: month.map((item) => item.cost),
          },
        ],
      };
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  text-align: center;
  margin: 20px 0px 40px 20px;
  font-size: 18px;
  font-weight: bold;
  span {
    margin: 0 10px;
    padding: 0 5px 5px;
    cursor: pointer;
  }
  .isCheck {
    border-bottom: 2px solid rgb(39, 169, 128);
    color: rgb(39, 169, 128);
  }
}
</style>