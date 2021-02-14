<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-16 15:37:04
 * @LastEditors: tao
 * @LastEditTime: 2021-01-23 21:16:41
-->
<template>
  <div class="t-form-double-item">
    <span class="item">
      <label v-if="labels[0]" for="">{{ labels[0] }}：</label>
      <slot name="left"></slot>
    </span>
    <span class="item">
      <label v-if="labels[1]" for="">{{ labels[1] }}：</label>
      <slot name="right"></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    labels: {
      type: Array,
      defalut: () => ["one", "two"],
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.t-form-double-item {
  width: 100%;
  display: flex;
  margin-bottom: 15px;
  .item {
    width: 50%;
    display: flex;
    align-items: center;
    label {
      width: 200px;
      font-size: 14px;
      text-align: right;
      &:last-of-type {
        margin-left: 4px;
      }
    }
    .ant-input {
      width: 145.5px !important;
    }
    .ant-calendar-picker,
    .ant-radio-group {
      width: 260px !important;
    }
  }
}
</style>