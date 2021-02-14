<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-24 09:43:31
 * @LastEditors: tao
 * @LastEditTime: 2021-02-02 11:53:27
-->
<template>
  <Model
    title="添加"
    :width="600"
    :show="show"
    @confirm="confirm"
    @cancel="cancel"
  >
    <Form slot="form">
      <FormDoubleItem :labels="['名称', '供应商地址']">
        <a-input
          slot="left"
          v-model="row.name"
          placeholder="请输入内容"
        ></a-input>
        <a-input
          slot="right"
          v-model="row.addr"
          placeholder="请输入内容"
        ></a-input>
      </FormDoubleItem>
      <FormDoubleItem :labels="['电话', '类别']">
        <a-input
          slot="left"
          v-model="row.phone"
          placeholder="请输入内容"
        ></a-input>
        <a-select
          slot="right"
          show-search
          placeholder="请选择"
          v-model="row.producerType"
          style="width: 100%"
          :filter-option="filterOption"
        >
          <a-select-option
            v-for="item in producerType"
            :key="item"
            :value="item"
          >
            {{ item }}
          </a-select-option>
        </a-select>
      </FormDoubleItem>
      <FormDoubleItem :labels="['创造人', '日期']">
        <a-input
          slot="left"
          v-model="row.createMan"
          placeholder="请输入内容"
        ></a-input>
        <a-date-picker
          v-if="!!row.edit"
          :value="row.createTime"
          slot="right"
          @change="onChange"
        />
        <a-date-picker v-else slot="right" @change="onChange" />
      </FormDoubleItem>
    </Form>
  </Model>
</template>

<script>
import Model from "components/common/model/Model";
import Form from "components/common/form/Form";
import FormItem from "components/common/form/formItem/FormItem";
import FormDoubleItem from "components/common/form/formDoubleItem/FormDoubleItem";
import { producerType } from "assets/data/other";
export default {
  components: {
    Model,
    Form,
    FormItem,
    FormDoubleItem,
  },
  props: {
    row: {
      type: Object,
      default() {
        return {};
      },
    },
    show: {
      type: Boolean,
      defalut: false,
    },
  },
  data() {
    return {
      producerType,
    };
  },
  methods: {
    confirm() {
      const row = this.row;
      console.log(row);
      this.$emit("confirm", {
        ...row,
        producerType: producerType.indexOf(row.producerType),
      });
    },
    cancel() {
      this.$emit("cancel");
    },
    onChange(date, dateStirng) {
      this.row.createTime = new Date(dateStirng);
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
.t-form {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding-right: 30px;
  .ant-btn {
    width: 145.5px !important;
  }
}
</style>