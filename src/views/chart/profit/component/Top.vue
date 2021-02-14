<!--
 * @Description: 页面顶部 表单集 组件
 * @Version: 1.0
 * @Autor: tao
 * @Date: 2021-01-15 16:19:27
 * @LastEditors: tao
 * @LastEditTime: 2021-02-01 22:13:14
-->
<template>
  <div class="top">
    <div class="top_item">
      <div class="header">
        <span></span>
        <span>库存预警</span>
      </div>
      <div class="body">0</div>
    </div>
    <div class="top_item">
      <div class="header">
        <span></span>
        <span>未出库销售</span>
      </div>
      <div class="body">0</div>
    </div>
    <div class="top_item">
      <div class="header">
        <span></span>
        <span>未入库采购</span>
      </div>
      <div class="body">0</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  margin-bottom: 20px;
  .top_item {
    cursor: pointer;
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