<!--
 * @Description: 
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-29 22:50:33
 * @LastEditors: tao
 * @LastEditTime: 2021-02-02 12:10:14
-->
<template>
  <div class="section">
    <div class="header">
      <div class="cell">商品号</div>
      <div class="cell">单价</div>
      <div class="cell">数量</div>
      <div class="cell">总价</div>
      <div class="cell">备注</div>
      <span v-if="num > 1" class="del">删除</span>
    </div>
    <div class="body">
      <div class="body_item" v-for="(item, i) in detail" :key="i">
        <div class="cell">
          <!-- <a-input v-model="item.producerId" placeholder="请输入商品号" /> -->
          <a-select
            show-search
            placeholder="请选择"
            style="width: 100%"
            :filter-option="filterOption"
            @change="(value) => handleChange(i, value)"
          >
            <a-select-option
              v-for="item in products"
              :key="item.id"
              :value="item.id"
            >
              {{ item.name }}
            </a-select-option>
          </a-select>
        </div>
        <div class="cell">
          <a-input
            v-model="item.singlePrice"
            type="number"
            :min="0"
            placeholder="请输入单价"
            @change="() => onChange(i)"
          />
        </div>
        <div class="cell">
          <a-input
            v-model="item.count"
            type="number"
            :min="0"
            placeholder="请输入数量"
            @change="() => onChange(i)"
          />
        </div>
        <div class="cell">
          <a-input
            :value="item.singlePrice * item.count"
            type="number"
            :disabled="true"
            placeholder="请输入总价"
          />
        </div>
        <div class="cell">
          <a-input v-model="item.context" placeholder="请输入备注" />
        </div>
        <span v-if="num > 1" class="del" @click="() => delDetailItem(i)">
          <a-icon type="delete" style="color: rgb(245, 34, 97)" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getAll } from "network/productInfo";
export default {
  props: {
    num: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      detail: [
        {
          producerId: "",
          singlePrice: 0,
          count: 0,
          context: "",
          sumPrice: 0,
        },
      ],
      products: [],
    };
  },
  watch: {
    num: function (val, oldValue) {
      console.log(val);
      if (val > oldValue) {
        this.detail.push({
          producerId: "",
          singlePrice: 0,
          count: 0,
          context: "",
          sumPrice: 0,
        });
      }
    },
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const result = await getAll();
      if (!result.flag) return;
      // console.log(result);
      this.products = result.data;
    },
    handleChange(i, value) {
      this.detail[i].producerId = value;
    },
    onChange(i) {
      if (i >= 0) {
        let detail = this.detail[i];
        detail.sumPrice = detail.singlePrice * detail.count;
      }

      let price = this.detail
        .map((item) => item.sumPrice)
        .reduce((pre, current) => pre + current);

      this.$emit("changePrice", price);
    },
    getDetail() {
      return this.detail.map((item) => {
        item.sumPrice = singlePrice * count;
        item.count = +item.count;
        item.singlePrice = +item.singlePrice;
        return item;
      });
    },
    delDetailItem(i) {
      this.detail.splice(i, 1);
      this.$emit("delDetailItem");
      this.onChange();
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
  },
};
</script>

<style lang="less" scoped>
.section {
  margin-top: 30px;
  width: 100%;
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    background: rgb(250, 250, 250);
    div {
      flex: 1;
      text-align: center;
      padding: 10px 0;
      font-weight: bold;
    }
    .del {
      padding: 10px 0;
      color: rgb(250, 250, 250);
      border: 1px solid #f2f2f2;
      width: 42px;
      height: 34px;
      line-height: 34px;
    }
  }
  .body {
    width: 100%;
    .body_item {
      width: 100%;
      display: flex;
      align-items: center;
      div {
        flex: 1;
        .ant-input {
          border: none;
          text-align: center;
        }
      }
      .del {
        display: inline-block;
        width: 42px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        border: 1px solid #f2f2f2;
        cursor: pointer;
      }
    }
  }
  .cell {
    border: 1px solid #f2f2f2;
  }
}
</style>