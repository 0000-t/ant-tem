<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-24 09:43:31
 * @LastEditors: tao
 * @LastEditTime: 2021-02-01 23:15:01
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
      <FormLenItem label="商品号">
        <a-select
          show-search
          v-model="row.tradeId"
          placeholder="请选择"
          style="width: 100%"
          :filter-option="filterOption"
        >
          <a-select-option v-for="item in trade" :key="item" :value="item">
            {{ item }}
          </a-select-option>
        </a-select>
      </FormLenItem>
      <FormLenItem label="状态">
        <a-select
          show-search
          v-model="row.reason"
          placeholder="请选择"
          style="width: 100%"
          :filter-option="filterOption"
        >
          <a-select-option
            v-for="item in changFormType"
            :key="item"
            :value="item"
          >
            {{ item }}
          </a-select-option>
        </a-select>
      </FormLenItem>
      <FormDoubleItem :labels="['创造人', '创造时间']">
        <a-input
          slot="left"
          v-model="row.createMan"
          placeholder="请输入内容"
        ></a-input>
        <a-date-picker
          key="1"
          v-if="!!row.edit"
          :default-value="moment(row.createTime)"
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
      <FormLenItem label="备注">
        <a-textarea
          v-model="row.note"
          :auto-size="{ minRows: 3, maxRows: 5 }"
          placeholder="请输入内容"
        ></a-textarea>
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
import { getAll } from "network/sell";
import moment from "moment";
import { changFormType } from "assets/data/other";
export default {
  components: {
    Model,
    Form,
    FormItem,
    FormLenItem,
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
      trade: [],
      changFormType,
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const result = await getAll();
      console.log(result);
      this.trade = result.data.map((item) => item.id);
    },
    moment,
    onChange(date, dateString) {
      this.row.createTime = new Date(dateString);
    },
    confirm() {
      const row = this.row;
      console.log(row);
      this.$emit("confirm", {
        ...row,
        reason: changFormType.indexOf(row.reason),
      });
      row.createTime = null;
    },
    cancel() {
      this.$emit("cancel");
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