<template>
  <div id="navContaoner">
    <div class="homeBannerImg">
      <img src="../assets/images/banner.jpg" />
      <p class="languageToggle" @click="navTo(6)">{{$t('language.languageName')}}</p>
    </div>
          {{active}}1111111111111

    <div class="siteHeadBox">
      <div class="headLine">
        <div class="navTitle" @click="navTo(0)">{{$t('language.projectName')}}</div>
        <div class="navContent">
          <div class="loginOut" :class="navActive ==5 ?'pActive':''" @click="navTo(5)">
            <div class="userName">mengdi.bai</div>
            <div class="loginOutText">
              <i class="el-icon-switch-button"></i>
              <span>{{$t('language.Logout')}}</span>
            </div>
          </div>
          <el-tooltip class="item" effect="dark" content="意见建议" placement="bottom">
            <p @click="navTo(2)">
              <i class="el-icon-edit"></i>
            </p>
          </el-tooltip>
          <el-tooltip class="item" v-if="active" effect="dark" content="管理员" placement="bottom">
            <p @click="navTo(1)">
              <i class="el-icon-s-tools"></i>
            </p>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="主页" placement="bottom">
            <p @click="navTo(0)">
              <i class="el-icon-s-home"></i>
            </p>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['active'],
  data() {
    return {
      lang: "zh-CN", //语言模式
      navActive: 0,
      shoppingNnm: "",
      roleType: "", //默认为"",5为开发调试状态
      CroleType: "", //默认为"",5为开发调试状态
      GroleType: "", //默认为"",5为开发调试状态
      RroleType: "",
      downHide: 0, //报告下载暂时隐藏
      shiyanshi: "",
      noshiyanshi: ""
    };
  },
  mounted() {
    this.navActive = this.message;
    console.log(this.active)
    var data = { orderSource: this.AllorderFrom };
    // this.$author.getShoppingCart(data).then(res => {
    //   this.shoppingNnm = res.count;
    // });
    // this.$author.personalDataUI().then(res => {
    //   res.data.userList.map(item => {
    //     if (item.roletype == 1) {
    //       this.roleType = 1;
    //     }
    //     if (item.roletype == 2) {
    //       this.GroleType = 2;
    //     }
    //     if (item.roletype == 3) {
    //       this.CroleType = 3;
    //     }
    //     if (item.roletype == 4) {
    //       this.RroleType = 4;
    //     }
    //     if (item.customerSource == 13) {
    //       this.shiyanshi = 13;
    //       window.sessionStorage.setItem("shiyanshi", 13);
    //     } else {
    //       window.sessionStorage.setItem("noshiyanshi", 99);
    //     }
    //   });
    // });
  },
  methods: {
    navTo(n) {
      if (n == 0) {
        // 首页
        this.$router.push({
          path: "/"
        });
      } else if (n == 1) {
        // 资源上传
        this.$router.push({
          path: "/resourceUpload"
        });
      } else if (n == 2) {
        // 意见建议
        this.$router.push({
          path: "/suggestions"
        });
      } else if (n == 5) {
        // 退出登录
        let data = { token: window.localStorage.getItem("token") };
        this.$author.loginOut(data).then(res => {
          if (res.code != 0) {
            this.$router.push({
              path: "/"
            });
            window.localStorage.clear();
            window.sessionStorage.clear();
          } else {
            window.localStorage.clear();
            window.sessionStorage.clear();
            this.$router.push({
              path: "/"
            });
          }
        });
      } else if (n == 6) {
        // 中英文切换
        this.lang = this.$i18n.locale;
        if (this.lang === "zh-CN") {
          this.lang = "en-US";
          localStorage.setItem("lang", "en-US");
          this.$i18n.locale = this.lang;
          this.$router.go(0);
        } else {
          this.lang = "zh-CN";
          localStorage.setItem("lang", "zh-CN");
          this.$i18n.locale = this.lang;
          this.$router.go(0);
        }
      }
    }
  }
};
</script>
<style scoped lang="less">
#navContaoner {
  position: relative;
  width: 100%;
  z-index: 100;
  top: 0%;
  height: 162px;
  left: 0;
  overflow: hidden;
  color: #fff;
  box-shadow: 1px 1px 6px #cbdfd3;
  border-bottom: 1px solid #bcbcbc;
  min-width: 1400px;
  .homeBannerImg {
    width: 100%;
    min-width: 1400px;
    height: 100%;
    vertical-align: middle;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  // 语言切换
  .languageToggle {
    position: absolute;
    right: 20px;
    top: 20px;
    padding: 0 10px;
    width: 50px;
    cursor: pointer;
    text-align: center;
    font-weight: 600;
    color: #00a83c;
  }
  .logo {
    float: left;
    height: 48px;
    img {
      height: 100%;
    }
  }
  .siteHeadBox {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 168, 60, 0.8);
    width: 100%;
    height: 48px;
  }
  .headLine {
    width: 1400px;
    overflow: hidden;
    margin: 0 auto;
  }
  .navTitle {
    float: left;
    width: 30%;
    line-height: 100%;
    font-size: 22px;
    font-weight: bolder;
    line-height: 50px;
    letter-spacing: 2px;
    overflow: hidden;
    cursor: pointer;
  }
  .navContent {
    float: right;
    width: 50%;
    overflow: hidden;
    // 退出登录
    .loginOut {
      float: right;
      padding: 0 8px;
      height: 48px;
      border-right: 1px solid #fff;
      text-align: center;
      cursor: pointer;
      .userName {
        margin: 9px 0 6px;
        max-width: 97px;
        overflow: hidden;
      }
      span {
        display: inline-block;
        cursor: pointer;
        padding: 0 5px;
      }
      .loginOutText {
        i {
          margin-right: 0px;
          font-weight: 600;
        }
        span {
          display: inline-block;
          cursor: pointer;
          font-size: 10px;
          padding: 0px;
        }
      }
    }

    // 固定头部
    p {
      float: right;
      padding: 0 20px;
      line-height: 50px;
      cursor: pointer;
      background: black;
      color: #fff;
      border-right: 1px solid #fff;
      span {
        display: inline-block;
        cursor: pointer;
        padding: 0 5px;
      }
      i {
        font-size: 20px;
        cursor: pointer;
        line-height: 49px;
      }
    }
    // .loginOut:hover,
    // .languageToggle:hover,
    // p:hover {
    //   color: #00a83c;
    //   background: #fff;
    // }
    // .pActive {
    //   color: #00a83c;
    //   background: #fff;
    // }
  }
}
</style>
