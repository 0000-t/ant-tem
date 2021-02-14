<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-31 22:26:47
 * @LastEditors: tao
 * @LastEditTime: 2021-01-31 23:32:10
-->
<template>
  <div class="tbody">
    <span>{{ label }}</span>
    <span>
      <a-input
        class="t-input"
        :type="type"
        placeholder="请输入"
        :value="value"
        @change="chageValue"
      />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "键",
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "d",
    },
  },
  methods: {
    chageValue(e) {
      this.$emit("getValue", e.target.value);
    },
  },
};
</script>

<style lang="less" scoped>
div {
  padding: 0;
  width: calc(100%);
  text-align: center;
  height: 40px;
  line-height: 40px;
  &:first-of-type {
    background: rgb(242, 242, 242);
  }

  span {
    display: inline-block;
    width: calc(100% - 154px);
    border-top: 1px solid rgb(235, 238, 245);
    margin: 0;
    padding: 0;
    height: 40px;
    line-height: 40px;
    &:first-of-type {
      width: 150px;
    }

    &:first-child {
      border-right: 1px solid rgb(235, 238, 245);
    }

    .t-input {
      &::placeholder {
        color: rgb(202, 196, 204);
      }
      border-radius: 0px;
      border: 0px solid #dcdfe6;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 39px !important;
      // line-height: 39px;
      outline: 0;
      // padding: 0 15px;
      width: calc(100% - 30px);
    }
  }
}
</style>