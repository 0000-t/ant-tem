<!--
 * @Description: 页面顶部 表单集 组件
 * @Version: 1.0
 * @Autor: tao
 * @Date: 2021-01-15 16:19:27
 * @LastEditors: tao
 * @LastEditTime: 2021-02-09 14:46:23
-->
<template>
  <div class="top">
    <a-form layout="inline">
      <a-form-item label="创造人">
        <a-input v-model="createMan" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="产生时间">
        <a-date-picker show-time @change="onChange" />
      </a-form-item>
      <a-form-item label="总计">
        <div style="width: 65px">{{ sumPrice }}</div>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="appendNote"> 新增 </a-button>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="save"> 保存 </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { getAll } from "network/supplier";
export default {
  props: {
    sumPrice: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      createDate: null,
      createMan: null,
      modifyDate: null,
    };
  },
  methods: {
    appendNote() {
      this.$emit("append");
    },
    save() {
      this.$emit("save", {
        createDate: this.createDate,
        createMan: this.createMan,
        modifyDate: this.modifyDate,
      });
    },
    onChange(data, dataString) {
      this.createDate = new Date(dataString);
      this.modifyDate = new Date(dataString);
      console.log(this.createDate);
    },
  },
};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  margin-bottom: 20px;
  .top_item {
    margin: 0 20px;
  }
}
</style>