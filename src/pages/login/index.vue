
<template>
  <div id="loginContainer" @keyup.enter="login()">
    <div class="content">
      <div class="logoBox">
        <h1>
          <div class>
            <div class="logoTitle">欧蒙亚太集团</div>
            <div class="logoTitleEn">EUROIMMUN Asia Pacific Group</div>
          </div>
        </h1>
      </div>
      <el-input v-model="userName" placeholder="请输入账户"></el-input>
      <el-input type="password" v-model="userPassword" placeholder="请输入密码"></el-input>
      <el-button type="success" @click="login()">Login</el-button>
    </div>
  </div>
</template>
<script>
import siteHeader from "@/components/siteHeader.vue";
export default {
  data() {
    return {
      userName: "",
      userPassword: ""
    };
  },
  mounted() {
    let token = window.localStorage.getItem("token");
    console.log(token);
    if (token) {
      this.$router.push({
        path: "/index"
      });
    }
  },
  components: { siteHeader },
  methods: {
    login() {
      let data = { username: this.userName, password: this.userPassword };
      this.$author.loginOk(data).then(res => {
        if (res.code != 0) {
          this.$message({
            message: res.msg
          });
          let errorStatus = 0;
          if (res.msg == "账号已锁定") {
            errorStatus = 1;
          }
          let errorData = {
            id: window.localStorage.getItem("token"),
            operation: 0, //用户操作
            status: errorStatus, //登录状态
            creatorName: this.userName,
            createDate: new Date()
          };
          this.$author.loginError(errorData).then(res => {});
        } else {
          window.localStorage.setItem("token", res.data.token);
          // 用户登录日志
          let logLoginData = {
            id: window.localStorage.getItem("token"),
            operation: 0, //用户操作
            status: 1, //登录状态
            creatorName: this.userName,
            createDate: new Date()
          };
          this.$author.logLogin(logLoginData).then(res => {});
          this.$router.push({
            path: "/index"
          });
        }
      });
    }
  }
};
</script>
<style scoped lang="less">
* {
  box-sizing: border-box;
}
body {
  font-family: SimHei;
}
#loginContainer {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #d3f5d3 0%, #fff 100%);
  .logoTitle {
    font-size: 28px;
    color: #006400;
    margin-top: 5px;
    font-weight: normal;
    font-family: SimHei;
    text-align: right;
    padding-top: 6px;
    letter-spacing: 3px;
  }
  .logoTitleEn {
    font-size: 10px;
    text-align: right;
    color: #006400;
    font-family: SimHei;
    margin-top: 15px;
    font-weight: normal;
  }
  .content {
    width: 450px;
    height: 380px;
    position: absolute;
    top: -12%;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 2%;
    background: #fff;
    border-radius: 20% 10px 20% 10px;
    .logoBox {
      margin-bottom: 55px;
      h1 {
        // font-size: 20px;
        font-size: 1rem;
        // text-align: center
      }
    }
    .el-input {
      margin: 0 0 25px;
    }
    .el-button {
      width: 100%;
      background-color: #00af3c;
      font-size: 16px;
      font-weight: 600;
    }
    .el-input__inner {
      background: #fff !important;
    }
  }
}
</style>

