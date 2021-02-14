<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-24 09:33:54
 * @LastEditors: tao
 * @LastEditTime: 2021-01-29 22:48:13
-->
<template>
  <a-modal
    v-model="visible"
    :centered="true"
    :cancelText="cancelText"
    :okText="okText"
    :keyboard="false"
    :width="width"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <div slot="title" class="title">{{ title }}</div>
    <slot name="form"></slot>
  </a-modal>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "弹窗",
    },
    width: {
      type: Number,
      defalut: 520,
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    okText: {
      type: String,
      default: "确定",
    },
  },
  components: {},
  data() {
    return {
      visible: this.show,
    };
  },
  watch: {
    show(newVal, oldVal) {
      this.visible = newVal;
    },
  },
  methods: {
    handleOk(e) {
      this.$emit("confirm");
    },
    handleCancel() {
      this.$emit("cancel");
    },
  },
  computed: {},
};
</script>

<style lang="less" scoped>
.title {
  text-align: center;
  font-weight: bold;
}
</style>