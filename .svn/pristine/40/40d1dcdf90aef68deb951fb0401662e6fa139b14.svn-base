
<template>
  <div class="resourseDetails">
    <siteHeader :active="manageKey"></siteHeader>
    <div class="content">
      <div class="searchContent">
        <div class="searchBox">
          <!-- <el-row>
            <el-col :span="2">
              <span style="line-height: 40px;">标题：</span>
            </el-col>
            <el-col :span="6">
              <el-input v-model="conditionList[0].value" :placeholder="conditionList[0].name" />
            </el-col>
            <el-col :span="2">
              <span style="line-height: 40px;">作者：</span>
            </el-col>
            <el-col :span="6">
              <el-input v-model="conditionList[1].value" :placeholder="conditionList[1].name" />
            </el-col>
            <el-col :span="2">
              <span style="line-height: 40px;">关键字：</span>
            </el-col>
            <el-col :span="6">
              <el-input v-model="conditionList[2].value" :placeholder="conditionList[2].name" />
            </el-col>
            <el-col :span="2">
              <span style="line-height: 40px;">概要：</span>
            </el-col>
            <el-col :span="6">
              <el-input v-model="conditionList[3].value" :placeholder="conditionList[3].name" />
            </el-col>
            <el-col :span="2">
              <span style="line-height: 40px;">相关指标：</span>
            </el-col>
            <el-col :span="6">
              <el-input v-model="conditionList[4].value" :placeholder="conditionList[4].name" />
            </el-col>
            <el-col :span="2">
              <span style="line-height: 40px;">应用科室：</span>
            </el-col>
            <el-col :span="6">
              <el-input v-model="conditionList[5].value" :placeholder="conditionList[5].name" />
            </el-col>
            <el-col :span="3">
              <el-button
                class="searchBtn"
                @click="searchBtn"
                type="primary"
                plain
                icon="el-icon-search"
              >{{$t('language.search')}}</el-button>
            </el-col>
          </el-row>-->
          <el-row>
            <el-col :span="2">
              <span style="line-height: 30px;
              ">分类：</span>
            </el-col>
            <el-col :span="22">
              <ul class="typeList">
                <li @click="typeClick(index)" v-for="(item,index) in 12" :key="index">
                  <div class="typeText">试剂各产品线-文献-期刊期刊期刊期刊</div>
                  <span class="badge">182</span>
                </li>
              </ul>
            </el-col>
          </el-row>
        </div>

        <div>
          <el-row>
            <el-col :span="24">
              <el-table :data="tableData" height="500" center="true">
                <el-table-column label="标题">
                  <template slot-scope="scope">
                    <span>{{scope.row.customerName}}</span>
                  </template>
                </el-table-column>

                <el-table-column label="资源分类">
                  <template slot-scope="scope">
                    <span>{{ scope.row.sampleName}}</span>
                  </template>
                </el-table-column>

                <el-table-column label="日期">
                  <template slot-scope="scope">
                    <span>{{ scope.row.date }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="作者">
                  <template slot-scope="scope">
                    <div>{{scope.row.checkAge }}</div>
                  </template>
                </el-table-column>
                <el-table-column label="概要介绍">
                  <template slot-scope="scope">
                    <el-tooltip effect="dark" :content="scope.row.barCode">
                      <div class="lineLimit">{{ scope.row.barCode }}</div>
                    </el-tooltip>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="150" center>
                  <template slot-scope="scope">
                    <el-row style="text-align:center;">
                      <el-col :span="13">
                        <el-button
                          class="w100"
                          plain
                          size="mini"
                          type="primary"
                          @click="downFile(scope.$index, scope.row)"
                        >下载</el-button>
                      </el-col>
                      <el-col :span="10" style="margin-left:2px;">
                        <el-button
                          class="w100"
                          plain
                          size="mini"
                          type="primary"
                          @click="viewFile(scope.$index, scope.row)"
                        >预览</el-button>
                      </el-col>
                    </el-row>
                  </template>
                </el-table-column>
              </el-table>
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
export default {
  data() {
    return {
      manageKey:'a',//是否为管理员
      tableData: [
        {
          customerName: "ddd",
          sampleName: "[试剂各产品线-文献-期刊]",
          date: "2019-08-23",
          download: "下载",
          checkAge: "[中华医学会风湿病学分会]",
          barCode:
            "中华医学会儿科学分会免疫学组、《中华儿科杂志》编辑委员会组织专家对国内外JDM的文献进行收集、分析和整理，制定JDM诊疗建议，为我国儿科临床规范化诊断和治疗JDM提供参考。本建议制订过程遵循了循证方法学指南撰写的基"
        }
      ],
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
      resultList: 13
    };
  },
  mounted() {
    this.$route.query.info = JSON.parse(
      this.$Base64.decode(this.$route.query.info)
    );
    console.log(this.$route);
  },
  components: { siteHeader, siteFooter },
  methods: {
    downLoadFile() {},
    // 分类点击
    typeClick() {},
    // 下载
    downFile() {},
    // 预览
    viewFile() {
      this.$router.push({
        path: "/resourceDetails"
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
body {
  font-family: "Open Sans";
  font-size: 13px;
  color: #787878;
}
// 左侧菜单栏
.leftTabs {
  width: 190px;
  position: fixed;
  left: 0;
  .elMenu {
    i {
      color: #00a83c;
    }
  }
  .el-radio-button__inner {
    padding: 0px;
  }
}
// 固定内容盒子
.content {
  width: 1400px;
  overflow: hidden;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  // 首页中间内容
  .searchContent {
    padding: 20px 40px 40px 40px;
    .el-col-2 {
      text-align: center;
    }
    .datePicker {
      width: 100%;
    }
    // 搜索框
    .searchBox {
      margin-bottom: 10px;
      .el-row > .el-col {
        margin-top: 10px;
      }
      .typeList {
        overflow: hidden;
        color: #428bca;
        text-decoration: none;
        text-align: left;
        li {
          cursor: pointer;
          width: 33.333%;
          height: 26px;
          line-height: 26px;
          padding: 0 10px 0 0;
          float: left;
          .typeText {
            max-width: 85%;
            font-size: 13px;
            margin-right: 4px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            float: left;
          }
          .badge {
            position: relative;
            right: 0px;
            text-shadow: none;
            background-color: #428bca;
            font-weight: 400;
            display: inline-block;
            min-width: 10px;
            padding: 0px 2px;
            font-size: 12px;
            height: 16px;
            color: #fff;
            line-height: 16px;
            vertical-align: baseline;
            white-space: nowrap;
            text-align: center;
            border-radius: 10px;
          }
        }
      }
      text-align: center;
      .searchBtn {
        width: 65%;
        height: 38px;
        font-size: 14px;
        overflow: hidden;
        text-align: center;
        margin-left: 66%;
      }
    }
    .lineLimit {
      height: 47px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .resultList {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #f5f5f5;
      li {
        padding-top: 10px;
        padding: 0 10px;
        margin-bottom: 30px;
        .resultTitle {
          font-size: 16px;
          color: #428bca;
          font-weight: 600;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          cursor: pointer;
        }
        .resultInfo {
          margin-top: 6px;
          font-size: 13px;
          .resultDate {
            color: #69aa46 !important;
            margin: 0 10px;
          }
          .resultType {
            color: #69aa46 !important;
          }
          .resultGroup {
            color: #69aa46 !important;
          }
        }
        .resultContent {
          font-size: 13px;
          margin-top: 6px;
          text-indent: 2px;
          line-height: 20px;
        }
        .resultOpera {
          color: #337ab7;
          text-decoration: none;
          font-size: 13px;
          margin-top: 4px;
          i {
            font-weight: 600;
          }
          span {
            cursor: pointer;
          }
        }
      }
    }
    // 最新资源
    .newResources {
      margin: auto;
      margin: 100px -20px 0 0;
      // 标题
      .resourceTitle {
        color: #00a83c;
        font-weight: 900;
        font-size: 15px;
        padding: 0 20px 10px 0;
        .resourceSign {
          position: relative;
          top: -10px;
          left: -4px;
          font-family: cursive;
          font-weight: bold;
          color: red;
          font-size: 13px;
        }
      }
      .resourceItem {
        color: #787878;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 20px 10px 0;
      }
      .resourceItem:hover {
        cursor: pointer;
        color: #58bf80;
      }
      .dotMark {
        margin-right: 1px;
        color: #00a83c;
        font-size: 12px;
      }
      .dotRedMark {
        color: red;
      }
    }
  }
}
</style>

