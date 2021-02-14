<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-16 15:36:38
 * @LastEditors: tao
 * @LastEditTime: 2021-01-24 22:52:41
-->
<template>
  <div class="t-form-item">
    <label for="">{{ label }}：</label>
    <slot></slot>
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
  width: 100%;
  margin: 0 auto;
  display: flex;
  // align-items: center;
  margin-bottom: 15px;
  label {
    width: 150px;
    font-size: 14px;
    text-align: right;
  }
}
</style>