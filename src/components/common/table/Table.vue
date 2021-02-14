<template>
  <div class="table">
    <a-table
      class="aTable"
      :columns="columns"
      :rowKey="rowKey"
      :data-source="tableData"
      :pagination="false"
      :scroll="{ x: true }"
      bordered
    >
      <template
        v-for="col in [title.map((item) => item.dataIndex)]"
        :slot="col"
        slot-scope="text"
      >
        <div :key="col">
          {{ text }}
        </div>
      </template>
      <template
        v-if="showEdit || showDel || !!otherTxt"
        slot="operation"
        slot-scope="text, record"
      >
        <div class="editable-row-operations">
          <a v-if="showEdit" @click="() => edit(record)">{{ editTxt }}</a>
          <a v-if="!!otherTxt" @click="() => other(record)">{{ otherTxt }}</a>
          <a v-if="showDel" class="delete" @click="() => del(record)">{{
            delTxt
          }}</a>
        </div>
      </template>
    </a-table>
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
      default: 165,
    },
  },
  data() {
    this.cacheData = this.tableData.map((item) => ({ ...item }));
    return {
      editingKey: "",
    };
  },
  methods: {
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
    columns() {
      let { showEdit, showDel, otherTxt } = this;
      if (!showEdit && !showDel && !otherTxt) return this.title;

      this.title.push({
        title: "操作",
        dataIndex: "operation",
        width: this.operationWidth,
        scopedSlots: { customRender: "operation" },
      });
      return this.title;
    },
  },
};
</script>
<style lang="less" scoped>
.table {
  height: 100%;
  position: relative;
  text-align: center;
  .aTable {
    margin-bottom: 51px;
    .editable-row-operations {
      text-align: center;
      a {
        margin-right: 8px;
      }

      .delete {
        color: rgb(245, 34, 45);
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
.ant-table td {
  white-space: nowrap;
}
</style>
