<template>
  <div class="siteSteps">
    <ul class="steps">
      <li data-step="1" :class="active >=0  ?'active':''">
        <span class="step">1</span>
        <span class="title">上传资源文件</span>
      </li>

      <li data-step="2" :class="active >=1  ?'active':''">
        <span class="step">2</span>
        <span class="title">填写资源文件描述</span>
      </li>

      <li data-step="3" :class="active >=2  ?'active':''">
        <span class="step">3</span>
        <span class="title">确认资源信息</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: [
    "active"
  ],
  data() {
    return {
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="less">
.siteSteps {
  width: 98%;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  padding: 3px;
  line-height: 36px;
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
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
      }
      .title {
        display: block;
        margin-top: 4px;
        max-width: 100%;
        color: #949ea7;
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
    top: 26px;
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
</style>
