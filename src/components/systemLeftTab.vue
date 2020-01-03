<template>
  <div class="systemLeftTab">
    <el-col>
      <el-menu :default-active="active" class="el-menu-vertical-demo">
        <el-menu-item index="1" @click="goSystem(1)">
          <i class="el-icon-upload"></i>
          <span slot="title">资源上传</span>
        </el-menu-item>
        <el-menu-item index="2" @click="goSystem(2)">
          <i class="el-icon-bell"></i>
          <span slot="title">意见管理</span>
        </el-menu-item>
        <el-menu-item index="3" @click="goSystem(3)">
          <i class="el-icon-folder-opened"></i>
          <span slot="title">资源管理</span>
        </el-menu-item>
        <el-menu-item index="4" @click="goSystem(4)">
          <i class="el-icon-postcard"></i>
          <span slot="title">用户权限管理</span>
        </el-menu-item>
        <el-menu-item index="5" @click="goSystem(5)">
          <i class="el-icon-user"></i>
          <span slot="title">用户角色管理</span>
        </el-menu-item>
        <el-menu-item index="6" @click="goSystem(6)">
          <i class="el-icon-setting"></i>
          <span slot="title">日志管理</span>
        </el-menu-item>
        <el-menu-item index="7" @click="goSystem(7)">
          <i class="el-icon-document-copy"></i>
          <span slot="title">字典设置</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>
<script>
export default {
  props: ["active"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goSystem(index) {
      if (index == 1) {
        this.$router.push({
          path: "/resourceUpload"
        });
        return;
      }
      if (index == 2) {
        this.$router.push({
          path: "/opinionManage"
        });
        return;
      }
      if (index == 3) {
        this.$router.push({
          path: "/resourceManage"
        });
        return;
      }
      if (index == 4) {
        this.$router.push({
          path: "/userRightsManage"
        });
        return;
      }
      if (index == 5) {
        this.$router.push({
          path: "/roleManage"
        });
        return;
      }
      if (index == 6) {
        this.$router.push({
          path: "/logManage"
        });
        return;
      }
      if (index == 7) {
        this.$router.push({
          path: "/dictionaryManage"
        });
        return;
      }
    }
  }
};
</script>
<style scoped lang="less">
.systemLeftTab {
  // 左侧菜单栏
  width: 180px;
  .elMenu {
    i {
      color: #00a83c;
    }
  }
  .el-radio-button__inner {
    padding: 0px;
  }
  .el-menu {
    border-right: none;
  }
}
</style>
