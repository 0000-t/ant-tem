<!--
 * @Description: 页面顶部 表单集 组件
 * @Version: 1.0
 * @Autor: tao
 * @Date: 2021-01-15 16:19:27
 * @LastEditors: tao
 * @LastEditTime: 2021-02-02 12:28:09
-->
<template>
  <div class="top">
    <a-form layout="inline">
      <a-form-item label="创造人">
        <a-input v-model="createMan" placeholder="请输入" />
      </a-form-item>
      <a-form-item label="供应商">
        <a-select
          show-search
          placeholder="请选择"
          style="width: 200px"
          :filter-option="filterOption"
          @change="handleChange"
        >
          <a-select-option
            v-for="item in supplier"
            :key="item.id"
            :value="item.id"
          >
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="产生日期">
        <a-date-picker @change="onChange" />
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
      vendorId: null,
      supplier: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const result = await getAll();
      console.log(result);
      if (!result.flag) return;
      this.supplier = result.data;
    },
    appendNote() {
      this.$emit("append");
    },
    save() {
      this.$emit("save", {
        vendorId: this.vendorId,
        createDate: this.createDate,
        createMan: this.createMan,
      });
    },
    handleChange(value) {
      this.vendorId = value;
    },
    onChange(data, dataString) {
      this.createDate = new Date(dataString);
      console.log(this.createDate);
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
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