<template>
  <a-menu
    mode="horizontal"
    v-model="current"
    :style="{
      height: '100%',
      borderRight: 0,
      paddingTop: '8px',
      background: '#001529',
      color: 'white',
      borderBottom: '1px',
    }"
    @click="clickMenuItem"
  >
    <a-sub-menu v-for="f in subMenu" :key="f.id">
      <span slot="title"
        ><a-icon type="appstore" /><span>{{ f.name }}</span></span
      >
      <a-menu-item v-for="s in f.data" :key="`/${s.path}`">
        {{ s.name }}
      </a-menu-item>
    </a-sub-menu>

    <a-menu-item v-for="i in menu" :key="`/${i.path}`">
      <a-icon type="mail" />
      {{ i.name }}
    </a-menu-item>
  </a-menu>
</template>

<script>
import { routeSet, nav } from "assets/data/nav";
export default {
  data() {
    return {
      subMenu: [
        // {
        //   id: "chart",
        //   name: "统计分析",
        //   data: [],
        //   icon: "",
        // },
        {
          id: "sell",
          name: "销售管理",
          data: [],
          icon: "",
        },
        {
          id: "basis",
          name: "基础数据",
          data: [],
          icon: "",
        },
        {
          id: "user",
          name: "系统权限",
          data: [],
          icon: "",
        },
      ],
      menu: [],
      current: [],
    };
  },
  created() {
    this.createNavList();
    this.currentPath();
  },
  watch: {
    $route(to, from) {
      if (to.path === "/login") {
        this.subMenu.forEach((item) => {
          item.data = [];
        });
      }
      this.currentPath();
    },
  },
  methods: {
    //生成导航列表
    createNavList() {
      //获取权限表
      let power = this.$store.getters.getPower;
      power.forEach((item) => {
        if (nav.hasOwnProperty(item)) {
          this.subMenu[nav[item]].data.push(routeSet[item]);
        } else {
          if (item === "sellCount") return;
          this.menu.push(routeSet[item]);
        }
      });
    },

    //设置默认页面
    defaultPath() {
      if (!!this.subMenu.length) {
        return this.subMenu[0].data[0].path;
      }
      return this.menu[0].path;
    },

    clickMenuItem(res) {
      let path = this.$route.path;
      if (res.key !== path) {
        this.changePath(res.key);
      }
    },

    //跳转页面
    changePath(path) {
      this.$router.replace({ path });
    },

    currentPath() {
      this.current = [this.$route.path];
    },
  },
};
</script>

<style>
</style>