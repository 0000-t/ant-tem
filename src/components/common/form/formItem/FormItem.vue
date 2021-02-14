<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-16 15:36:38
 * @LastEditors: tao
 * @LastEditTime: 2021-01-29 12:27:29
-->
<template>
  <div class="t-form-item">
    <label for="">{{ label }}：</label>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      defalut: "字段",
    },
  },
};
</script>

<style lang="less" scoped>
.t-form-item {
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  label {
    width: 100px;
    font-size: 14px;
    text-align: right;
  }
}
</style>