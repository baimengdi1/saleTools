import Vue from 'vue'
import Router from 'vue-router'
// 登录
import login from '@/pages/login'
// 首页
import index from '@/pages/index'
// 搜索
import search from '@/pages/search'
// 意见建议
import suggestions from '@/pages/suggestions'
// 资源详情
import resourceDetails from '@/pages/resourceDetails'

// 资源上传
import resourceUpload from '@/pages/resourceUpload'
//意见管理
import opinionManage from '@/pages/opinionManage'
//资源管理
import resourceManage from '@/pages/resourceManage'
// 用户权限管理
import userRightsManage from '@/pages/userRightsManage'
// 角色管理
import roleManage from '@/pages/roleManage'
// 日志管理
import logManage from '@/pages/logManage'
// 字典管理
import dictionaryManage from '@/pages/dictionaryManage'

Vue.use(Router)

// export default new Router({
const router = new Router({
  // mode: 'history',
  routes: [
    // {
    //   path: '/chansuokuang',
    //   name: 'chansuokuang',
    //   component: chansuokuang
    // },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },{
      path: '/resourceDetails',
      name: 'resourceDetails',
      component: resourceDetails
    },{
      path: '/resourceUpload',
      name: 'resourceUpload',
      component: resourceUpload
    },{
      path: '/suggestions',
      name: 'suggestions',
      component: suggestions
    },
    {
      path: '/resourceManage',
      name: 'resourceManage',
      component: resourceManage
    },
    {
      path: '/opinionManage',
      name: 'opinionManage',
      component: opinionManage
    }, {
      path: '/userRightsManage',
      name: 'userRightsManage',
      component: userRightsManage
    },{
      path: '/roleManage',
      name: 'roleManage',
      component: roleManage
    },{
      path: '/logManage',
      name: 'logManage',
      component: logManage
    },{
      path: '/dictionaryManage',
      name: 'dictionaryManage',
      component: dictionaryManage
    }
  ]
})

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
// router.beforeEach((to, from, next) => {
//   const isLogin = window.localStorage.getItem("token");
//   const isopenid = window.localStorage.getItem("openid");
//   let isWeiXin = () => {
//     return (
//       navigator.userAgent.toLowerCase().indexOf("micromessenger") !== -1
//     );
//   };

//   // 解决ios微信分享
//   let u = navigator.userAgent;
//   let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
//   // XXX: 修复iOS版微信HTML5 History兼容性问题
//   if (isiOS && to.path !== location.pathname) {
//     // 此处不可使用location.replace
//     location.assign(to.fullPath)
//   } else {
//     next()
//   }

//   // 获取分享用户ID
//   if (to.query.pid) {
//     window.localStorage.setItem("pid", to.query.pid);
//   }
//   if (to.path == "/editInformation" && to.path != "/TheCertificateCase") {
//     window.localStorage.setItem("radar", to.path);
//   }

//   if (isWeiXin()) {
//     window.sessionStorage.setItem("weixin", true);
//     if (to.meta.isTrue) {
//       if (isopenid) {
//         next();
//       } else {
//         next({
//           path: '/load'
//         })
//       }
//     } else {
//       next()
//     }
//     next();
//   } else {
//     window.sessionStorage.setItem("weixin", false);
//     if (to.meta.isTrue) {
//       if (isLogin) {
//         next();
//       } else {
//         next({
//           path: '/login'
//         })
//       }
//     } else {
//       next()
//     }
//   }

// })

export default router
