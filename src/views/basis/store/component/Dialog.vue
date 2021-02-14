<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-24 09:43:31
 * @LastEditors: tao
 * @LastEditTime: 2021-01-24 14:35:17
-->
<template>
  <Model
    :title="title"
    :width="400"
    :show="show"
    @confirm="confirm"
    @cancel="cancel"
  >
    <Form slot="form">
      <FormItem label="店名">
        <a-input v-model="row.name" placeholder="请输入内容"></a-input>
      </FormItem>
      <FormItem label="店主">
        <a-input v-model="row.boss" placeholder="请输入内容"></a-input>
      </FormItem>
      <FormItem label="地址">
        <a-input v-model="row.addr" placeholder="请输入内容"></a-input>
      </FormItem>
      <FormItem label="电话">
        <a-input v-model="row.phone" placeholder="请输入内容"></a-input>
      </FormItem>
      <FormItem label="备注">
        <a-input v-model="row.context" placeholder="请输入内容"></a-input>
      </FormItem>
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
  computed: {
    title() {
      const row = this.row;
      if (row.edit) return "编辑";
      if (row.search) return "查询";
      return "添加";
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