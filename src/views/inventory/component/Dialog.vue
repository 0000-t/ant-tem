<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-24 09:43:31
 * @LastEditors: tao
 * @LastEditTime: 2021-02-02 12:02:33
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
      <FormLenItem label="商品">
        <a-select
          show-search
          placeholder="请选择"
          style="width: 100%"
          v-model="row.productsId"
          :filter-option="filterOption"
        >
          <a-select-option
            v-for="item in products"
            :key="item.id"
            :value="item.id"
          >
            {{ item.name }}
          </a-select-option>
        </a-select>
      </FormLenItem>
      <FormDoubleItem :labels="['库存量', '预警量']">
        <a-input
          slot="left"
          v-model="row.balance"
          placeholder="请输入内容"
        ></a-input>
        <a-input
          slot="right"
          v-model="row.warnCount"
          placeholder="请输入内容"
        ></a-input>
      </FormDoubleItem>
      <FormDoubleItem :labels="['规格', '单位']">
        <a-input
          slot="left"
          v-model="row.specification"
          placeholder="请输入内容"
        ></a-input>
        <a-input
          slot="right"
          v-model="row.unit"
          placeholder="请输入内容"
        ></a-input>
      </FormDoubleItem>
      <FormDoubleItem :labels="['仓库号', '仓库类型']">
        <a-input
          slot="left"
          v-model="row.repositoryId"
          placeholder="请输入内容"
        ></a-input>
        <a-input
          slot="right"
          v-model="row.repositoryType"
          placeholder="请输入内容"
        ></a-input>
      </FormDoubleItem>
      <FormLenItem label="备注">
        <a-textarea
          v-model="row.notel"
          placeholder="Autosize height based on content lines"
          :auto-size="{ minRows: 2, maxRows: 4 }"
        />
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
import { getAll } from "network/productInfo";
export default {
  components: {
    Model,
    Form,
    FormItem,
    FormDoubleItem,
    FormLenItem,
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
      products: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const result = await getAll();
      console.log(result);
      this.products = result.data;
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
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