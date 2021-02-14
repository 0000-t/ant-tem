<template>
  <a-layout-sider width="200" style="background: #fff">
    <!-- <a-menu
      mode="inline"
      :defaultOpenKeys="['1']"
      :selected-keys="defaultKeys"
      :style="{ height: '100%', borderRight: 0 }"
      @click="clickMenuItem"
    >
      <a-menu-item v-for="(item, i) in nav" :key="i"> {{ item }} </a-menu-item>
    </a-menu> -->
    <a-menu
      mode="inline"
      :defaultOpenKeys="openKeys"
      :selected-keys="defaultKeys"
      :style="{ height: '100%', borderRight: 0 }"
      @click="clickMenuItem"
    >
      <a-sub-menu v-for="f in subMenu" :key="f.id">
        <span slot="title"
          ><a-icon :type="f.icon || 'appstore'" /><span>{{
            f.name
          }}</span></span
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
  </a-layout-sider>
</template>

<script>
import { routeSet, nav } from "assets/data/nav";
export default {
  data() {
    return {
      subMenu: [
        {
          id: "chart",
          name: "统计报表",
          data: [],
          icon: "deployment-unit",
        },
        {
          id: "sell",
          name: "销售管理",
          data: [],
          icon: "gift",
        },
        {
          id: "basis",
          name: "基础数据",
          data: [],
          icon: "pull-request",
        },
        {
          id: "user",
          name: "系统权限",
          data: [],
          icon: "setting",
        },
        {
          id: "purchase",
          name: "采购管理",
          data: [],
          icon: "gold",
        },
      ],
      menu: [],
    };
  },
  created() {
    this.createNavList();
    // this.changePath(this.defaultPath());
  },
  watch: {
    $route(to, from) {
      if (to.path === "/login") {
        this.subMenu.forEach((item) => {
          item.data = [];
        });
      }
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
      // console.log(this.subMenu, this.menu);
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
  },
  computed: {
    openKeys() {
      let nowPath = this.$route.path;
      let key = this.subMenu.find((item) => {
        if (item.data.findIndex((nope) => nope.path === nowPath) >= 0) {
          return true;
        }
      });
      // return [key ? key.id : ""];
      return ["commodity"];
    },

    defaultKeys() {
      return [this.$route.path];
    },
  },
};
</script>

<style>
</style>