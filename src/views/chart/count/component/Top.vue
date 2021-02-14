<!--
 * @Description: 页面顶部 表单集 组件
 * @Version: 1.0
 * @Autor: tao
 * @Date: 2021-01-15 16:19:27
 * @LastEditors: tao
 * @LastEditTime: 2021-02-09 17:34:58
-->
<template>
  <div class="top">
    <div class="top_item">
      <div class="header">
        <span></span>
        <span>库存预警(个)</span>
      </div>
      <div class="body">{{ warning }}</div>
    </div>
    <div class="top_item">
      <div class="header">
        <span></span>
        <span>销售总量(元)</span>
      </div>
      <div class="body">{{ sellCount }}</div>
    </div>
    <div class="top_item">
      <div class="header">
        <span></span>
        <span>采购总量(元)</span>
      </div>
      <div class="body">{{ buyCount }}</div>
    </div>
  </div>
</template>

<script>
import { getAll } from "network/sellInfo";
import { getInventoryAll } from "network/inventory";
import { getPurchaseAll } from "network/purchaseInfo";
export default {
  components: {},
  data() {
    return {
      warning: 0,
      sellCount: 0,
      buyCount: 0,
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const result = await Promise.all([
        getAll(),
        getInventoryAll(),
        getPurchaseAll(),
      ]);
      //销售总量
      console.log(result);
      this.sellCount = result[0].data
        .map((item) => item.sumPrice)
        .reduce((pre, curr) => pre + curr);
      //库存预警
      this.warning = result[1].data.filter(
        (item) => item.warnCount > item.balance
      ).length;
      //采购总量
      this.buyCount = result[2].data
        .map((item) => item.sumPrice)
        .reduce((pre, curr) => pre + curr);
    },
  },
};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  margin-bottom: 20px;
  .top_item {
    // cursor: pointer;
    flex: 1;
    background: #f2f2f2;
    border: 1px solid #ccc;
    margin: 0 40px;
    padding: 10px 20px;
    &:first-of-type {
      &:hover {
        background: rgb(245, 34, 45);
        color: white;
      }
      .header {
        span {
          &:first-of-type {
            background: rgb(245, 34, 45);
          }
        }
      }
    }
    &:hover {
      background: rgb(250, 140, 22);
      color: white;
      .header {
        span {
          &:first-of-type {
            background: white;
          }
        }
      }
    }
    .header {
      span {
        &:first-of-type {
          display: inline-block;
          width: 10px;
          height: 10px;
          background: rgb(250, 140, 22);
          border-radius: 100%;
          margin-right: 5px;
        }
      }
    }
    .body {
      text-align: center;
      font-size: 36px;
    }
  }
}
</style>