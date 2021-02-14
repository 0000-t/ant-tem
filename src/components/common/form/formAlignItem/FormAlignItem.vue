<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-21 22:11:49
 * @LastEditors: tao
 * @LastEditTime: 2021-01-23 22:16:46
-->
<template>
  <div :style="FormItemClass" class="t-form-item">
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
    align: {
      type: String,
      defalut: "right",
    },
  },
  computed: {
    FormItemClass() {
      if (this.align === "center") {
        return [
          {
            "margin-right": "25%",
          },
        ];
      }

      const align = this.align == "right" ? "left" : "right";
      console.log(this.align, this.align == "left");
      return [
        {
          [`margin-${align}`]: "50%",
        },
      ];
    },
  },
};
</script>

<style lang="less" scoped>
.t-form-item {
  margin-bottom: 15px;
  text-align: right;
  .ant-input {
    width: 145.5px !important;
  }
}
</style>