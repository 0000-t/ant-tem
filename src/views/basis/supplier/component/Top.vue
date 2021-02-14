<!--
 * @Description: 页面顶部 表单集 组件
 * @Version: 1.0
 * @Autor: tao
 * @Date: 2021-01-15 16:19:27
 * @LastEditors: tao
 * @LastEditTime: 2021-02-07 11:12:42
-->
<template>
  <div class="top">
    <div class="top_item">
      <a-input-search placeholder="搜索" enter-button @search="onSearchById" />
    </div>
    <div class="top_item">
      <a-button type="primary" @click="showModel"> 添加 </a-button>
    </div>
    <!-- <div class="top_item">
      <a-button type="primary" @click="search"> 多条件查询 </a-button>
    </div> -->
    <div class="top_item">
      <a-button type="primary" @click="showAll"> 显示全部 </a-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    showModel() {
      this.$emit("showModel");
    },
    showAll() {
      this.$emit("showAll");
    },
    search() {
      this.searchValue = undefined;
      this.$emit("search");
    },
    onSearchById(value) {
      console.log(value);
      this.$emit("searchById", value);
    },
  },
};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  margin-bottom: 20px;
  .top_item {
    margin: 0 20px;
  }
}
</style>