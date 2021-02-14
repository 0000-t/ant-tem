<!--
 * @Description: 登录页面
 * @Version: 1.0
 * @Author: tao
 * @Date: 2021-01-15 20:53:42
 * @LastEditors: tao
 * @LastEditTime: 2021-02-14 16:34:46
-->
<template>
  <div class="container">
    <div class="login">
      <div class="title">后台管理系统</div>
      <div class="form">
        <a-input class="input" v-model.trim="userId" placeholder="账号">
          <a-icon slot="prefix" type="user" />
        </a-input>
        <a-input
          class="input"
          type="password"
          v-model.trim="password"
          placeholder="密码"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
        <a-button
          type="primary"
          html-type="submit"
          class="login-form-button"
          @click="login"
        >
          登录
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "components/common/form/Form";
import FormItem from "components/common/form/formItem/FormItem";
import { loginWeb } from "network/login";
export default {
  components: {
    Form,
    FormItem,
  },
  data() {
    return {
      userId: "",
      password: "",
    };
  },
  methods: {
    async login() {
      // if (!(this.userId && this.password)) {
      //   return void this.$message.warning("请输入账号密码", 1);
      // }

      // const result = await loginWeb({
      //   phone: this.userId,
      //   password: this.password,
      // });
      // console.log(result);
      // if (!result.flag) {
      //   this.$message.error("账号或密码错误", 1);
      //   return;
      // }
      // //储存账号信息
      // this.$store.commit("setUser", { user: result.data.user });
      // this.$emit("power", result.data.authoritys);
      this.$emit("power");
      this.$router.replace({ path: `/sellCount` });

      //跳转页面
      // let p = result.data.authoritys[0];
      // let flag = result.data.authoritys.indexOf("chart") >= 0;
      // this.$router.replace({ path: `/${flag ? "chart" : p}` });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  background: url("~assets/img/4.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .login {
    width: 400px;
    margin: auto;
    text-align: center;
    background: white;
    padding: 16px 0 30px;
    border-radius: 2px;

    .form {
      width: 80%;
      margin: 0 auto;

      .input {
        margin: 10px auto;
      }

      .login-form-button {
        margin-top: 20px;
        width: 100%;
      }
    }

    .title {
      margin-top: 25px;
      margin-bottom: 30px;
      text-align: center;
      font-size: 24px;
    }
  }
}
</style>