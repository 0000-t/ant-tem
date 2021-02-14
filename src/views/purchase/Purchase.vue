<!--
 * @Description: 页面模板
 * @Version: 1.0
 * @Autor: tao
 * @Date: 2021-01-15 16:19:27
 * @LastEditors: tao
 * @LastEditTime: 2021-02-02 15:44:09
-->

<template>
  <div class="Purchase">
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
import { appendData, appendDetail } from "network/purchase";

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
      let detail = this.$refs["detail"].detail;
      let hide = this.$message.loading("保存中");
      const result = await appendData(
        {
          purchase: data,
          purchaseDetail: detail.map((item) => {
            item.sumPrice = +item.sumPrice;
            item.count = +item.count;
            item.singlePrice = +item.singlePrice;
            return item;
          }),
        },
        hide
      );
      hide && hide();
      console.log(result);
      if (!result[result.length - 1].data.flag)
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
.Purchase {
  height: 100%;
  display: flex;
  flex-direction: column;
  .PurchaseTable {
    flex: 1;
  }
}
</style>
