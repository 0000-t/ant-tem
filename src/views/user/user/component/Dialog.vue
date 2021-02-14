<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-24 09:43:31
 * @LastEditors: tao
 * @LastEditTime: 2021-01-29 12:16:34
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
      <FormDoubleItem :labels="['用户名', '昵称']">
        <a-input
          slot="left"
          v-model="row.username"
          placeholder="请输入内容"
        ></a-input>
        <a-input
          slot="right"
          v-model="row.nickname"
          placeholder="请输入内容"
        ></a-input>
      </FormDoubleItem>
      <FormDoubleItem :labels="['性别', '密码']">
        <a-select
          slot="left"
          v-model="row.sex"
          placeholder="请输入选择"
          style="width: 100%"
        >
          <a-select-option value="男"> 男 </a-select-option>
          <a-select-option value="女"> 女 </a-select-option>
        </a-select>
        <a-input
          slot="right"
          v-model="row.password"
          placeholder="请输入内容"
        ></a-input>
      </FormDoubleItem>
      <FormDoubleItem :labels="['手机号', '创造人']">
        <a-input
          slot="left"
          v-model="row.phone"
          placeholder="请输入内容"
        ></a-input>
        <a-input
          slot="right"
          v-model="row.createMan"
          placeholder="请输入内容"
        ></a-input>
      </FormDoubleItem>
      <FormDoubleItem :labels="['创造时间']">
        <a-date-picker slot="left" placeholder="请输入" @change="onChange" />
      </FormDoubleItem>
    </Form>
  </Model>
</template>

<script>
import Model from "components/common/model/Model";
import Form from "components/common/form/Form";
import FormItem from "components/common/form/formItem/FormItem";
import FormDoubleItem from "components/common/form/formDoubleItem/FormDoubleItem";
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
    return {};
  },
  methods: {
    onChange(date, dateString) {
      this.row.createtime = dateString;
    },
    confirm() {
      const row = this.row;
      console.log(row);
      this.$emit("confirm", {
        ...row,
      });
    },
    cancel() {
      this.$emit("cancel");
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