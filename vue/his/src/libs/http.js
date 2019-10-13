import qs from "qs";
import axios from "axios";
import Vue from "vue";



// 加载进度条
// import loadingbar from 'components/LoadingBar';
let loadingCount = 0;

// tslint:disable-next-line:no-shadowed-variable
export const http = (function http() {
  let instance = axios.create({
    // timeout: 10000,
    // withCredentials: false,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    
    },
    transformRequest: [
      (data, config) => {
        if (!data) {
          return data;
        }

        // 如果是Form表单就直接跳过JSON转换
        if (data instanceof FormData) {
          // 如果上传包含文件, 更改 Content-Type
          // if(data.has('file')) {
          //   config['Content-Type'] = 'multipart/form-data';
          //   config['put']['Content-Type'] = 'multipart/form-data';
          //   config['post']['Content-Type'] = 'multipart/form-data';
          //   config['patch']['Content-Type'] = 'multipart/form-data';
          // }
          return data;
        }

        // 序列化data
        // if (data instanceof Object) {
        //   for (let key in data) {
        //     if (data.hasOwnProperty(key) && !data[key]) {
        //       delete data[key];
        //     }
        //   }
        //   return JSON.stringify(data);
        // }
        // return data;
        return qs.stringify(data, {
          arrayFormat: "brackets",
          strictNullHandling: false
        });
      }
    ]
  });

  // 处理发送数据到服务器前的一些配置
  instance.interceptors.request.use(function(request) {
    // 显示加载进度条
    // loadingbar.start();
    loadingCount++;

    // 正式部署后增加api开头方便nginx路由配置
    // 可考虑增加版本号
    // 不再需要全局添加
    // if (!/^(https?:)?\/\//.test(request.url) && !/^\/api/.test(request.url)) {
    //   request.url = `/api${request.url}`;
    // }

    // if (!__DEV__) {
    //   if (!/^(https?:)?\/\//.test(request.url)) {
    //       request.url = `/api${request.url}`;
    //   }
    // }
    // if (request.data && (request.headers['Content-Type'].indexOf('x-www-form-urlencoded') !== -1)) {
    //   // request.data = qs.stringify(request.data);
    // }

    return request;
  });

  // 处理接收服务器数据
  instance.interceptors.response.use(
    response => {
      //判断返回是否有权限
      //  if(response.data.code == "-403"){
      //   Message({
      //     showClose: true,
      //     message:'无权限请重新登录',
      //     type: 'error'
      //   });
      // //跳转到登录页面
      //   router.replace({
      //     path: '/login',
      //   })
      //  }
      // 结束进度条
    //   if (--loadingCount <= 0) {
    //     // loadingbar.finish();
    //   }

    //   if (response.status < 200 || response.status >= 300) {
    //     return Promise.reject(response.statusText);
    //   }
      // 服务器没有返回正确的JSON格式
    //   if (typeof response.data === "string" && !response.data) {
    //     Toast({
    //       message: "服务器没有响应正确的数据, 请检查参数是否正确。",
    //       duration: 1000
    //     });
    //     return Promise.reject(
    //       new Error("服务器没有响应正确的数据, 请检查参数是否正确。")
    //     );
    //   }
      // if (response.data && response.data.code < 0) {
      //   return Promise.reject('您还没有登录, 为您跳转到登录页');
      // }
      return Promise.resolve(response);
    },
    error => {
      // 关闭全屏进度条
      Toast({
        showClose: true,
        message: "网络错误, 请检查网络状况.",
        type: "error"
      });
      if (error && error.response) {
        return Promise.reject(
          new Error({
            status: error.response.status,
            statusText: error.response.statusText
          })
        );
      } else {
        return Promise.reject(
          new Error({ status: 500, statusText: "服务器故障" })
        );
      }
    }
  );

  return instance;
})();


export default http;