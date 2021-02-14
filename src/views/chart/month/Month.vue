<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-02-07 09:12:21
 * @LastEditors: tao
 * @LastEditTime: 2021-02-08 21:14:47
-->
<template>
  <div>
    <div>
      <!-- <div style="margin-bottom: 20px">
      请选择日期：
      <a-date-picker @change="onChange" />
    </div> -->
      <Table
        v-if="!!columns.length"
        rowKey="aprCnt"
        :title="columns"
        :showEdit="false"
        :showDel="false"
        :tableData="tableData"
      ></Table>
    </div>
  </div>
</template>

<script>
import Table from "components/common/table/Table";
import { getMonthStatistic } from "network/count";
import { chartYear } from "assets/data/other";
export default {
  components: {
    Table,
  },
  data() {
    return {
      tableData: [],
      columns: [],
    };
  },
  created() {
    this.init("2021");
  },
  methods: {
    async init(time) {
      const result = await getMonthStatistic(time);
      console.log(result);
      if (!result.flag || !result.data) return;
      this.tableData = result.data.slice();
      this.year(result.data);
    },

    year(data) {
      // let a = [];
      let a = [{ title: "周期", dataIndex: "cycle" }];
      let len = parseInt(Object.keys(data[0]).length / 2);
      for (let i = 0; i < len; i++) {
        a.push({
          title: i + 1 + "月",
          children: [
            {
              title: "订单量",
              dataIndex: `${chartYear[i]}Cnt`,
            },
            {
              title: "交易额",
              dataIndex: `${chartYear[i]}Money`,
            },
          ],
        });
      }
      this.columns = a;
    },

    // onChange(date, dateString) {
    //   this.statistic(dateString);
    // },
  },
};
</script>

<style>
</style>