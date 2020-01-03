<template>
  <div class="index">
    <siteHeader :active="manageKey"></siteHeader>
    <div class="content">
      <div class="leftTabs">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              class="el-menu-vertical-demo"
              :unique-opened="true"
              @open="handleOpen"
              @close="handleClose"
            >
              <NavMenu :navMenus="menuData"></NavMenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="centerContent">
        <div class="searchBox">
          <el-row>
            <el-col :span="2">
              <span class="keyWordTitle">资源分类：</span>
            </el-col>
            <el-col :span="6">
              <el-select v-model="classifyValue" placeholder="请选择分类">
                <el-option
                  v-for="item in classifyList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <span class="keyWordTitle">范围：</span>
            </el-col>
            <el-col :span="6">
              <el-date-picker
                class="datePicker"
                v-model="dataValue"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </el-col>
            <el-col :span="2">
              <span class="keyWordTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标题：</span>
            </el-col>
            <el-col :span="6">
              <el-input v-model="conditionList[0].value" :placeholder="conditionList[0].name" />
            </el-col>
            <el-col :span="2">
              <span class="keyWordTitle">作者：</span>
            </el-col>
            <el-col :span="6">
              <el-input v-model="conditionList[1].value" :placeholder="conditionList[1].name" />
            </el-col>
            <el-col :span="2">
              <span class="keyWordTitle">关键字：</span>
            </el-col>
            <el-col :span="6">
              <el-input v-model="conditionList[2].value" :placeholder="conditionList[2].name" />
            </el-col>
            <el-col :span="2">
              <span class="keyWordTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;概要：</span>
            </el-col>
            <el-col :span="6">
              <el-input v-model="conditionList[3].value" :placeholder="conditionList[3].name" />
            </el-col>
            <el-col :span="2">
              <span class="keyWordTitle">相关指标：</span>
            </el-col>
            <el-col :span="6">
              <el-input v-model="conditionList[4].value" :placeholder="conditionList[4].name" />
            </el-col>
            <el-col :span="2">
              <span class="keyWordTitle">应用科室：</span>
            </el-col>
            <el-col :span="6">
              <el-input v-model="conditionList[5].value" :placeholder="conditionList[5].name" />
            </el-col>
            <el-col :span="3">
              <el-button
                class="searchBtn"
                @click="searchBtn"
                type="primary"
                icon="el-icon-search"
              >{{$t('language.search')}}</el-button>
            </el-col>
          </el-row>
        </div>
        <div class="newResources">
          <el-row type="flex" class="row-bg">
            <el-col :span="7">
              <div class="resourceTitle">
                热门下载
                <span class="resourceSign">HOT</span>
              </div>
            </el-col>
            <el-col :span="2"></el-col>

            <el-col :span="7">
              <div class="resourceTitle" style="margin-left: -9px;">
                热门搜索
                <span class="resourceSign">HOT</span>
              </div>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="7">
              <div class="resourceTitle" style="margin-left: -15px;">
                最新资源
                <span class="resourceSign">NEW</span>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg">
            <el-col :span="7">
              <div class="resourceItem" v-for="item in 10" :key="item" @click="toResourceDetails()">
                <span class="dotMark">•</span>
                热门下载热门下载热门下载热门下载热门下载热门下载热门下载热门下载热门下载
              </div>
            </el-col>
            <el-col :span="2"></el-col>

            <el-col :span="7">
              <div class="resourceItem">
                <span class="dotMark">•</span>
                热门搜索热门搜索热门搜索热门搜索热门搜索热门搜索热门搜索热门搜索热门搜索热门搜索热门搜索
              </div>
            </el-col>
            <el-col :span="2"></el-col>

            <el-col :span="7">
              <div class="resourceItem">
                <span class="dotMark">•</span>
                最新资源
                最新资源
                最新资源
                最新资源
                最新资源
                最新资源
                最新资源
                最新资源
                最新资源
                最新资源
                最新资源
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <siteFooter></siteFooter>
    </div>
  </div>
</template>
<script>
import siteHeader from "@/components/siteHeader.vue";
import siteFooter from "@/components/siteFooter.vue";
import NavMenu from "@/components/NavMenu.vue";
import Vue from "vue";
export default {
  name: "index",
  data() {
    return {
      activeName: 0,
      manageKey: "dfas", //是否管理权限
      uniqueopened: true, //是否只保持一个子菜单的展开
      isCollapse: false,
      searchText: "", //搜索关键字
      dataValue: "", //范围
      classifyList: [], //分类列表
      classifyValue: "", //选择分类
      conditionValue: [], //所选条件
      conditionList: [
        {
          name: "标题",
          value: ""
        },
        {
          name: "作者",
          value: ""
        },
        {
          name: "关键字",
          value: ""
        },
        {
          name: "概要",
          value: ""
        },
        {
          name: "相关指标",
          value: ""
        },
        {
          name: "应用科室",
          value: ""
        }
      ], //条件列表
      menuData: [
        {
          entity: {
            id: 1,
            name: "1classifyManage3",
            alias: "分类管理"
          },
          childs: [
            {
              entity: {
                id: 2,
                name: "2classifyManage4",
                alias: "角色管理"
              },
              childs: [
                {
                  entity: {
                    id: 3,
                    name: "3classifyManage3",
                    alias: "分应用管理"
                  },
                  //四级
                  childs: [
                    {
                      entity: {
                        id: 4,
                        name: "4classifyManage4",
                        alias: "其他管理"
                      },
                      childs: [
                        {
                          entity: {
                            id: 5,
                            name: "classifyManage3",
                            alias: "类别&管理管理"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  entity: {
                    id: 3222,
                    name: "3classifyManage3",
                    alias: "分应用2管理"
                  },
                  //四级
                  childs: [
                    {
                      entity: {
                        id: 4333,
                        name: "4classifyManage4",
                        alias: "其他2管理"
                      },
                      childs: [
                        {
                          entity: {
                            id: 34425,
                            name: "classifyManage3",
                            alias: "类别&管2理管理"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              entity: {
                id: 2243,
                name: "2classifyManage4",
                alias: "试剂管理"
              },
              childs: [
                {
                  entity: {
                    id: 223,
                    name: "3classifyManage3",
                    alias: "分应用管理"
                  },
                  //四级
                  childs: [
                    {
                      entity: {
                        id: 224,
                        name: "4classifyManage4",
                        alias: "其他管理"
                      },
                      childs: [
                        {
                          entity: {
                            id: 25,
                            name: "classifyManage3",
                            alias: "类别&管理管理"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          entity: {
            id: 11,
            name: "1classifyManage3",
            alias: "管控管理"
          },
          childs: [
            {
              entity: {
                id: 22,
                name: "2classifyManage4",
                alias: "图片管理"
              },
              childs: [
                {
                  entity: {
                    id: 33,
                    name: "3classifyManage3",
                    alias: "文字管理"
                  },
                  //四级
                  childs: [
                    {
                      entity: {
                        id: 44,
                        name: "4classifyManage4",
                        alias: "设置管理"
                      },
                      childs: [
                        {
                          entity: {
                            id: 55,
                            name: "classifyManage3",
                            alias: "意见管理"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              entity: {
                id: 222,
                name: "2classifyManage4",
                alias: "文章"
              },
              childs: [
                {
                  entity: {
                    id: 555,
                    name: "classifyManage3",
                    alias: "意见x管理"
                  }
                }
              ]
            }
          ]
        }
      ]
    };
  },
  mounted() {
    console.log(this.manageKey, "11");
    this.menuData.forEach(res => {
      Vue.set(res.entity, "icon", "el-icon-menu");
    });

    // this.$author.getClassification().then(res => {
    //   console.log(res);
    //   this.tabsList = res;
    //   this.activeName = res[0].projectClassificationCode; //res[0].classificationName
    //   var data = {
    //     projectClassificationCode: res[0].projectClassificationCode,
    //     projectName: "",
    //     pageNumber: 1,
    //     pageSize: 10
    //   };
    //   this.$author.proectLsit(data).then(res => {
    //     if (res.data == null) {
    //       this.loading = false;
    //     } else {
    //       this.contentList = res.data.list;
    //       this.loading = false;
    //     }
    //     // console.log(this.contentList)
    //   });
    // });
  },
  components: { siteHeader, siteFooter, NavMenu },
  methods: {
    // 搜索
    searchBtn() {
      let starteDateTime =
        this.dateFilter("yyyy-MM-dd", this.dataValue[0]) + " 00:00:00";
      let endDateTime =
        this.dateFilter("yyyy-MM-dd", this.dataValue[1]) + " 23:59:59";
      this.$router.push({
        path: "/search",
        query: {
          info: this.$Base64.encode(
            JSON.stringify({
              name: "",
              id: "",
              mobile: "",
              numId: ""
            })
          )
        }
      });
    },
    // 去资源详情
    toResourceDetails() {
      this.$router.push({
        path: "/resourceDetails",
        name: "resourceDetails",
        query: {
          name: "name"
        }
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 时间格式化
    dateFilter(fmt, date) {
      //author: meizz
      var time = new Date(date);
      var o = {
        "M+": time.getMonth() + 1, //月份
        "d+": time.getDate(), //日
        "h+": time.getHours(), //小时
        "m+": time.getMinutes(), //分
        "s+": time.getSeconds(), //秒
        "q+": Math.floor((time.getMonth() + 3) / 3), //季度
        S: time.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (time.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    }
  }
};
</script>
<style scoped lang="less">
@import "../../assets/css/elementResult.css"; /*引入公共样式*/
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
// 左侧菜单栏
.leftTabs {
  width: 199px;
  position: absolute;
  left: -200px;
  background: #fff;

  .elMenu {
    i {
      color: #00a83c;
    }
  }
  .el-radio-button__inner {
    padding: 0px;
  }
}
.el-select {
  width: 100%;
}

// 固定内容盒子
.content {
  position: relative;
  width: 1400px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
}
.keyWordTitle {
  line-height: 40px;
  font-size: 13px;
  padding-left: 32px;
}
// 首页中间内容
.centerContent {
  padding: 10px 60px 20px 60px;

  .datePicker {
    width: 100%;
  }
  // 搜索框
  .searchBox {
    .el-row > .el-col {
      margin-top: 17px;
      overflow: hidden;
    }
    .searchBtn {
      width: 60%;
      height: 40px;
      font-size: 14px;
      overflow: hidden;
      text-align: center;
      margin-left: 34%;
    }
  }
  // 最新资源
  .newResources {
    padding: 60px 0 5px 30px;
    overflow: hidden;
    // 标题
    .resourceTitle {
      color: #00a83c;
      font-weight: 600;
      letter-spacing: 2px;
      font-size: 14px;
      line-height: 29px;
      .resourceSign {
        position: relative;
        top: -10px;
        left: -8px;
        letter-spacing: normal;
        font-family: cursive;
        font-weight: 600;
        color: red;
        font-size: 12px;
      }
    }
    .resourceItem {
      color: #787878;
      font-size: 13px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 20px 0 0;
      line-height: 24px;
      letter-spacing: 1px;
    }
    .resourceItem:hover {
      cursor: pointer;
      color: #58bf80;
    }
    .dotMark {
      color: #00a83c;
      font-size: 12px;
      vertical-align: top;
    }
    .dotRedMark {
      color: red;
    }
  }
}

.el-tabs__header {
  margin: 0px !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 577px;
}
.input-with-select {
  width: 50%;
  .el-input-group__append {
    width: 50px;
  }
}
.el-input__inner {
  height: 40px;
  line-height: 40px;
}
.textAll {
  padding: 2%;
  width: 100%;
  height: 100%;
  .textAllChild {
    padding: 2%;
    width: 24.5%;
    display: inline-block;
    .childImg {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .divHr {
      margin: 10px 0;
      border-bottom: 1px solid #ddd;
    }
  }
}
.el-submenu__title {
  padding-left: 0px !important;
}
</style>
<style>
.is-opened .is-opened li {
  background-color: rgba(236, 251, 237, 0.5) !important;
}
</style>