<template>
  <div class="Store">
    <div class="title">店铺信息</div>
    <div class="body">
      <div class="double">
        <div>
          <span>老板：</span>
          <a-input v-model="store.boss" placeholder="请输入" />
        </div>
        <div>
          <span>店铺名：</span>
          <a-input v-model="store.name" placeholder="请输入" />
        </div>
      </div>
      <div class="double">
        <div>
          <span>电话：</span>
          <a-input v-model="store.phone" placeholder="请输入" />
        </div>
        <div>
          <span>地址：</span>
          <a-input v-model="store.addr" placeholder="请输入" />
        </div>
      </div>
      <div class="one">
        <div>描述</div>
        <!-- <a-textarea
          v-model="store.description"
          placeholder="请输入"
          allow-clear
        /> -->
        <Editor
          :catchData="catchData"
          :content="store.description"
          @editor="editorObj"
        ></Editor>
      </div>
      <div class="one">
        <div>备注</div>
        <!-- <a-textarea v-model="store.context" placeholder="请输入" allow-clear /> -->
        <Editor
          :catchData="catchContext"
          :content="store.context"
          @editor="editorObj2"
        ></Editor>
      </div>
    </div>

    <a-button class="btn" type="primary" @click="onSubmit">提交</a-button>
  </div>
</template>

<script>
import Tbody from "./component/Tbody";
import Editor from "components/common/editor/Editor";
import { getParameters, setParameters } from "network/store";
export default {
  components: {
    Tbody,
    Editor,
  },
  data() {
    return {
      store: {
        boss: "",
        name: "",
        phone: "",
        addr: "",
        description: "",
        context: "",
      },
      editor1: {},
      editor2: {},
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    editorObj(editor) {
      this.editor1 = editor;
    },
    editorObj2(editor) {
      this.editor2 = editor;
    },
    catchData(html) {
      this.store.description = html;
    },
    catchContext(html) {
      this.store.context = html;
    },
    async getInfo() {
      const result = await getParameters();
      if (!result.flag) return;
      this.store = result.data;
    },

    async onSubmit() {
      console.log(this.store);
      let result = await setParameters({
        ...this.store,
      });
      this.getInfo();
    },
  },
};
</script>

<style lang="less" scoped>
.Store {
  margin: 0px auto;
  text-align: center;
  .title {
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: bold;
  }

  .body {
    .double {
      display: flex;
      align-items: center;
      div {
        flex: 1;
        display: flex;
        margin: 20px 60px;
        span {
          display: inline-block;
          width: 80px;
          text-align: right;
        }
      }
    }
    .one {
      margin: 20px 60px 0 81px;
      div {
        text-align: left;
        margin-bottom: 10px;
      }
    }
  }
  .btn {
    margin-top: 30px;
  }
}
</style>