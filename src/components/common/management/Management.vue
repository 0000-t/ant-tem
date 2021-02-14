<template>
  <!-- 这是用来给带表格的页面做布局的组件 -->
  <div class="management">
    <slot name="top"></slot>
    <slot class="body" name="body"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.management {
  height: 100%;
  display: flex;
  flex-direction: column;
  .body {
    flex: 1;
  }
}
</style>