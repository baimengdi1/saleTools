module.exports = {
	proxyList: {
		  '/apis': {
			  // 测试环境
			//   target: 'http://tatmiapi.weiyingjia.org',  //测试接口域名
				// target: 'http://10.61.35.30:7000',  // 接口域名
				target: 'http://demo.oumeng.com.cn',    
				// target: 'http://10.61.35.25:8080',  // 子铭域名
				// target: 'http://10.61.35.16:8080',  // 飞鹤域名
				// target: 'http://10.61.35.28:8081',  //亚刚
				// target: 'http://10.61.30.58:8080',  // 接口域名
				// target:'http://10.61.35.26:8080',//慧敏
			  changeOrigin: true,  //是否跨域
			  pathRewrite: {
				  '^/apis': '/'   //需要rewrite重写的,
			  }              
		  }
	}
}