
<template>
  <div class="resourseDetails">
    <siteHeader :active="manageKey"></siteHeader>
    <div class="content">
      <systemLeftTab :active="systemLeftTabActive"></systemLeftTab>
      <div class="resourseBox">
        <div class="pageHead">
          <h1>
            <i class="el-icon-d-arrow-right"></i> 管理员对资源的发布、更新、下线和删除...
          </h1>
        </div>
        <div class="pageContent">
          <div class="siteSteps">
            <ul class="steps">
              <li data-step="1" @click="changeActive(0)" :class="activeNum >=0  ?'active':''">
                <span class="step">1</span>
                <span class="title">上传资源文件</span>
              </li>

              <li data-step="2" @click="changeActive(1)" :class="activeNum>=1  ?'active':''">
                <span class="step">2</span>
                <span class="title">填写资源文件描述</span>
              </li>

              <li data-step="3" @click="changeActive(2)" :class="activeNum>=2?'active':''">
                <span class="step">3</span>
                <span class="title">确认资源信息</span>
              </li>
            </ul>
          </div>
          <!-- 第一页 -->
          <div class="uploadFileBox" v-if="active==0">
            <el-upload
              v-if="downLoadFileList.length==0"
              class="upload-demo"
              drag
              action="this.URL.baseURL()+'/frontOrder/agreeFile/submit/uploadAgreeFileNew'"
              :show-file-list="false"
              :http-request="uploadFile"
              ref="upload"
            >
              <div class="uploadBox">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">拖拽文件 上传 (或者点击选择)</div>
              </div>
            </el-upload>
            <div v-else>
              <ul class="uploadFileContent">
                <li v-for="(item, index) in downLoadFileList" :key="index">
                  <div class="imgDetailsBox">
                    <div class="imgDetails">{{item.file.name}}</div>
                  </div>
                  <div class="imgSize" data-dz-size>
                    <strong>{{item.file.size | conver}}</strong>MB
                  </div>
                  <div class="imgRemove">
                    <el-button
                      class="imgRemoveBtn"
                      @click="removeFile(index)"
                      size="mini"
                      type="danger"
                    >Remove file</el-button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 第二页 -->
          <div class="uploadFileBox fileDescription" v-if="active==1">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="标题" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入标题"></el-input>
              </el-form-item>

              <el-form-item label="作者" prop="author">
                <!-- 添加作者 -->
                <el-tag
                  :key="tag"
                  v-for="tag in dynamicTags"
                  closable
                  :disable-transitions="false"
                  @close="handleClose(tag)"
                >{{tag}}</el-tag>
                <!-- 添加作者input -->
                <el-input
                  class="input-new-tag"
                  v-model="inputValue"
                  ref="saveTagInput"
                  @keyup.enter.native="handleInputConfirm"
                  @blur="handleInputConfirm"
                  placeholder="请输入作者，多个回车分隔"
                ></el-input>
                <!-- 添加作者正则input -->
                <el-input
                  class="ruleInputTop"
                  v-model="ruleForm.author"
                  placeholder="请输入作者，多个回车分隔~"
                ></el-input>
              </el-form-item>
              <el-form-item label="关键字" prop="keyWords">
                <!-- 添加关键字 -->
                <el-tag
                  :key="tag"
                  v-for="tag in keyWordsTags"
                  closable
                  :disable-transitions="false"
                  @close="handlekeyWordsClose(tag)"
                >{{tag}}</el-tag>
                <!-- 添加关键字input -->
                <el-input
                  class="input-new-tag"
                  v-model="keyWordsValue"
                  ref="saveTagInput"
                  @keyup.enter.native="handlekeyWordsConfirm"
                  @blur="handlekeyWordsConfirm"
                  placeholder="请输入关键字，多个回车分隔"
                ></el-input>
                <!-- 添加关键字正则input -->
                <el-input
                  class="ruleInputTop"
                  v-model="ruleForm.keyWords"
                  placeholder="请输入关键字，多个回车分隔~"
                ></el-input>
              </el-form-item>

              <el-form-item label="资源分类" prop="resourceClassify">
                <el-select
                  style="width:100%;"
                  v-model="ruleForm.resourceClassify"
                  placeholder="请选择资源分类"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="相关指标" prop="relevantKey">
                <el-input v-model="ruleForm.relevantKey" placeholder></el-input>
              </el-form-item>

              <el-form-item label="应用科室" prop="departments">
                <el-input v-model="ruleForm.departments" placeholder></el-input>
              </el-form-item>

              <el-form-item label="概要介绍" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <!-- 第三页 -->
          <div class="uploadFileBox submitInfo" v-if="active==2">
            <div class="step-pane active" data-step="3">
              <div class="profile-user-info profile-user-info-striped">
                <div class="profile-info-row">
                  <div class="profile-info-name">标题</div>

                  <div class="profile-info-value">{{ruleForm.name}}</div>
                </div>

                <div class="profile-info-row">
                  <div class="profile-info-name">作者</div>

                  <div class="profile-info-value">{{ruleForm.author}}</div>
                </div>

                <div class="profile-info-row">
                  <div class="profile-info-name">关键字</div>

                  <div class="profile-info-value">{{ruleForm.keyWords}}</div>
                </div>
                <div class="profile-info-row">
                  <div class="profile-info-name">资源分类</div>

                  <div class="profile-info-value">{{ruleForm.resourceClassify}}</div>
                </div>
                <div class="profile-info-row">
                  <div class="profile-info-name">相关指标</div>

                  <div class="profile-info-value">{{ruleForm.relevantKey}}</div>
                </div>
                <div class="profile-info-row">
                  <div class="profile-info-name">应用科室</div>

                  <div class="profile-info-value">{{ruleForm.departments}}</div>
                </div>
                <div class="profile-info-row">
                  <div class="profile-info-name">概要介绍</div>

                  <div class="profile-info-value">{{ruleForm.desc}}</div>
                </div>
                <div class="profile-info-row">
                  <div class="profile-info-name">文件</div>
                  <div class="profile-info-value">{{downLoadFileList[0].file.name}}</div>
                </div>
              </div>
            </div>
          </div>
          <el-row class="pageNext" v-if="downLoadFileList.length>0 || active>0">
            <el-col :span="5" style="margin: 20px -25px 0 0;float:right;">
              <el-button-group>
                <el-button
                  type="primary"
                  @click="upPage()"
                  :disabled="active==0"
                  icon="el-icon-back"
                >上一页</el-button>
                <el-button
                  type="primary"
                  @click="nextPage()"
                  v-if="active!=2"
                  icon="el-icon-right"
                >下一页</el-button>
                <el-button v-else type="primary" @click="submitBtn()" icon="el-icon-arrow-right">完成</el-button>
              </el-button-group>
            </el-col>
          </el-row>
        </div>
      </div>
      <siteFooter></siteFooter>
    </div>
  </div>
</template>
<script>
import systemLeftTab from "@/components/systemLeftTab.vue";
import siteHeader from "@/components/siteHeader.vue";
import siteFooter from "@/components/siteFooter.vue";
export default {
  data() {
    return {
      manageKey: "2", //是否为管理权限
      systemLeftTabActive: "1",
      dynamicTags: [], //添加标签
      keyWordsTags: [], //添加关键字
      inputValue: "", //添加作者
      keyWordsValue: "", //添加关键字
      active: 0,
      activeNum: 0,
      formFileData: "", //要上传的内容
      downLoadFileList: [], //上传内容
      ruleForm: {
        name: "",
        author: "",
        keyWords: "",
        resourceClassify: "",
        relevantKey: "",
        departments: "",
        desc: ""
      },
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
      },
      leftDisabled: false, //上一页
      rightDisabled: false //下一页
    };
  },
  filters: {
    conver(limit) {
      var size = "";
      if (limit < 0.1 * 1024) {
        //如果小于0.1KB转化成B
        size = limit.toFixed(2) + "B";
      } else if (limit < 0.1 * 1024 * 1024) {
        //如果小于0.1MB转化成KB
        size = (limit / 1024).toFixed(2) + "KB";
      } else if (limit < 0.1 * 1024 * 1024 * 1024) {
        //如果小于0.1GB转化成MB
        size = (limit / (1024 * 1024)).toFixed(2) + "MB";
      } else {
        //其他转化成GB
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";
      }

      var sizestr = size + "";
      var len = sizestr.indexOf(".");
      var dec = sizestr.substr(len + 1, 2);
      if (dec == "00") {
        //当小数点后为00时 去掉小数部分
        return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
      }
      return sizestr;
    }
  },
  mounted() {
    this.ruleForm.author = this.dynamicTags[0];
    this.ruleForm.keyWords = this.keyWordsTags[0];
  },
  components: { siteHeader, siteFooter, systemLeftTab },
  methods: {
    // 资源上传
    //分子上传知情同意书
    uploadFile(params) {
      const file = params.file,
        fileType = params.file.name.split(".")[1].toLowerCase();
      var isJPG =
        "txt | pdf | png | jpg | doc | docx | ppt | xls | xlsx | mp3 | avi".indexOf(
          fileType
        ) != -1;
      var isLt2M = 0;
      if ("mp3|avi".indexOf(fileType) != -1) {
        isLt2M = file.size / 1024 / 1024 < 20;
      } else {
        isLt2M = file.size / 1024 / 1024 < 5;
      }
      console.log(params, "fileType");
      if (!isJPG) {
        this.$alert(
          "上传失败，请上传(格式为：txt | pdf | png | jpg | doc | docx | ppt | xls | xlsx | mp3 |avi)",
          "提示",
          {
            confirmButtonText: "确定",
            type: "error",
            center: true
          }
        );
        return;
      }
      if (!isLt2M) {
        this.$alert("上传文本文档不超过5Mb，多媒体文件不超过20Mb!", "提示", {
          confirmButtonText: "确定",
          type: "error",
          center: true
        });
        return;
      }
      // 根据后台需求数据格式
      const form = new FormData();
      // 文件对象
      form.append("file", file);
      // 本例子主要要在请求时添加特定属性，所以要用自己方法覆盖默认的action
      form.append("checkUserId", "");
      form.append("projectType", "");
      this.formFileData = form;
      this.downLoadFileList.push(params);
    },
    // 删除作者
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      if (this.dynamicTags.length <= 0) {
        this.ruleForm.author = this.dynamicTags[0];
      }
    },
    //删除文件
    removeFile(index) {
      // 删除数据
      this.downLoadFileList.splice(index, 1);
    },
    // 删除关键字
    handlekeyWordsClose(tag) {
      this.keyWordsTags.splice(this.keyWordsTags.indexOf(tag), 1);
      if (this.keyWordsTags.length <= 0) {
        // 如果关键字列表为空
        this.ruleForm.keyWords = this.keyWordsTags[0];
      }
    },
    // 添加作者
    handleInputConfirm() {
      let inputValue = this.inputValue;
      this.ruleForm.author = this.dynamicTags[0];
      // 内容不为空
      if (inputValue) {
        let valueSame = false;
        this.ruleForm.author = this.inputValue;
        this.dynamicTags.map(item => {
          if (item == inputValue) {
            valueSame = true;
          }
        });
        if (valueSame == false) {
          this.dynamicTags.push(inputValue);
          this.inputValue = "";
        } else {
          this.$message("已经添加过了哦");
          this.inputValue = "";
        }
        return;
      }
    },
    // 添加作者
    handlekeyWordsConfirm() {
      let keyWordsValue = this.keyWordsValue;
      this.ruleForm.keyWords = this.keyWordsTags[0];
      // 内容不为空
      if (keyWordsValue) {
        let valueSame = false;
        this.ruleForm.keyWords = this.keyWordsValue;
        this.keyWordsTags.map(item => {
          if (item == keyWordsValue) {
            valueSame = true;
          }
        });
        if (valueSame == false) {
          this.keyWordsTags.push(keyWordsValue);
          this.keyWordsValue = "";
        } else {
          this.$message("已经添加过了哦");
          this.keyWordsValue = "";
        }
        return;
      }
    },
    // 正则
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 下载
    downLoadFile() {},
    // 改变页
    changeActive(index) {
      if (this.activeNum > index) {
        this.active = index;
        this.activeNum = index;
        return;
      }
    },
    // 上一页
    upPage() {
      if (this.active == 2) {
        this.active = 1;
        this.activeNum = 1;
        return;
      }
      if (this.active == 1) {
        this.active = 0;
        this.activeNum = 0;
        return;
      }
    },
    // 下一页
    nextPage() {
      if (this.active == 0) {
        this.activeNum = 1;
        this.active = 1;
        return;
      }
      if (this.active == 1) {
        // 如果去第三页还没有填完表单
        let formName = "ruleForm";
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.activeNum = 2;
            this.active = 2;
            // 第三页转换关键字展示格式
            let keyWordsResult = "";
            let tagsLength = this.keyWordsTags.length;
            this.keyWordsTags.map((item, index) => {
              if (tagsLength > index + 1) {
                item = item + ",";
                keyWordsResult += item;
                return;
              } else {
                keyWordsResult += item;
              }
            });

            this.ruleForm.keyWords = keyWordsResult;
            // 第三页转换作者展示格式
            let inputResult = "";
            this.dynamicTags.map((item, index) => {
              item = "【" + item + "】";
              inputResult += item;
            });
            this.ruleForm.author = inputResult;
            return;
          } else {
            return;
          }
        });
      }
    },
    //完成
    submitBtn() {
      //保存
      this.$confirm("保存上传？", "确认信息", {
        distinguishCancelAndClose: true,
        confirmButtonText: "保存",
        cancelButtonText: "放弃上传"
      })
        .then(() => {
          // /frontOrder/agreeFile/submit/uploadAgreeFileNew
          this.$author.uploadAgreeFileNew(this.formFileData).then(res => {
            this.$message({
              type: "info",
              message: "上传成功"
            });
          });
        })
        .catch(action => {
          this.$message({
            type: "info",
            message: "放弃上传"
          });
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
    .pageTitle {
      background: #f7f7f7;
      color: #00a83c;
      line-height: 38px;
      font-size: 16px;
      border-bottom: 1px solid #ddd;
      padding-left: 12px;
    }
    .pageContent {
      padding: 10px;
      border: 1px solid #e0e0e0;
      .input-new-tag {
        position: relative;
        z-index: 2;
      }
      .ruleInputTop {
        position: absolute;
        top: 0;
        left: 0;
        display: none;
      }
      .uploadFileBox {
        min-height: 368px;
        border-top: 1px solid #eee;
        padding-top: 10px;
        .el-icon-upload {
          font-size: 67px;
          color: #c0c4cc;
          padding: 40px 0 16px;
          line-height: 100px;
          width: 100%;
        }
        .el-upload-dragger {
          min-height: 368px;
          padding-top: 77px;
        }
        .uploadBox {
          display: inline-block;
          cursor: pointer;
          background: rgba(206, 209, 214, 0.2);
          outline: none;
          width: 1136px;
          min-height: 368px;
        }
        .uploadFileContent {
          min-height: 360px;
          -webkit-border-radius: 3px;
          border-radius: 3px;
          background: rgba(206, 209, 214, 0.2);
          padding: 23px;
          li {
            background: #fff;
            position: relative;
            display: inline-block;
            margin: 20px;
            vertical-align: top;
            /* border: 1px solid #acacac; */
            box-shadow: 1px 1px 20px #eeeeee;
            padding: 6px 6px 6px 6px;
            .imgDetailsBox {
              width: 100px;
              height: 92px;
              position: relative;
              background: #ebebeb;
              padding: 5px;
              margin-bottom: 26px;
              .imgDetails {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                word-break: break-all;
                -webkit-line-clamp: 3;
                line-height: 20px;
                letter-spacing: 1px;
                color: #444;
                -webkit-box-orient: vertical;
              }
            }
            .imgSize {
              position: absolute;
              left: 8px;
              top: 92px;
              height: 28px;
              line-height: 28px;
            }
          }
        }
      }
      // 资源描述
      .fileDescription {
        overflow: hidden;
        padding: 30px 250px 0 250px;
      }
      // 资源信息
      .submitInfo {
        padding: 4px 8px 12px;
        .step-pane {
          width: 53%;
          margin: 72px auto;
          border: 1px solid #dcebf7;
        }
        .profile-info-row {
          display: table-row;
        }
        .profile-info-name {
          color: #336199;
          text-align: right;
          padding: 8px 15px 8px 4px;
          font-weight: 400;
          background-color: #edf3f4;
          border-top: 1px dotted #d5e4f1;
          display: table-cell;
          width: 139px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          vertical-align: middle;
        }
        .profile-info-value {
          display: table-cell;
          padding: 6px 4px 6px 6px;
          word-break: break-all;
          word-wrap: break-word;
          border-top: 1px dotted #dcebf7;
          padding-left: 12px;
        }
      }
    }
  }
}
</style>

