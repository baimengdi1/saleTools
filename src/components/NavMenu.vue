<template>
  <div class="navMenu">
    <template v-for="navMenu in navMenus">
      <!-- 最后一级菜单 -->
      <el-menu-item
        v-if="!navMenu.childs&&navMenu.entity"
        :key="navMenu.entity.id"
        :data="navMenu"
        :index="String(navMenu.entity.id)"
      >
        <i style="margin-left:20px;"></i>
        <span slot="title">{{navMenu.entity.alias}}</span>
      </el-menu-item>

      <!-- 此菜单下还有子菜单 -->
      <el-submenu
        v-if="navMenu.childs&&navMenu.entity"
        :key="navMenu.entity.id"
        :data="navMenu"
        :index="String(navMenu.entity.id)"
      >
        <template slot="title">
          <i
            v-if="navMenu.entity.icon"
            style="color: #00a83c !important;"
            :class="navMenu.entity.icon"
          ></i>
          <i v-else style="margin-left:20px;"></i>
          <span>{{navMenu.entity.alias}}</span>
        </template>
        <!-- 递归 -->
        <NavMenu :navMenus="navMenu.childs"></NavMenu>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: ["navMenus"],
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style>
.el-menu-item,
.el-submenu__title {
  padding-left: 12px !important;
}
.leftTabs {
  overflow: hidden;
}
.leftTabs i {
  font-weight: 600;
  font-size: 14px;
  color: #00a83c;
  vertical-align: middle;
}
</style>