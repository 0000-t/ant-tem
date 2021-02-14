<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-24 09:43:31
 * @LastEditors: tao
 * @LastEditTime: 2021-02-06 15:47:20
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
        <a-input v-model="row.username" placeholder="请输入内容"></a-input>
      </FormLenItem>
      <FormLenItem label="描述">
        <a-select
          mode="multiple"
          showArrow
          v-model="defaultRole"
          style="width: 100%"
          placeholder="请选择"
          @change="onChange"
        >
          <a-select-option v-for="item in roles" :key="item.id">
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
import { getRolesById } from "network/user";
import { getAllRoles } from "network/role";
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
      roles: [],
      myRole: [],
      defaultRole: [],
    };
  },
  async created() {
    const result = await getAllRoles();
    console.log(result);
    if (result && !result.flag) return;
    this.roles = result.data;
  },
  // watch: {
  //   show: function (val, oldVal) {
  //     val && this.init(this.row.id);
  //   },
  // },
  methods: {
    // async init(id) {
    //   this.defaultRole = [];
    //   this.power = [];
    //   const result = await getRolesById(id);
    //   if (!result.flag) return;
    //   this.defaultRole = result.data.map((item) => item.id);
    //   this.myRole = this.defaultRole.slice();
    // },

    onChange(value) {
      this.myRole = value;
    },

    confirm() {
      const row = this.row;
      console.log(row);
      console.log(this.myRole);
      this.$emit("confirm", {
        userId: row.id,
        roleIds: this.myRole.slice(),
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