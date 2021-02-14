<template>
  <div class="t-form">
    <slot>
      <FormItem label="这是一个">
        <a-input placeholder="Basic usage" />
      </FormItem>
      <FormDoubleItem :labels="['这是一个', '这是一个']">
        <a-input slot="left" placeholder="Basic usage" />
        <a-input slot="right" placeholder="Basic usage" />
      </FormDoubleItem>
    </slot>
  </div>
</template>

<script>
import FormItem from "components/common/form/formItem/FormItem";
import FormDoubleItem from "components/common/form/formDoubleItem/FormDoubleItem";
export default {
  components: {
    FormItem,
    FormDoubleItem,
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
}
</style>