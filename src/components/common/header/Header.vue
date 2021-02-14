<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-24 09:36:41
 * @LastEditors: tao
 * @LastEditTime: 2021-02-07 08:29:43
-->
<template>
  <a-layout-header class="header">
    <div class="logo" @click="handleClick">后台管理系统</div>
    <Author class="header_author"></Author>
    <!-- <Nav class="nav"></Nav> -->
    <!-- <a-menu
      theme="dark"
      mode="horizontal"
      :default-selected-keys="['2']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1"> nav 1 </a-menu-item>
      <a-menu-item key="2"> nav 2 </a-menu-item>
      <a-menu-item key="3"> nav 3 </a-menu-item>
    </a-menu> -->
  </a-layout-header>
</template>

<script>
import Author from "components/common/author/Author";
// import Nav from "components/common/leftNav/Nav";
export default {
  components: {
    Author,
    // Nav,
  },
  methods: {
    handleClick() {
      let power = this.$store.getters.getPower;
      if (power.indexOf("sellCount") < 0 || this.$route.path == "/sellCount")
        return;
      this.$router.replace({ path: `/sellCount` });
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  color: #fff;
  .logo {
    width: 120px;
    height: 31px;
    // background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    line-height: 31px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
  }

  .header_author {
    position: absolute;
    right: 24px;
  }
}
</style>