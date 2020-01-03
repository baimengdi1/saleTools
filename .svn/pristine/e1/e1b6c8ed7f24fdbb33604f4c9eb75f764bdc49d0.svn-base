
<template>
  <div class="resourseDetails">
    <siteHeader :active="manageKey"></siteHeader>
    <div class="content">
      <systemLeftTab :active="systemLeftTabActive"></systemLeftTab>
      <div class="resourceSystem">
        <!-- 头部 -->
        <div class="pageHead">
          <h1>
            <i class="el-icon-d-arrow-right"></i> 管理员对资源的发布、更新、下线和删除...
          </h1>
        </div>
        <div>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="待发布" name="待发布">
              <div>
                <!-- 搜索选择 -->
                <el-row class="confidenceBox">
                  <el-col :span="1">
                    <span style="line-height: 40px;font-size:13px;">标题：</span>
                  </el-col>
                  <el-col :span="5">
                    <el-input v-model="form.fileTitle" placeholder="请输入标题" />
                  </el-col>
                  <el-col :span="2">
                    <span style="line-height: 40px;font-size:13px; padding-left: 24px;">资源分类:</span>
                  </el-col>
                  <el-col :span="5">
                    <el-select class="w100" v-model="form.classifyValue" placeholder="请选择分类">
                      <el-option
                        v-for="item in form.classifyList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="1" style="margin-left:24px;">
                    <span style="line-height: 40px;font-size:13px;">日期:</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      class="datePicker"
                      v-model="form.dataValue"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="3">
                    <el-button style="margin-left: 20px;" @click="searchBtn" type="primary" plain>查询</el-button>
                  </el-col>
                  <el-col
                    v-if="form.selectList.length>0 && activeName=='待发布'"
                    style="margin-top:20px;"
                  >
                    <el-button type="primary" size="small" plain>批量发布</el-button>
                    <el-button type="primary" size="small" plain>批量删除</el-button>
                    <!-- 超级管理员 -->
                    <el-button type="primary" size="small" plain>批量下载列表</el-button>
                    <!-- Excel格式 -->
                    <el-button type="primary" size="small" plain>打包下载文件</el-button>
                    <!-- zip格式 -->
                  </el-col>
                </el-row>
                <el-row>
                  <!-- 内容表格 -->
                  <el-col :span="24">
                    <el-table
                      ref="table"
                      border
                      :data="tableData5"
                      style="width: 1200px;"
                      @selection-change="handleSelectionChange"
                    >
                      <el-table-column type="selection" width="55"></el-table-column>
                      <el-table-column label="标题" width="200">
                        <template slot-scope="scope">
                          <el-button type="text" @click="toogleExpand(scope.row)">标题</el-button>
                        </template>
                      </el-table-column>
                      <el-table-column label="资源分类" prop="name"></el-table-column>
                      <el-table-column label="概要介绍" prop="desc"></el-table-column>
                      <el-table-column label="日期" prop="date" width="130"></el-table-column>
                      <el-table-column label="操作" width="120">
                        <template>
                          <el-row class="operation">
                            <el-col :span="12">
                              <!-- 发布 -->
                              <el-tooltip placement="bottom" content="发布">
                                <el-button type="primary" size="mini" plain>
                                  <i class="el-icon-position"></i>
                                </el-button>
                              </el-tooltip>
                            </el-col>
                            <el-col :span="12">
                              <!-- 编辑 -->
                              <el-tooltip placement="bottom" content="编辑">
                                <el-button type="primary" @click="handleEdit(scope.row)" size="mini" plain>
                                  <i class="el-icon-edit-outline"></i>
                                </el-button>
                              </el-tooltip>
                            </el-col>
                          </el-row>
                          <el-row class="operation" style="margin-top:4px;">
                            <el-col :span="12">
                              <!-- 删除 -->
                              <el-tooltip placement="bottom" content="删除">
                                <el-button type="primary" size="mini" plain>
                                  <i class="el-icon-delete"></i>
                                </el-button>
                              </el-tooltip>
                            </el-col>
                            <el-col :span="12">
                              <!-- 文件下载 -->
                              <el-tooltip placement="bottom" content="文件下载">
                                <el-button type="primary" size="mini" plain>
                                  <i class="el-icon-download"></i>
                                </el-button>
                              </el-tooltip>
                            </el-col>
                          </el-row>
                        </template>
                      </el-table-column>
                      <el-table-column type="expand" width="1">
                        <template slot-scope="props">
                          <el-form label-position="left" inline class="demo-table-expand">
                            <el-row>
                              <el-form-item>
                                <div class="detailTitle">{{ props.row.name }}</div>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <div>
                                  <span class="authorName">作者</span>
                                  <i class="el-icon-time detailClock"></i>
                                  <span class="detailTime">2018/10/16 下午3:18:51</span>
                                </div>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <span class="blackColor">关键字：欧蒙B27文献原文</span>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <span class="blackColor">资源分类：试剂各产品线-文献-杂志</span>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <span class="blackColor">相关指标：B27</span>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <span class="blackColor">应用科室：检验科，风湿免疫科等</span>
                              </el-form-item>
                            </el-row>
                            <el-row class="doubleLine">
                              <el-form-item>
                                <span>额 发发发份额 发发发份额 发发发份额 发发发份</span>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <div class="w100f fileName">文件名称</div>
                                <div class="w100f fileTitle">
                                  <span class="title">销售工具信息管理平台-20191107.docx</span>
                                  <i class="el-icon-view"></i>
                                </div>
                              </el-form-item>
                            </el-row>
                          </el-form>
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
                    :current-page.sync="form.currentPage"
                    @current-change="nextClick"
                    :total="form.AllPagingNumber"
                  ></el-pagination>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="已发布" name="已发布">
              <div>
                <!-- 搜索选择 -->
                <el-row class="confidenceBox">
                  <el-col :span="1">
                    <span style="line-height: 40px;font-size:13px;">标题：</span>
                  </el-col>
                  <el-col :span="5">
                    <el-input v-model="already.fileTitle" placeholder="请输入标题" />
                  </el-col>
                  <el-col :span="2">
                    <span style="line-height: 40px;font-size:13px; padding-left: 24px;">资源分类:</span>
                  </el-col>
                  <el-col :span="5">
                    <el-select class="w100" v-model="already.classifyValue" placeholder="请选择分类">
                      <el-option
                        v-for="item in already.classifyList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="1" style="margin-left:24px;">
                    <span style="line-height: 40px;font-size:13px;">日期:</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      class="datePicker"
                      v-model="already.dataValue"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="3">
                    <el-button
                      style="margin-left: 20px;"
                      @click="alreadySearchBtn"
                      plain
                      type="primary"
                    >查询</el-button>
                  </el-col>

                  <el-col
                    v-if="already.selectList.length>0 && activeName=='已发布'"
                    style="margin-top:20px;"
                  >
                    <el-button type="primary" size="small" plain>批量下线</el-button>
                    <!-- 超级管理员 -->
                    <el-button type="primary" size="small" plain>批量下载列表</el-button>
                    <el-button type="primary" size="small" plain>打包下载文件</el-button>
                  </el-col>
                </el-row>
                <!-- 内容表格 -->
                <el-row>
                  <el-col :span="24">
                    <el-table
                      ref="tableAlready"
                      border
                      :data="tableData5"
                      style="width: 1200px;"
                      @selection-change="handleSelectionChange"
                    >
                      <el-table-column type="selection" width="55"></el-table-column>
                      <el-table-column label="标题" width="200">
                        <template slot-scope="scope">
                          <el-button type="text" @click="toogleExpandTableAlready(scope.row)">标题</el-button>
                        </template>
                      </el-table-column>
                      <el-table-column label="资源分类" prop="name"></el-table-column>
                      <el-table-column label="概要介绍" prop="desc"></el-table-column>
                      <el-table-column label="日期" prop="date" width="100"></el-table-column>
                      <el-table-column label="操作" width="120">
                        <template>
                          <el-row class="operation">
                            <el-col :span="12">
                              <!-- 下线 -->
                              <el-tooltip placement="bottom" content="下线">
                                <el-button type="primary" size="mini" plain>
                                  <i class="el-icon-box"></i>
                                </el-button>
                              </el-tooltip>
                            </el-col>
                            <el-col :span="12">
                              <!-- 下载 -->
                              <el-tooltip placement="bottom" content="文件下载">
                                <el-button type="primary" size="mini" plain>
                                  <i class="el-icon-download"></i>
                                </el-button>
                              </el-tooltip>
                            </el-col>
                          </el-row>
                        </template>
                      </el-table-column>
                      <el-table-column type="expand" width="1">
                        <template slot-scope="props">
                          <el-form label-position="left" inline class="demo-table-expand">
                            <el-row>
                              <el-form-item>
                                <div class="detailTitle">{{ props.row.name }}</div>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <div>
                                  <span class="authorName">作者</span>
                                  <i class="el-icon-time detailClock"></i>
                                  <span class="detailTime">2018/10/16 下午3:18:51</span>
                                </div>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <span class="blackColor">关键字：欧蒙B27文献原文</span>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <span class="blackColor">资源分类：试剂各产品线-文献-杂志</span>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <span class="blackColor">相关指标：B27</span>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <span class="blackColor">应用科室：检验科，风湿免疫科等</span>
                              </el-form-item>
                            </el-row>
                            <el-row class="doubleLine">
                              <el-form-item>
                                <span>额 发发发份额 发发发份额 发发发份额 发发发份</span>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <div class="w100f fileName">文件名称</div>
                                <div class="w100f fileTitle">
                                  <span class="title">销售工具信息管理平台-20191107.docx</span>
                                  <i class="el-icon-view"></i>
                                </div>
                              </el-form-item>
                            </el-row>
                          </el-form>
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
                    :current-page.sync="already.currentPage"
                    @current-change="nextClick"
                    :total="already.AllPagingNumber"
                  ></el-pagination>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="已下线" name="已下线">
              <div>
                <!-- 搜索选择 -->
                <el-row class="confidenceBox">
                  <el-col :span="1">
                    <span style="line-height: 40px;font-size:13px;">标题：</span>
                  </el-col>
                  <el-col :span="5">
                    <el-input v-model="offline.fileTitle" placeholder="请输入标题" />
                  </el-col>
                  <el-col :span="2">
                    <span style="line-height: 40px;font-size:13px; padding-left: 24px;">资源分类:</span>
                  </el-col>
                  <el-col :span="5">
                    <el-select class="w100" v-model="offline.classifyValue" placeholder="请选择分类">
                      <el-option
                        v-for="item in offline.classifyList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="1" style="margin-left:24px;">
                    <span style="line-height: 40px;font-size:13px;">日期:</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      class="datePicker"
                      v-model="offline.dataValue"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="3">
                    <el-button
                      style="margin-left: 20px;"
                      @click="offlineSearchBtn"
                      plain
                      type="primary"
                    >查询</el-button>
                  </el-col>

                  <el-col
                    v-if="offline.selectList.length>0 && activeName=='已下线'"
                    style="margin-top:20px;"
                  >
                    <el-button type="primary" size="small" plain>批量发布</el-button>
                    <el-button type="primary" size="small" plain>批量删除</el-button>
                    <!-- 超级管理员 -->
                    <el-button type="primary" size="small" plain>批量下载列表</el-button>
                    <el-button type="primary" size="small" plain>打包下载文件</el-button>
                  </el-col>
                </el-row>
                <el-row>
                  <!-- 内容表格 -->
                  <el-col :span="24">
                    <el-table
                      ref="tableOffline"
                      border
                      :data="tableData5"
                      style="width: 1200px;"
                      @selection-change="handleSelectionChange"
                    >
                      <el-table-column type="selection" width="55"></el-table-column>
                      <el-table-column label="标题" width="200">
                        <template slot-scope="scope">
                          <el-button type="text" @click="toogleExpandTableOffline(scope.row)">标题</el-button>
                        </template>
                      </el-table-column>
                      <el-table-column label="资源分类" prop="name"></el-table-column>
                      <el-table-column label="概要介绍" prop="desc"></el-table-column>
                      <el-table-column label="日期" prop="date" width="130"></el-table-column>
                      <el-table-column label="操作" width="120">
                        <template>
                          <el-row class="operation">
                            <el-col :span="12">
                              <!-- 发布 -->
                              <el-tooltip placement="bottom" content="发布">
                                <el-button type="primary" size="mini" plain>
                                  <i class="el-icon-position"></i>
                                </el-button>
                              </el-tooltip>
                            </el-col>
                            <el-col :span="12">
                              <!-- 编辑 -->
                              <el-tooltip placement="bottom" content="编辑">
                                <el-button type="primary" @click="handleEdit()" size="mini" plain>
                                  <i class="el-icon-edit-outline"></i>
                                </el-button>
                              </el-tooltip>
                            </el-col>
                          </el-row>
                          <el-row class="operation" style="margin-top:4px;">
                            <el-col :span="12">
                              <!-- 删除 -->
                              <el-tooltip placement="bottom" content="删除">
                                <el-button type="primary" size="mini" plain>
                                  <i class="el-icon-delete"></i>
                                </el-button>
                              </el-tooltip>
                            </el-col>
                            <el-col :span="12">
                              <!-- 下载 -->
                              <el-tooltip placement="bottom" content="文件下载">
                                <el-button type="primary" size="mini" plain>
                                  <i class="el-icon-download"></i>
                                </el-button>
                              </el-tooltip>
                            </el-col>
                          </el-row>
                        </template>
                      </el-table-column>
                      <el-table-column type="expand" width="1">
                        <template slot-scope="props">
                          <el-form label-position="left" inline class="demo-table-expand">
                            <el-row>
                              <el-form-item>
                                <div class="detailTitle">{{ props.row.name }}</div>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <div>
                                  <span class="authorName">作者</span>
                                  <i class="el-icon-time detailClock"></i>
                                  <span class="detailTime">2018/10/16 下午3:18:51</span>
                                </div>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <span class="blackColor">关键字：欧蒙B27文献原文</span>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <span class="blackColor">资源分类：试剂各产品线-文献-杂志</span>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <span class="blackColor">相关指标：B27</span>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <span class="blackColor">应用科室：检验科，风湿免疫科等</span>
                              </el-form-item>
                            </el-row>
                            <el-row class="doubleLine">
                              <el-form-item>
                                <span>额 发发发份额 发发发份额 发发发份额 发发发份</span>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <div class="w100f fileName">文件名称</div>
                                <div class="w100f fileTitle">
                                  <span class="title">销售工具信息管理平台-20191107.docx</span>
                                  <i class="el-icon-view"></i>
                                </div>
                              </el-form-item>
                            </el-row>
                          </el-form>
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
                    :current-page.sync="offline.currentPage"
                    @current-change="nextClick"
                    :total="offline.AllPagingNumber"
                  ></el-pagination>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="已下架" name="已下架">
              <div>
                <!-- 搜索选择 -->
                <el-row class="confidenceBox">
                  <el-col :span="1">
                    <span style="line-height: 40px;font-size:13px;">标题：</span>
                  </el-col>
                  <el-col :span="4">
                    <el-input v-model="offshelf.fileTitle" placeholder="请输入标题" />
                  </el-col>
                  <el-col :span="2">
                    <span style="line-height: 40px;font-size:13px; padding-left: 24px;">资源分类:</span>
                  </el-col>
                  <el-col :span="5">
                    <el-select class="w100" v-model="offshelf.classifyValue" placeholder="请选择分类">
                      <el-option
                        v-for="item in offshelf.classifyList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="1" style="margin-left:24px;">
                    <span style="line-height: 40px;font-size:13px;">日期:</span>
                  </el-col>
                  <el-col :span="5">
                    <el-date-picker
                      class="datePicker"
                      v-model="offshelf.dataValue"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                    ></el-date-picker>
                  </el-col>
                  <el-col :span="2">
                    <el-button
                      style="margin-left: 20px;"
                      @click="offshelfSearchBtn"
                      plain
                      type="primary"
                    >查询</el-button>
                  </el-col>
                  <el-col :span="2">
                    <el-button style="margin-left: 20px;" type="primary" plain>一键下载文件</el-button>
                    <!-- zip格式、一键下载文件时需要先根据时间去筛选 -->
                  </el-col>
                  <el-col
                    v-if="offshelf.selectList.length>0 && activeName=='已下架'"
                    style="margin-top:20px;"
                  >
                    <el-button type="primary" size="small" plain>批量删除</el-button>
                    <!-- 超级管理员 -->
                    <el-button type="primary" size="small" plain>批量下载列表</el-button>
                    <el-button type="primary" size="small" plain>打包下载文件</el-button>
                  </el-col>
                </el-row>
                <el-row>
                  <!-- 内容表格 -->
                  <el-col :span="24">
                    <el-table
                      ref="tableOffshelf"
                      border
                      :data="tableData5"
                      style="width: 1200px;"
                      @selection-change="handleSelectionChange"
                    >
                      <el-table-column type="selection" width="55"></el-table-column>
                      <el-table-column label="标题" width="200">
                        <template slot-scope="scope">
                          <el-button type="text" @click="toogleExpandTableOffshelf(scope.row)">标题</el-button>
                        </template>
                      </el-table-column>
                      <el-table-column label="资源分类" prop="name"></el-table-column>
                      <el-table-column label="概要介绍" prop="desc"></el-table-column>
                      <el-table-column label="日期" prop="date" width="130"></el-table-column>
                      <el-table-column label="操作" width="120">
                        <template>
                          <el-row class="operation">
                            <el-col :span="24">
                              <!-- 删除 -->
                              <el-tooltip placement="bottom" content="删除">
                                <el-button type="primary" size="mini" plain>
                                  <i class="el-icon-delete"></i>
                                </el-button>
                              </el-tooltip>
                            </el-col>
                          </el-row>
                        </template>
                      </el-table-column>
                      <el-table-column type="expand" width="1">
                        <template slot-scope="props">
                          <el-form label-position="left" inline class="demo-table-expand">
                            <el-row>
                              <el-form-item>
                                <div class="detailTitle">{{ props.row.name }}</div>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <div>
                                  <span class="authorName">作者</span>
                                  <i class="el-icon-time detailClock"></i>
                                  <span class="detailTime">2018/10/16 下午3:18:51</span>
                                </div>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <span class="blackColor">关键字：欧蒙B27文献原文</span>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <span class="blackColor">资源分类：试剂各产品线-文献-杂志</span>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <span class="blackColor">相关指标：B27</span>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <span class="blackColor">应用科室：检验科，风湿免疫科等</span>
                              </el-form-item>
                            </el-row>
                            <el-row class="doubleLine">
                              <el-form-item>
                                <span>额 发发发份额 发发发份额 发发发份额 发发发份</span>
                              </el-form-item>
                            </el-row>
                            <el-row>
                              <el-form-item>
                                <div class="w100f fileName">文件名称</div>
                                <div class="w100f fileTitle">
                                  <span class="title">销售工具信息管理平台-20191107.docx</span>
                                  <i class="el-icon-view"></i>
                                </div>
                              </el-form-item>
                            </el-row>
                          </el-form>
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
                    :current-page.sync="offshelf.currentPage"
                    @current-change="nextClick"
                    :total="offshelf.AllPagingNumber"
                  ></el-pagination>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>

        <!-- 弹窗聚集地 -->
        <el-dialog title="编辑" :visible.sync="editDialog">
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
              <el-input class="ruleInputTop" v-model="ruleForm.author" placeholder="请输入作者，多个回车分隔~"></el-input>
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
          <div slot="footer" class="dialog-footer">
            <el-button @click="editDialog = false">取 消</el-button>
            <el-button type="primary" @click="editDialogBtn">确 定</el-button>
          </div>
        </el-dialog>
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
      manageKey:'s',//是否有权限
      systemLeftTabActive: "3",
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
      editDialog: false, //编辑弹窗
      activeName: "待发布",
      tableData5: [
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
      ],
      form: {
        dataValue: "", //日期选择
        fileTitle: "", //标题
        classifyValue: "", //所选分类
        classifyList: [], //所选资源分类列表
        selectList: [], //全选列表
        currentPage: 1, //当前页
        AllPagingNumber: 0 //总数量
      }, //待发布搜索条件
      already: {
        dataValue: "", //日期选择
        fileTitle: "", //标题
        classifyValue: "", //所选分类
        classifyList: [], //所选资源分类列表
        selectList: [], //全选列表
        currentPage: 1, //当前页
        AllPagingNumber: 0 //总数量
      }, //已发布搜索条件
      offline: {
        dataValue: "", //日期选择
        fileTitle: "", //标题
        classifyValue: "", //所选资源分类
        classifyList: [], //所选资源分类列表
        selectList: [], //全选列表
        currentPage: 1, //当前页
        AllPagingNumber: 0 //总数量
      }, //已下线搜索条件
      offshelf: {
        dataValue: "", //日期选择
        fileTitle: "", //标题
        classifyValue: "", //所选资源分类
        classifyList: [], //所选资源分类列表
        selectList: [], //全选列表
        currentPage: 1, //当前页
        AllPagingNumber: 0 //总数量
      }, //已下架搜索条件
      inputValue: "", //添加作者
      dynamicTags: [], //添加标签
      keyWordsValue: "", //添加关键字
      keyWordsTags: [] //添加关键字列表
    };
  },
  mounted() {
    console.log(this.$route);
  },
  components: { siteHeader, siteFooter, systemLeftTab },
  methods: {
    handleSelectionChange(row) {
      console.log(row);
      if (this.activeName == "待发布") {
        this.form.selectList = row;
        return;
      } else if (this.activeName == "已发布") {
        this.already.selectList = row;
        return;
      } else if (this.activeName == "已下线") {
        this.offline.selectList = row;
        return;
      } else if (this.activeName == "已下架") {
        this.offshelf.selectList = row;
        return;
      }
    },
    //点开详情
    toogleExpand(row) {
      let $table = this.$refs.table;
      $table.toggleRowExpansion(row);
    },
    toogleExpandTableAlready(row) {
      let $table = this.$refs.tableAlready;
      $table.toggleRowExpansion(row);
    },
    toogleExpandTableOffline(row) {
      let $table = this.$refs.tableOffline;
      $table.toggleRowExpansion(row);
    },
    toogleExpandTableOffshelf(row) {
      let $table = this.$refs.tableOffshelf;
      $table.toggleRowExpansion(row);
    },
    // 删除作者
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      if (this.dynamicTags.length <= 0) {
        this.ruleForm.author = this.dynamicTags[0];
      }
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
    // tab页切换
    handleClick() {},
    // 页码切换
    nextClick() {},
    // 搜索
    searchBtn() {
      // let starteDateTime =
      //   this.dateFilter("yyyy-MM-dd", this.dataValue[0]) + " 00:00:00";
      // let endDateTime =
      //   this.dateFilter("yyyy-MM-dd", this.dataValue[1]) + " 23:59:59";
    },
    alreadySearchBtn() {
      // let starteDateTime =
      //   this.dateFilter("yyyy-MM-dd", this.dataValue[0]) + " 00:00:00";
      // let endDateTime =
      //   this.dateFilter("yyyy-MM-dd", this.dataValue[1]) + " 23:59:59";
    },
    offlineSearchBtn() {},
    offshelfSearchBtn() {},
    // 发布
    handleSubmit() {
      this.$alert("确认发布", "发布", {
        confirmButtonText: "确定",
        callback: action => {}
      });
    },
    // 下线
    handleOutLine() {
      this.$alert("确认下线", "下线", {
        confirmButtonText: "确定",
        callback: action => {}
      });
    },
    // 编辑
    handleEdit(user) {
      this.editDialog = !this.editDialog;
    },
    // 操作
    handleDelete() {
      this.$alert("确认删除", "删除", {
        confirmButtonText: "确定",
        callback: action => {}
      });
    },
    //下载
    handleDown() {
      console.log("下载");
    },
    editDialogBtn() {
      let formName = "ruleForm";
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.editDialog = false;
          console.log(
            this.ruleForm,
            this.keyWordsTags,
            this.dynamicTags,
            "this.ruleForm"
          );
          return;
        } else {
          return;
        }
      });
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
  },
  /** 标题单元格字体格式*/
  cellStyle: function(row, column, rowIndex, columnIndex) {
    if (row.column.label === "标题") {
      return "font-weight:bold";
    } else {
      return "";
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
  color: #333333;
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
.elPagination {
  margin-top: 10px;
  text-align: center;
}
// 固定内容盒子
.content {
  width: 1400px;
  overflow: hidden;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  .resourceSystem {
    width: 1220px;
    padding: 0 20px 10px 20px;
    margin-left: 180px;
    border-left: solid 1px #e6e6e6;
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
    .datePicker,
    .w100 {
      width: 100%;
    }
    .confidenceBox {
      margin: 4px 0 20px 10px;
      overflow: hidden;
    }
  }
  .input-new-tag {
    position: relative;
    z-index: 2;
  }
  .el-table--enable-row-transition .el-table__body td {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap !important;
  }
  .ruleInputTop {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }

  .demo-table-expand .el-form-item {
    margin-bottom: 0 !important;
  }
  // table
  .detailTitle {
    color: #478fca !important;
    font-size: 15px;
    font-weight: 600;
    line-height: 30px;
  }
  .detailClock {
    color: #ff892a !important;
    font-weight: 700;
    margin-left: 8px;
    font-size: 13px;
    vertical-align: middle;
  }
  .authorName {
    color: #478fca;
    font-weight: 600;
    width: auto;
    text-overflow: inherit;
    vertical-align: middle;
  }
  .detailTime {
    vertical-align: middle;
    color: #777 !important;
    font-size: 13px;
  }
  .el-table td,
  .el-table th {
    padding: 4px 0 !important;
  }
  .doubleLine {
    border: 3px double #e3e3e3;
    border-left: none;
    border-right: none;
    padding-left: 4px;
  }
  .blackColor {
    color: #333333;
  }
  .w100f {
    width: 100%;
  }
  .fileName {
    color: #478fca;
    font-weight: 600;
    width: auto;
    margin-top: 5px;
    text-overflow: inherit;
    vertical-align: middle;
  }
  .fileTitle {
    color: #4386c0;
    margin-top: -9px;
    font-size: 13px;
  }
  .el-table__expanded-cell {
    padding: 10px !important;
  }
  .fileTitle .title {
    cursor: pointer;
    color: #23527c;
    margin-top: -8px;
    font-size: 13px;
  }
  .fileTitle .el-icon-download,
  .fileTitle .el-icon-view {
    color: #23527c;
    font-weight: 600;
    font-size: 14px;
    margin-left: 6px;
    cursor: pointer;
  }
  .wordbreak {
    width: 100%;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow: hidden;
  }
  .operation i {
    font-size: 14px;
  }
}
</style>

