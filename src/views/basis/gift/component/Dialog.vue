<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-24 09:43:31
 * @LastEditors: tao
 * @LastEditTime: 2021-02-02 11:36:51
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
      <FormDoubleItem :labels="['赠品名', '价格']">
        <a-input
          slot="left"
          v-model="row.name"
          placeholder="请输入内容"
        ></a-input>
        <a-input
          type="number"
          slot="right"
          v-model="row.price"
          placeholder="请输入内容"
        ></a-input>
      </FormDoubleItem>
      <FormDoubleItem :labels="['创造人', '产生时间']">
        <a-input
          slot="left"
          v-model="row.createMan"
          placeholder="请输入内容"
        ></a-input>
        <a-date-picker
          key="1"
          v-if="!!row.edit"
          :default-value="moment(row.createDate)"
          slot="right"
          placeholder="请选择"
          @change="onChange"
        />
        <a-date-picker
          key="2"
          v-else
          slot="right"
          placeholder="请选择"
          @change="onChange"
        />
      </FormDoubleItem>
      <FormDoubleItem :labels="['是否上架']">
        <!-- <a-select
          slot="left"
          v-model="row.categoryId"
          placeholder="请选择"
          style="width: 100%"
        >
          <a-select-option
            v-for="item in productType"
            :key="item"
            :value="item"
          >
            {{ item }}
          </a-select-option>
        </a-select> -->
        <a-select
          slot="left"
          v-model="row.flag"
          placeholder="请选择"
          style="width: 100%"
        >
          <a-select-option
            v-for="item in productFlag"
            :key="item"
            :value="item"
          >
            {{ item }}
          </a-select-option>
        </a-select>
      </FormDoubleItem>
    </Form>
  </Model>
</template>

<script>
import Model from "components/common/model/Model";
import Form from "components/common/form/Form";
import FormItem from "components/common/form/formItem/FormItem";
import FormDoubleItem from "components/common/form/formDoubleItem/FormDoubleItem";
import moment from "moment";
import { productType, productFlag } from "assets/data/other";
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
    return { productType, productFlag };
  },
  methods: {
    moment,
    onChange(date, dateString) {
      console.log(dateString);
      this.row.createDate = dateString;
    },
    confirm() {
      const row = this.row;
      console.log(row);
      this.$emit("confirm", {
        ...row,
        flag: productFlag.indexOf(row.flag),
        categoryId: 1,
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