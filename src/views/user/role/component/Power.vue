<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-24 09:43:31
 * @LastEditors: tao
 * @LastEditTime: 2021-02-02 16:05:57
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
      <FormLenItem label="名称">
        <a-input v-model="row.name" placeholder="请输入内容"></a-input>
      </FormLenItem>
      <FormLenItem label="描述">
        <a-select
          mode="multiple"
          showArrow
          v-model="defaultPower"
          style="width: 100%"
          placeholder="请选择"
          @change="onChange"
        >
          <a-select-option v-for="item in routeSet" :key="item.path">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </FormLenItem>
    </Form>
  </Model>
</template>

<script>
import Model from "components/common/model/Model";
import Form from "components/common/form/Form";
// import FormItem from "components/common/form/formItem/FormItem";
import FormLenItem from "components/common/form/formItem/FormLenItem";
// import FormDoubleItem from "components/common/form/formDoubleItem/FormDoubleItem";
import { getPowerById } from "network/role";
import { routeSet } from "assets/data/nav";
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
    return {
      routeSet,
      power: [],
      defaultPower: [],
    };
  },
  watch: {
    show: function (val, oldVal) {
      val && this.init(this.row.id);
    },
  },
  methods: {
    async init(id) {
      this.defaultPower = [];
      this.power = [];
      const result = await getPowerById(id);

      this.defaultPower = result.data.map((item) => item);
      this.power = this.defaultPower.slice();
    },

    onChange(value) {
      this.power = value;
    },

    confirm() {
      const row = this.row;
      console.log(row);
      this.$emit("confirm", {
        id: row.id,
        list: this.power,
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