<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-24 11:04:33
 * @LastEditors: tao
 * @LastEditTime: 2021-02-06 10:58:25
-->
<template>
  <div class="User">
    <Management>
      <Top slot="top"></Top>
      <div slot="body"></div>
    </Management>
  </div>
</template>

<script>
import Management from "components/common/management/Management";
import Top from "./component/Top";
export default {
  components: {
    Management,
    Top,
  },
};
</script>

<style>
</style>