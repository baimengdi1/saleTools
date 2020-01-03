<template>
  <div class="resourseDetails">
    <siteHeader :active="manageKey"></siteHeader>
    <div class="content">
      <systemLeftTab :active="systemLeftTabActive"></systemLeftTab>
      <div class="resourseBox">
        <div class="pageHead">
          <h1>
            <i class="el-icon-d-arrow-right"></i> 对用户增删改查和角色设置...
          </h1>
        </div>
        <div>
          <!-- 搜索选择 -->
          <el-row class="confidenceBox" style="overflow:hidden;">
            <el-col style="margin: 6px 0 12px 0;">
              <el-button
                type="primary"
                size="small"
                @click="addDialogToggle"
                icon="el-icon-circle-plus-outline"
              >新增</el-button>
            </el-col>
            <!-- 内容表格 -->
            <el-col :span="24">
              <el-table ref="table" border :data="tableData">
                <el-table-column label="角色名称" prop="name"></el-table-column>
                <el-table-column label="操作时间" prop="date"></el-table-column>
                <el-table-column label="操作" width="120">
                  <template>
                    <el-row class="operation">
                      <el-col>
                        <!-- 查看 -->
                        <el-button type="text" @click="userListShowBtn">查看</el-button>
                      </el-col>
                    </el-row>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
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
      </div>
      <siteFooter></siteFooter>
    </div>
    <!-- 弹窗聚集地 -->
    <el-dialog title="新增" :visible.sync="addDialog">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入角色名称"></el-input>
        </el-form-item>

        <el-form-item label="描述信息" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入描述信息"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false">取 消</el-button>
        <el-button type="primary" @click="addDialogBtn">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="查看用户列表" :visible.sync="userListShow">
      <el-table :data="userList" border style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="name" label="用户名" width="180"></el-table-column>
        <el-table-column prop="date" label="邮箱" width="180"></el-table-column>
        <el-table-column prop="address" label="修改时间"></el-table-column>
        <el-table-column prop="address" label="角色"></el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="userListShow = false">取 消</el-button>
        <el-button type="primary" @click="userListShowBtn">确 定</el-button>
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
      systemLeftTabActive: "5",
      currentPage: 0,
      AllPagingNumber: 1,
      addDialog: false, //新增
      userListShow: false,
      userList: [
        {
          id: "1",
          name: "好滋好味鸡蛋仔1",
          desc: "荷兰优质淡奶，奶香浓而不腻1",
          date: "2018-02-02"
        },
        {
          id: "2",
          name: "好滋好味鸡蛋仔2",
          desc: "荷兰优质淡奶，奶香浓而不腻2",
          date: "2018-02-02"
        },
        {
          id: "3",
          name: "好滋好味鸡蛋仔3",
          desc: "荷兰优质淡奶，奶香浓而不腻3",
          date: "2018-02-02"
        },
        {
          id: "4",
          name: "好滋好味鸡蛋仔4",
          desc: "荷兰优质淡奶，奶香浓而不腻4",
          date: "2018-02-02"
        }
      ], //角色列表
      ruleForm: {
        name: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请填写角色名称！", trigger: "blur" }
        ],
        desc: [{ required: true, message: "请填写描述信息！", trigger: "blur" }]
      },
      tableData: [
        {
          id: "1",
          name: "好滋好味鸡蛋仔1",
          desc: "荷兰优质淡奶，奶香浓而不腻1",
          date: "2018-02-02"
        },
        {
          id: "2",
          name: "好滋好味鸡蛋仔2",
          desc: "荷兰优质淡奶，奶香浓而不腻2",
          date: "2018-02-02"
        },
        {
          id: "3",
          name: "好滋好味鸡蛋仔3",
          desc: "荷兰优质淡奶，奶香浓而不腻3",
          date: "2018-02-02"
        },
        {
          id: "4",
          name: "好滋好味鸡蛋仔4",
          desc: "荷兰优质淡奶，奶香浓而不腻4",
          date: "2018-02-02"
        }
      ]
    };
  },
  mounted() {},
  components: { siteHeader, siteFooter, systemLeftTab },
  methods: {
    userListShowBtn() {
      this.userListShow = !this.userListShow;
    },
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
    // 回复
    replayBtn() {
      // 回复内容
      // 您的意见已收到，感谢您的支持～
      this.$alert("确定回复", "回复", {
        confirmButtonText: "确定",
        callback: action => {}
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
    min-height: 368px;
    padding: 0 20px 10px 20px;
    margin-left: 180px;
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
    .datePicker {
      width: 100%;
    }
    .elPagination {
      text-align: center;
    }
    .operation {
      text-align: center;
    }
    .elPagination {
      margin-top: 10px;
    }
  }
}
</style>

