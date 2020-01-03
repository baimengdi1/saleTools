
<template>
  <div class="userRightsManage">
    <siteHeader :active="manageKey"></siteHeader>
    <div class="content">
      <systemLeftTab :active="systemLeftTabActive"></systemLeftTab>
      <div class="resourseBox">
        <div class="pageHead">
          <h1>
            <i class="el-icon-d-arrow-right"></i> 对用户权限的管理...
          </h1>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="员工编号"></el-table-column>
          <el-table-column prop="date" label="员工姓名"></el-table-column>
          <el-table-column prop="date" label="所属角色" width="500"></el-table-column>
          <el-table-column label="操作" width="150">
            <template>
              <el-row class="operation">
                <el-col>
                  <!-- 查看 -->
                  <el-button type="text" @click="addDialogToggle">授权</el-button>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页器 -->
        <div class="elPagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page.sync="currentPage"
            @current-change="nextClick"
            :total="AllPagingNumber"
          ></el-pagination>
        </div>
      </div>
      <siteFooter></siteFooter>
    </div>
    <!-- 弹窗聚集地 -->
    <el-dialog title="授权" :visible.sync="addDialog">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="员工编号:" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入员工编号"></el-input>
        </el-form-item>
        <el-form-item label="所属角色:" prop="desc">
          <el-select style="width:98%;" v-model="ruleForm.type" placeholder="请选择所属角色">
            <el-option
              v-for="item in ruleForm.typeList"
              :key="item.value"
              :label="item.value"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>--所属角色如果是manager显示--
        <!-- <el-form-item v-if="ruleForm.type=='manager'" label="权限" prop="name"> -->
        <el-form-item label="权限:" prop="name">
          <el-tree
            style="margin-top: 20px;"
            :data="data"
            show-checkbox
            default-expand-all
            node-key="id"
            @click="getCheckedKeys"
            ref="tree"
            highlight-current
            :props="defaultProps"
          ></el-tree>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false">取 消</el-button>
        <el-button type="primary" @click="addDialogBtn">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import systemLeftTab from "@/components/systemLeftTab.vue";
import siteHeader from "@/components/siteHeader.vue";
import siteFooter from "@/components/siteFooter.vue";
export default {
  data() {
    return {
      manageKey:'s',//是否有权限
      currentPage: 0,
      AllPagingNumber: 0,
      systemLeftTabActive: "4",
      addDialog: false,
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      ruleForm: {
        name: "",
        author: "",
        keyWords: "",
        resourceClassify: "",
        relevantKey: "",
        departments: "",
        desc: "",
        type: "",
        typeList: []
      },
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      rules: {
        name: [{ required: true, message: "请填写标题！", trigger: "blur" }],
        author: [{ required: true, message: "请填写作者！", trigger: "blur" }],
        keyWords: [
          { required: true, message: "请至少填写一个关键字！", trigger: "blur" }
        ],
        resourceClassify: [
          { required: true, message: "请选择资源分类！", trigger: "change" }
        ],
        relevantKey: [
          { required: true, message: "请填写相关指标！", trigger: "blur" }
        ],
        departments: [
          { required: true, message: "请填写应用科室！", trigger: "blur" }
        ],
        desc: [
          { required: true, message: "请填写概要介绍！", trigger: "blur" },
          { min: 20, message: "至少20个字符！", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {},
  components: { siteHeader, siteFooter, systemLeftTab },
  methods: {
    nextClick() {},
    addDialogToggle() {
      this.addDialog = !this.addDialog;
    },
    // 新增弹框
    addDialogBtn() {
      let formName = "ruleForm";
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.addDialog = false;
          console.log(this.ruleForm, "this.ruleForm");
          return;
        } else {
          return;
        }
      });
    },
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys());
    }
  }
};
</script>
<style scoped lang="less">
* {
  box-sizing: border-box;
}
body {
  font-family: "Open Sans";
  font-size: 13px;
  color: #393939;
  line-height: 1.5;
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
// 步骤条
.siteSteps {
  width: 95%;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  padding: 3px;
  line-height: 36px;
  margin-bottom: 10px;
  .steps {
    list-style: none;
    display: table;
    width: 100%;
    padding: 0;
    margin: 0;
    position: relative;
    li {
      display: table-cell;
      text-align: center;
      width: 1%;
      .step {
        border: 5px solid #ced1d6;
        border-top-color: #ced1d6;
        border-right-color: #ced1d6;
        border-bottom-color: #ced1d6;
        border-left-color: #ced1d6;
        color: #546474;
        font-size: 16px;
        border-radius: 100%;
        background-color: #fff;
        position: relative;
        z-index: 2;
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 32px;
        text-align: center;
      }
      .title {
        display: block;
        margin-top: 4px;
        max-width: 100%;
        color: #2b3d53;
        font-size: 14px;
        z-index: 104;
        text-align: center;
        table-layout: fixed;
        word-wrap: break-word;
      }
    }
  }
  .active .title {
    color: #2b3d53;
  }
  li::before {
    display: block;
    content: "";
    width: 100%;
    height: 1px;
    font-size: 0;
    overflow: hidden;
    border-top: 4px solid #ced1d6;
    border-top-color: rgb(206, 209, 214);
    position: relative;
    top: 23px;
    z-index: 1;
  }
  li:first-child::before {
    max-width: 51%;
    left: 50%;
  }
  li:last-child::before {
    max-width: 50%;
    width: 50%;
  }
  .steps li.active::before,
  .steps li.complete::before,
  .steps li.active .step,
  .steps li.complete .step {
    border-color: #58bf80;
  }
}
// 固定内容盒子
.content {
  width: 1400px;
  overflow: hidden;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  .resourseBox {
    border: 1px solid #e0e0e0;
    border-bottom: none;
    width: 1220px;
    padding: 0 20px 10px 20px;
    margin-left: 180px;
    min-height: 368px;
    .pageHead {
      h1 {
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        font-weight: 400;
        color: #8089a0;
        i {
          display: inline-block;
          font: normal normal normal 14px/1 FontAwesome;
          font-size: 14px;
          font-size: inherit;
          text-rendering: auto;
        }
      }
    }
    .elPagination {
      text-align: center;
    }
  }
}
</style>

