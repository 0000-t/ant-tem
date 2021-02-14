<!--
 * @Description: 页面模板
 * @Version: 1.0
 * @Autor: tao
 * @Date: 2021-01-15 16:19:27
 * @LastEditors: tao
 * @LastEditTime: 2021-02-02 11:29:39
-->

<template>
  <div class="Gift">
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
        @edit="edit"
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
  </div>
</template>

<script>
import Table from "components/common/table/Table";
import Management from "components/common/management/Management";
import Top from "./component/Top";
import Dialog from "./component/Dialog";
import {
  getDataByPageAndSize,
  appendData,
  deleteById,
  editData,
  searchById,
  search,
} from "network/gift";
import { productType, productFlag } from "assets/data/other";

export default {
  components: {
    Table,
    Top,
    Management,
    Dialog,
  },
  data() {
    const columns = [
      {
        title: "id",
        dataIndex: "id",
      },
      {
        title: "赠品名",
        dataIndex: "name",
      },
      {
        title: "类别",
        dataIndex: "categoryId",
      },
      {
        title: "价格",
        dataIndex: "price",
      },
      {
        title: "是否上架",
        dataIndex: "flag",
      },
      {
        title: "创造人",
        dataIndex: "createMan",
      },
      {
        title: "创造时间",
        dataIndex: "createDate",
        width: 180,
      },
    ];
    return {
      tableData: [],
      columns,
      total: 0,
      row: {},
      isShow: false,
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
        this.tableData = result.data.rows.map((item) => {
          item.categoryId = productType[item.categoryId];
          item.flag = productFlag[item.flag];
          return item;
        });
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
          this.tableData = result.data.rows.map((item) => {
            item.categoryId = productType[item.categoryId];
            item.flag = productFlag[item.flag];
            return item;
          });
          return;
        }
        this.init();
      }
    },

    confirmAjax(data) {
      if (data.edit) return editData(data);
      if (data.search) return search(data);
      return appendData(data);
    },

    onSearch() {
      this.isShow = true;
      this.row = { search: true };
    },

    changePage(page) {
      this.init(page);
    },

    async onSearchById(value) {
      console.log(value);
      const result = await searchById(value);
      if (result.flag) {
        console.log(result);
        this.tableData = [result.data].map((item) => {
          item.categoryId = productType[item.categoryId];
          item.flag = productFlag[item.flag];
          return item;
        });
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
    },
  },
};
</script>

<style lang="less" scoped>
.Gift {
  height: 100%;
  display: flex;
  flex-direction: column;
  .GiftTable {
    flex: 1;
  }
}
</style>
