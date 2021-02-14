<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-24 09:43:31
 * @LastEditors: tao
 * @LastEditTime: 2021-02-07 20:58:30
-->
<template>
  <Model
    title="添加"
    :width="400"
    :show="show"
    @confirm="confirm"
    @cancel="cancel"
  >
    <Form slot="form">
      <FormLenItem label="交易id">
        <a-input v-model="row.dealingId" disabled placeholder="请输入" />
      </FormLenItem>
      <FormLenItem label="商品id">
        <a-input v-model="row.productId" disabled placeholder="请输入" />
      </FormLenItem>
      <FormLenItem label="单价">
        <a-input v-model="row.singlePrice" placeholder="请输入" />
      </FormLenItem>
      <FormLenItem label="数量">
        <a-input v-model="row.count" placeholder="请输入" />
      </FormLenItem>
      <FormLenItem label="注意事项">
        <a-textarea v-model="row.note" placeholder="请输入" />
      </FormLenItem>
      <FormLenItem label="备注">
        <a-textarea v-model="row.context" placeholder="请输入" />
      </FormLenItem>
    </Form>
  </Model>
</template>

<script>
import Model from "components/common/model/Model";
import Form from "components/common/form/Form";
import FormItem from "components/common/form/formItem/FormItem";
import FormLenItem from "components/common/form/formItem/FormLenItem";
import FormDoubleItem from "components/common/form/formDoubleItem/FormDoubleItem";
import { producerType } from "assets/data/other";
export default {
  components: {
    Model,
    Form,
    // FormItem,
    FormLenItem,
    // FormDoubleItem,
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