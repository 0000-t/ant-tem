<!--
 * @Description: 页面模板
 * @Version: 1.0
 * @Autor: tao
 * @Date: 2021-01-15 16:19:27
 * @LastEditors: tao
 * @LastEditTime: 2021-02-06 09:44:11
-->

<template>
  <div class="Sell">
    <Top slot="top" :sumPrice="sumPrice" @append="num++" @save="save"></Top>
    <TableInput
      slot="body"
      ref="detail"
      :num="num"
      @delDetailItem="num--"
      @changePrice="changePrice"
    ></TableInput>
  </div>
</template>

<script>
import Management from "components/common/management/Management";
import Top from "./component/Top";
import TableInput from "./component/TableInput";
import { appendData } from "network/sell";

export default {
  components: {
    Top,
    Management,
    TableInput,
  },
  data() {
    return {
      num: 1,
      sumPrice: 0,
    };
  },
  created() {},
  methods: {
    async save(data) {
      let detail = this.$refs["detail"].getDetail();
      console.log(detail);
      // return;
      let hide = this.$message.loading("保存中");
      const result = await appendData(
        {
          order: data,
          detail: detail.slice(),
        },
        hide
      );
      hide && hide();
      console.log(result);
      if (result && !result[result.length - 1].data.flag)
        return void this.$message.error("保存失败");
      this.$message.success("保存成功");
    },
    changePrice(value) {
      this.sumPrice = +value;
    },
  },
};
</script>

<style lang="less" scoped>
.Sell {
  height: 100%;
  display: flex;
  flex-direction: column;
  .SellTable {
    flex: 1;
  }
}
</style>
