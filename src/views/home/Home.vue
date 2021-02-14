<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-08 14:39:02
 * @LastEditors: tao
 * @LastEditTime: 2021-02-09 14:54:43
-->
<template>
  <div class="home">
    <Header class="header"></Header>
    <div class="section">
      <LeftNav class="leftNav"></LeftNav>
      <div class="main">
        <div class="main_content">
          <div class="aside">
            <router-view></router-view>
          </div>
          <div class="footer">@TNT</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "components/common/header/Header";
import LeftNav from "components/common/leftNav/LeftNav";
export default {
  components: {
    Header,
    LeftNav,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  min-height: 100%;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    position: fixed;
    z-index: 1;
  }

  .section {
    width: 100%;
    flex: 1;
    display: flex;
    .leftNav {
      position: fixed;
      top: 64px;
      height: 100%;
      z-index: 1;
    }

    .main {
      margin-left: 200px;
      margin-top: 64px;
      flex: 1;
      width: calc(100vw - 200px);
      padding: 0 24px;
      display: flex;
      flex-direction: column;
      background: #f2f2f2;
      .main_content {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        .aside {
          flex: 1;
          padding: 20px;
          background: #ffffff;
          // margin-bottom: 16px;
        }

        .footer {
          text-align: center;
          margin: 16px auto;
        }
      }
    }
  }
}
</style>