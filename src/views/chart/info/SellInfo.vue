<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-24 11:03:11
 * @LastEditors: tao
 * @LastEditTime: 2021-02-06 15:02:19
-->
<template>
  <div class="Info">
    <div>
      <div style="margin-bottom: 20px">
        请选择日期：
        <a-date-picker @change="onChange" />
      </div>
      <Table
        :title="columns"
        :showEdit="false"
        :showDel="false"
        :tableData="tableData"
      ></Table>
    </div>
    <div>
      <div style="margin-bottom: 20px">
        请选择日期：
        <a-month-picker @change="change" />
      </div>
      <Table
        :title="columns2"
        :showEdit="false"
        :showDel="false"
        :tableData="tableData2"
      ></Table>
    </div>
  </div>
</template>

<script>
import Table from "components/common/table/Table";
import { getProfit, getStatistic } from "network/info";
export default {
  components: {
    Table,
  },
  data() {
    const columns = [
      {
        title: "商品名",
        dataIndex: "name",
      },
      {
        title: "订单数量",
        dataIndex: "tradeCnt",
      },
      {
        title: "交易额",
        dataIndex: "tradeMoney",
      },
      {
        title: "备注",
        dataIndex: "specification",
      },
      {
        title: "时间",
        dataIndex: "modifyDate",
      },
    ];
    const columns2 = [
      {
        title: "月份",
        dataIndex: "month",
      },
      {
        title: "成本",
        dataIndex: "cost",
      },
      {
        title: "交易额",
        dataIndex: "trade",
      },
      {
        title: "利润",
        dataIndex: "profit",
      },
    ];
    return {
      tableData: [],
      columns,
      tableData2: [],
      columns2,
    };
  },
  methods: {
    async statistic(time) {
      const result = await getStatistic(time);
      console.log(result);
      if (!result.flag || !result.data) return;
      this.tableData = [result.data];
    },

    async profit(time) {
      const result = await getProfit(time);
      console.log(result);
      if (!result.flag || !result.data) return;
      this.tableData2 = [{ ...result.data, id: "key" }];
    },

    onChange(date, dateString) {
      this.statistic(dateString);
    },

    change(date, dateString) {
      this.profit(dateString);
    },
  },
};
</script>

<style lang="less" scoped>
.Info {
  height: 100%;
  display: flex;
  flex-direction: column;
  .InfoTable {
    flex: 1;
  }
}
</style>