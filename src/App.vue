<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import wx from "weixin-js-sdk";
export default {
  name: "app"
};
</script>

<style scoped lang='less'>
* {
  font-family: "Microsoft YaHei";
}
html,
body {
  color: #787878;
  background: #f5f5f5;
  font-family: "Open Sans" !important;
  min-width: 1600px;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.typeList .el-badge__content.is-fixed {
  position: absolute;
  top: 7px !important;
  right: 10px;
}
</style>
