<!--
 * @Description: 页面模板
 * @Version: 1.0
 * @Autor: tao
 * @Date: 2021-01-15 16:19:27
 * @LastEditors: tao
 * @LastEditTime: 2021-01-29 15:55:43
-->

<template>
  <div class="Role">
    <Management>
      <Top
        slot="top"
        @showModel="showModel"
        @showAll="showAll"
        @searchById="onSearchById"
        @search="onSearch"
      ></Top>
      <Table
        slot="body"
        :title="columns"
        :tableData="tableData"
        :total="total"
        :operationWidth="195"
        otherTxt="权限设置"
        @edit="edit"
        @other="other"
        @del="del"
        @changePage="changePage"
      ></Table>
    </Management>
    <Dialog
      :show="isShow"
      :row="row"
      @confirm="confirm"
      @cancel="cancel"
    ></Dialog>
    <Power
      :show="powerShow"
      :row="row"
      @confirm="powered"
      @cancel="cancel"
    ></Power>
  </div>
</template>

<script>
import Table from "components/common/table/Table";
import Management from "components/common/management/Management";
import Top from "./component/Top";
import Dialog from "./component/Dialog";
import Power from "./component/Power";
import {
  getDataByPageAndSize,
  appendData,
  deleteById,
  editData,
  searchById,
  search,
  setPowerById,
} from "network/role";

export default {
  components: {
    Table,
    Top,
    Management,
    Dialog,
    Power,
  },
  data() {
    const columns = [
      {
        title: "id",
        dataIndex: "id",
      },
      {
        title: "名称",
        dataIndex: "name",
      },
      {
        title: "描述",
        dataIndex: "description",
      },
    ];
    return {
      tableData: [],
      columns,
      total: 0,
      row: {},
      isShow: false,
      powerShow: false,
    };
  },
  created() {
    this.init();
  },
  methods: {
    /**
     * @description: 初始化页面
     * @param {Number} page
     * @param {Number} size
     * @author: tao
     */
    async init(page = 1, size = 10) {
      const result = await getDataByPageAndSize(page, size);
      if (result.flag) {
        this.tableData = result.data.rows;
        this.total = result.data.total;
      }
    },

    async del(e) {
      const result = await deleteById(e.id);
      if (result.flag) {
        this.init();
      }
    },

    /**
     * @description: 点击弹窗 确定 按钮
     * @param {Object} data
     * @author: tao
     */
    async confirm(data) {
      console.log(data);
      this.closeDialog();
      const result = await this.confirmAjax(data);
      console.log(result);
      if (result.flag) {
        if (data.search) {
          this.tableData = result.data;
          this.total = result.data.length;
          return;
        }
        this.init();
      }
    },

    async powered(data) {
      console.log(data);
      this.closeDialog();
      const result = await setPowerById(data);
      console.log(result);
    },

    confirmAjax(data) {
      if (data.edit) return editData(data);
      if (data.search) return search(data);
      return appendData(data);
    },

    other(e) {
      console.log(e);
      this.powerShow = true;
      this.row = { ...e };
    },

    onSearch() {
      this.isShow = true;
      this.row = { search: true };
    },

    changePage(page) {
      this.init(page);
    },

    async onSearchById(value) {
      const result = await searchById(value);
      if (result.flag) {
        this.tableData = [result.data];
        this.total = 1;
      }
    },

    showAll() {
      this.init();
    },

    showModel() {
      this.isShow = true;
      this.row = {};
    },

    edit(e) {
      this.isShow = true;
      console.log(e);
      this.row = { ...e, edit: true };
    },

    cancel() {
      this.closeDialog();
    },

    closeDialog() {
      this.isShow = false;
      this.powerShow = false;
    },
  },
};
</script>

<style lang="less" scoped>
.Role {
  height: 100%;
  display: flex;
  flex-direction: column;
  .RoleTable {
    flex: 1;
  }
}
</style>
