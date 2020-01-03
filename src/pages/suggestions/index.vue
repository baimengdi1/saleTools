
<template>
  <div class="resourseDetails">
    <siteHeader></siteHeader>
    <div class="content">
      <div class="searchContent">
        <el-form ref="form" :model="ruleForm" label-width="80px">
          <el-form-item label="收件人">
            <el-select style="width:100%;" v-model="ruleForm.classifyText" placeholder="请选择收件人">
              <el-option
                v-for="item in addresseeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="主题">
            <el-input
              v-model="ruleForm.themeText"
              prefix-icon="el-icon-chat-round"
              placeholder="请输入主题"
            ></el-input>
          </el-form-item>
          <el-form-item label="反馈">
            <el-row>
              <quill-editor
                v-model="ruleForm.desc"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)"
              ></quill-editor>
            </el-row>
          </el-form-item>
        </el-form>
        <el-row class="sendRow">
          <el-button type="primary" icon="el-icon-position">发送</el-button>
        </el-row>
      </div>
      <siteFooter></siteFooter>
    </div>
  </div>
</template>
<script>
import siteHeader from "@/components/siteHeader.vue";
import siteFooter from "@/components/siteFooter.vue";
import { quillEditor } from "vue-quill-editor";
export default {
  data() {
    return {
      content: "",
      editorOption: {}, //文本编辑
      addresseeList: [], //收件人列表
      ruleForm: {
        classifyText: "", //收件人
        themeText: "", //主题
        desc: "" //反馈
      }
    };
  },
  mounted() {
    console.log(this.$route);
  },
  components: { siteHeader, siteFooter },
  methods: {
    onEditorBlur(editor) {
      //失去焦点事件
    },
    onEditorFocus(editor) {
      //获得焦点事件
    },
    onEditorChange({ editor, html, text }) {
      //编辑器文本发生变化
      //this.content可以实时获取到当前编辑器内的文本内容
      console.log(this.ruleForm.desc);
    },
    downLoadFile() {}
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

// 固定内容盒子
.content {
  width: 1400px;
  overflow: hidden;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  .searchContent {
    min-height: 368px;
    margin: 30px 50px 30px 50px;
  }
  .el-form-item {
    padding: 20px 50px 0 50px;
  }
}
.ql-editor {
  min-height: 368px !important;
}
.sendRow {
  padding: 10px 50px 0 50px;
  text-align: right;
}
</style>

