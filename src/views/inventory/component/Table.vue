<template>
  <div class="table">
    <div class="section">
      <div class="header">
        <div v-for="item in header" :key="item" class="cell">{{ item }}</div>
        <div>库存量</div>
        <div>操作</div>
      </div>
      <div class="body">
        <div class="body_item" v-for="(item, i) in tableData" :key="i">
          <div
            class="cell"
            v-for="key in keys"
            :key="key"
            :style="{
              borderColor:
                item['balance'] <= item['warnCount'] ? '#f5222d' : '#f2f2f2',
              backgroundColor:
                item['balance'] <= item['warnCount'] ? '#f5222d' : '',
            }"
          >
            {{ item[key] }}
          </div>
          <div
            class="cell"
            :style="{
              borderColor:
                item['balance'] <= item['warnCount'] ? '#f5222d' : '#f2f2f2',
              backgroundColor:
                item['balance'] <= item['warnCount'] ? '#f5222d' : '',
            }"
          >
            {{ item["balance"] }}
          </div>
          <div class="operation">
            <span class="btn" @click="() => edit(item)">编辑</span>
            <span class="btn" @click="() => del(item)">删除</span>
          </div>
        </div>
      </div>
    </div>
    <a-pagination
      show-quick-jumper
      :default-current="current"
      :total="total"
      :defaultPageSize="pageSize"
      :hideOnSinglePage="onlyHide"
      show-less-items
      @change="changePage"
    />
  </div>
</template>
<script>
import { Modal } from "ant-design-vue";
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      defalut: 0,
    },
    onlyHide: {
      type: Boolean,
      default: true,
    },
    pageSize: {
      type: Number,
      defalut: 10,
    },
    rowKey: {
      type: String,
      default: "id",
    },
    title: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    editTxt: {
      type: String,
      default: "编辑",
    },
    delTxt: {
      type: String,
      default: "删除",
    },
    otherTxt: {
      type: String,
      default: "",
    },
    showEdit: {
      type: Boolean,
      default: true,
    },
    showDel: {
      type: Boolean,
      default: true,
    },
    operationWidth: {
      type: Number,
      default: 150,
    },
  },
  data() {
    this.cacheData = this.tableData.map((item) => ({ ...item }));
    return {
      editingKey: "",
    };
  },
  methods: {
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

    edit(key) {
      this.$emit("edit", key);
    },
    del(key) {
      const _this = this;
      Modal.confirm({
        title: "你确定删除吗",
        okText: "删除",
        okType: "danger",
        cancelText: "取消",
        onOk() {
          _this.$emit("del", key);
        },
      });
    },
    other(key) {
      this.$emit("other", key);
    },
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
  computed: {
    header() {
      return this.title
        .map((item) => item.title)
        .filter((item) => item != "余额" && item != "预警" && item != "备注");
    },
    keys() {
      return this.title
        .map((item) => item.dataIndex)
        .filter(
          (item) => item != "balance" && item != "warnCount" && item != "notel"
        );
    },
  },
};
</script>
<style lang="less" scoped>
.table {
  height: 100%;
  position: relative;
  text-align: center;
  .section {
    margin-bottom: 30px;
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
        border: 1px solid #f2f2f2;
        line-height: 34px;
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
        .cell {
          border: 1px solid #f2f2f2;
          line-height: 34px;
          height: 34px;
        }
        .operation {
          border: 1px solid #f2f2f2;
          line-height: 34px;
          height: 34px;
          span {
            cursor: pointer;
            margin: 0 5px;
            &:first-of-type {
              color: rgb(29, 165, 143);
            }
            &:last-of-type {
              color: #f5222d;
            }
          }
        }
      }
    }
  }
  .ant-pagination {
    width: 100%;
    position: absolute;
    bottom: 0px;
    text-align: center;
  }
}
</style>
