<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-15 16:19:27
 * @LastEditors: tao
 * @LastEditTime: 2021-02-07 08:30:26
-->
<template>
  <div class="author">
    <a-dropdown>
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        {{ userInfo }} <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <!-- <a-menu-item key="0">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
            >信息</a
          >
        </a-menu-item>
        <a-menu-divider /> -->
        <a-menu-item key="3" @click="logout"> 退出 </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    logout() {
      this.$router.replace({ path: "/login" });
    },
  },
  computed: {
    userInfo() {
      let user = this.$store.getters.getUser;
      // console.log(this.$store);
      return user.username + "-" + user.phone;
    },
  },
};
</script>

<style lang="less" scoped>
.author {
}
</style>