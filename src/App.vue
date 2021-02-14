<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-08 14:29:30
 * @LastEditors: tao
 * @LastEditTime: 2021-02-07 08:27:14
-->
<template>
  <a-config-provider id="app" :locale="zh_CN">
    <Home v-if="isLogin"> </Home>
    <Login v-show="!isLogin" @power="getPower"> </Login>
  </a-config-provider>
</template>

<script>
import Home from "views/home/Home.vue";
import Login from "views/login/Login";
import { routeSet, power } from "assets/data/nav.js";
//组件中国化
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";

export default {
  name: "app",
  components: {
    Home,
    Login,
  },
  data() {
    return {
      zh_CN,
      isLogin: true,
    };
  },
  created() {
    this.storage();
    if (this.$route.path != "/") {
      this.legalPath(this.$route);
    }
  },
  watch: {
    $route(to, from) {
      this.legalPath(to);
    },
  },
  methods: {
    //获取路由权限表
    getPower(data = power) {
      // console.log(data);
      //存储权限表
      this.$store.commit("setPower", { power: data });
      this.createRouterList(data);
    },

    //生成路由表
    createRouterList(power) {
      let routeList = power.map((item) => {
        let r = { ...routeSet[item] };
        r.path = `/${item}`;
        return r;
      });
      //存储路由表
      this.$store.commit("setRouteList", { routeList });
    },

    legalPath(to) {
      //获取目标页面地址
      let include = this.$router.options.routes.filter(
        (item) => item.path == to.path && to.path != "/login"
      );

      //判断是否有权限
      this.isLogin = !!include.length;
      if (!this.isLogin && to.path != "/login") {
        this.$router.replace({ path: "/login" });
      }
    },

    storage() {
      // 在页面刷新时将vuex里的信息保存到sessionStorage里
      // beforeunload事件在页面刷新时先触发
      window.addEventListener("beforeunload", () => {
        window.sessionStorage.setItem(
          "store",
          JSON.stringify(this.$store.state)
        );
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("assets/css/normalize.css");
#app {
  width: 100%;
  height: 100%;
}
</style>
