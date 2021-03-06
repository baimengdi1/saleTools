import {
  fetchPost,
  fetchGet
} from './index'

export default {

  RegistVerifiCode(phone) {
    return fetchPost('/login/createcode', {
      phone
    })
  },
  /* 首页banner */
  banner(params) {
    return fetchPost('/banner/list', params)
  },
  //购物车单个下单上传知情同意书
  uploadAgreeFileNew(params){
    return fetchPost('/frontOrder/agreeFile/submit/uploadAgreeFileNew', params)
  },
  /* 用户登录接口 */
  loginOk(params) {
    return fetchPost('/renren-admin/login', params)
  },
  /* 用户退出登录接口 */
  loginOut(params) {
    return fetchPost('/renren-admin/logout', params)
  },
  /* 用户登录日志接口 */
  logLogin(params) {
    return fetchPost('/renren-admin/sys/log/login', params)
  },  
  /* 用户登录异常日志接口 */
  loginError(params) {
    return fetchPost('/renren-admin/sys/log/error', params)
  },  
  /* 修改密码接口 */
  updatePassword(params) {
    return fetchPost('/frontOrder/user/updatePassword', params)
  },
  /* 获取样本下拉列表 */
  getSampleTypes(params) {
    return fetchPost('/frontOrder/sample/getSampleTypes', params)
  },
  /* 检测项目查询(根据样本类型) */
  getCustomerProjectByCustomerCodeAndSampleType(params) {
    return fetchPost('/frontOrder/sample/getCustomerProjectByCustomerCodeAndSampleType', params)
  },
  /* 上传知情同意书 */
  uploadAgreeFile(params) {
    return fetchPost('/frontOrder/agreeFile/submit/uploadAgreeFile', params)
  },
  /* 上传患者临床信息图片 */
  uploadFiles(params) {
    return fetchPost('/frontOrder/clinical/submit/uploadFiles', params)
  },
  /* 获取终端医院科室信息 */
  getHospitalDepatrment(params) {
    return fetchPost('/frontOrder/firstClassCustomer/getHospitalDepatrment', params)
  },
  /* 单个下单-订单确认-提交订单 */
  submitOrder(params) {
    return fetchPost('/frontOrder/order/submitOrder', params)
  },
  /* 单个下单-订单确认-提交订单 */
  batchAddShoppingCartSingle(params) {
    return fetchPost('/frontOrder/shoppingCart/submit/batchAddShoppingCartSingle', params)
  },
  //批量下单下载模板
  bulkImportDownload(params) {
    return fetchGet('/frontOrder/bulkImport/download', params)
  },
  // 批量下单页面--查询
  getOrderDeatilsTempByType(params) {
    return fetchPost('/frontOrder/bulkImport/getOrderDeatilsTempByType', params)
  },
  // 批量下单页面--下载上传订单模板
  download(params) {
    return fetchPost('/frontOrder/bulkImport/download', params)
  },
  //批量下单上传知情同意书 
  BuploadAgreeFile(params){
    return fetchPost('/frontOrder/bulkImport/submit/uploadAgreeFile', params)
  },
  //批量下单上传订单
  propertyImport(params){
    return fetchPost('/frontOrder/bulkImport/propertyImport', params)
  },
  // thirdLabUploadOrder
  thirdLabUploadOrder(params){
    return fetchPost('/frontOrder/bulkImport/thirdLabUploadOrder', params)
  },
  ///查询地址
  getCustomerMailAddressByCustomerCodeAndProjectCode(params){
    return fetchPost('frontOrder/customerMailAddress/view/getCustomerMailAddressByCustomerCodeAndProjectCode', params)
  },
  // 批量下单页面--清空数据
  clearData(params) {
    return fetchPost('/frontOrder/bulkImport/clearData', params)
  },
  // 第三方清除
  clearDataThird(params) {
    return fetchPost('/frontOrder/bulkImport/clearDataThird', params)
  },
  // 批量下单页面--编辑（修改一条数据，整体提交）
  update(params) {
    return fetchPost('/frontOrder/bulkImport/submit/update', params)
  },
  // （该接口无效，暂时不用）批量下单页面--提交订单（只提交没有问题的数据） wrong 1 正常 2 有问题
  batchCreateOrder(params) {
    return fetchPost('/frontOrder/bulkImport/submit/batchCreateOrder', params)
  },
  // 批量下单页面--删除单行
  deleteById(params) {
    return fetchPost('/frontOrder/bulkImport/deleteById', params)
  },
  //单个下单上传知情同意书 /frontOrder/bulkImport/submit/uploadAgreeFile
  uploadAgreeFile(params){
    return fetchPost('/frontOrder/agreeFile/submit/uploadAgreeFile', params)
  },
  // 我的订单
  myOrder(params) {
    return fetchPost('/frontOrder/order/getOrdersList', params)
  },  // 我的订单详情
  myOrderDetail(params) {
    return fetchPost('/frontOrder/order/showDetail', params)
  },
  //个人中心
  personalDataUI(params) {
    return fetchPost('/center/personalDataUI', params)
  },
  //修改密码
  updatePassword(params) {
    return fetchPost('/frontOrder/user/updatePassword', params)
  },
  // 关于欧蒙
  aboutOuMengUI(params) {
    return fetchPost('/center/aboutOuMengUI', params)
  },
  // 退单
  cancelOrder(params) {
    return fetchPost('/frontOrder/order/cancelOrder', params)
  },
  //加项
  orderApplyAddItem(params) {
    return fetchPost('/frontOrder/order/orderApplyAddItem', params)
  },
  //加项验证
  addItemCheck(params) {
    return fetchPost('/frontOrder/order/getOrderApplyAddItemBarCode', params)
  },
  // 快递单号录入
  inputOrderLogisticsNo(params) {
    return fetchPost('/frontOrder/logistics/inputOrderLogisticsNo', params)
  },
  //查询购物车
  getShoppingCart(params) {
    return fetchPost('/frontOrder/shoppingCart/view/getShoppingCart', params)
  },
  //删除购物车
  batchDeleteById(params) {
    return fetchPost('/frontOrder/shoppingCart/batchDeleteById', params)
  },
  //管理门户——————————————————————————————————————————————————————————————————————————
  // 订单管理查询
  getManageOrdersList(params) {
    return fetchPost('/frontOrder/order/getManageOrdersList', params)
  },
  // 订单统计
  getOrderStatic(params) {
    return fetchPost('/frontOrder/order/getOrderStatic', params)
  },
   // 授权医院查询
   getAuthorityHospital(params) {
    return fetchPost('/frontOrder/order/getAuthorityHospital', params)
  },
  //授权账号查询
  getAuthorityUserInfo(params) {
    return fetchPost('/frontOrder/order/getAuthorityUserInfo', params)
  },
   // 医院科室信息查询
   getHospitalInfo(params) {
    return fetchPost('/frontOrder/firstClassCustomer/getHospitalInfo', params)
  },
  //授权账号 禁用/启用
  changeUserState(params) {
    return fetchPost('/frontOrder/order/changeUserState', params)
  },
  // 财务管理 ——————————————————————————————————————————————————————————————————————
  //支付订单查询
  getPayOrdersList(params) {
    return fetchPost('/frontOrder/order/getPayOrdersList', params)
  },
  //对账单列表查询
  getStatementList(params) {
    return fetchPost('/frontOrder/order/getStatementList', params)
  },
  //对账单详情查询
  getStatementDetail(params) {
    return fetchPost('/frontOrder/order/getStatementDetail', params)
  },
  //发票号录入
  inputStatement(params) {
    return fetchPost('/frontOrder/order/inputStatement', params)
  },
  //对账拒绝
  rebackStatement(params) {
    return fetchPost('/frontOrder/order/rebackStatement', params)
  },
  // 支付/yeePayWeChat/generatePayUrl
  generatePayUrl(params) {
    return fetchPost('/frontOrder/yeePayWeChat/generatePayUrl', params)
  },
  // 首页
   // Tabs页类型查询
   getClassification(params) {
    return fetchPost('/firstPage/getClassification', params)
  },
   // 主页详情查询
   proectLsit(params) {
    return fetchPost('/firstPage/proectLsit', params)
  },
   // 项目详情查询
  getProjectDetail(params) {
    return fetchPost('/firstPage/getProjectDetail', params)
  },
  //详情下载同意书
  agreeFileDownload(params) {
    return fetchPost('/frontOrder/agreeFile/download', params)
  },
  //对账订单确认
  inputStatement(params) {
    return fetchPost('/frontOrder/order/inputStatement', params)
  },
  //对账订单拒绝
  rebackStatement(params) {
    return fetchPost('/frontOrder/order/rebackStatement', params)
  },
  // --------------------------------------------------------------------
  // 查询报告 
  getOrderDetailReport(params) {
    return fetchPost('/frontOrder/orderTwo/getOrderDetailReport', params)
  },
  // 校验是否生成报告,(打包下载)
  isAllGenerateReport(params,id,pdfArr) {
    return fetchPost("/frontOrder/downloadZip/isAllGenerateReport?id="+id+"&orderDetailsIds="+pdfArr, params)
  },
  // 校验是否生成报告,(批量下载)
  AllGenerateReport(params,id) {
    return fetchPost("/frontOrder/downloadZip/isAllGenerateReport?id="+id, params)
  },
  //修改
  changeUserName(params) {
    return fetchPost("/frontOrder/order/changeUserName", params)
  },
  //生单验证
  barCodeTest(params) {
    return fetchPost("/frontOrder/order/barCodeTest", params)
  },
  // 批量生单
  batchBarCodeTest(params) {
    return fetchPost("/frontOrder/order/batchBarCodeTest", params)
  },
  //查询客户类型和查询客户名称
  getAuthorityCustomers(params) {
    return fetchPost("/frontOrder/user/getAuthorityCustomers", params)
  },
  //加项申请
  orderApplyAddItem(params) {
    return fetchPost("/frontOrder/order/orderApplyAddItem", params)
  },
  // 获取第三方实验室/frontOrder/firstClassCustomer/getThirdLab
  getThirdLab(params) {
    return fetchPost("/frontOrder/firstClassCustomer/getThirdLab", params)
  },
  // 我的订单删除
  deleteOrderDetailsId(params) {
    return fetchPost("/frontOrder/order/deleteOrderDetailsId", params)
  },
  //根据客户编码查询终端列表
  getDepatrmentsByAgentCode(params){
    return fetchPost('/frontOrder/firstClassCustomer/getDepatrmentsByAgentCode',params)
  },
  // 导出我的订单
  exportMyOrder(params){
    return fetchPost('/frontOrder/order/exportMyOrder',params)
  },
  //组套列表
  getFirstClassPriceGroupProjectsByCustomerCode(params){
    return fetchPost('/frontOrder/firstClassCustomer/getFirstClassPriceGroupProjectsByCustomerCode',params)
  },
   //组套详情
   getProjectsByParentProjectCode(params){
    return fetchPost('/frontOrder/firstClassCustomer/getProjectsByParentProjectCode',params)
  },
  //组套加入购物车
  groupAddShoppingCartSingle(params){
    return fetchPost('/frontOrder/shoppingCart/submit/groupAddShoppingCartSingle',params)
  },
  ///根据项目编码查询样本子类型(组套)
  getDictionaryByProjectCode(params){
    return fetchPost('/frontOrder/firstClassCustomer/view/getDictionaryByProjectCode',params)
  },
  //购物车查询组套详情
  getGroupShoppingCartItemsByParentId(params){
    return fetchPost('/frontOrder/shoppingCart/submit/getGroupShoppingCartItemsByParentId',params)
  },
  //我的订单组套详情查询
  getGroupOrderDetailsByParentId(params){
    return fetchPost('/frontOrder/order/getGroupOrderDetailsByParentId',params)
  },
  // 普通购物车修改：/frontOrder/shoppingCart/updateOrderDetails
  updateOrderDetails(params){
    return fetchPost('/frontOrder/shoppingCart/updateOrderDetails',params)
  },
  // 组套购物车修改：/frontOrder/shoppingCart/updateGroupOrderDetails
  updateGroupOrderDetails(params){
    return fetchPost('/frontOrder/shoppingCart/updateGroupOrderDetails',params)
  },
  //修改科室查询 /frontOrder/firstClassCustomer/getHospitalDepatrmentByAgentCodeAndProjectCode
  getHospitalDepatrmentByAgentCodeAndProjectCode(params){
    return fetchPost('/frontOrder/firstClassCustomer/getHospitalDepatrmentByAgentCodeAndProjectCode',params)
  },
  // 项目编码查询子类型
  getDictionaryByProjectCode(params){
    return fetchPost('frontOrder/firstClassCustomer/view/getDictionaryByProjectCode',params)
  },
  // 普通订单修改：/frontOrder/order/updateOrderDetails
  orderUpdateOrderDetails(params){
    return fetchPost('/frontOrder/order/updateOrderDetails',params)
  },
  // 组套订单修改：/frontOrder/order//updateGroupOrderDetails
  orderpdateGroupOrderDetails(params){
    return fetchPost('/frontOrder/order/updateGroupOrderDetails',params)
  },
  //申请修改/frontOrder/order/applyEdit
  applyEdit(params){
    return fetchPost('/frontOrder/order/applyEdit',params)
  },
}


// const WechatAPI = {
//   signature: params => instance.post('', { params, header: { api: 'common.weixin.sign-package' } }),
// };
