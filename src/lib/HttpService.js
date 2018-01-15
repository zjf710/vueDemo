import {
  api_base
} from 'app.config';
import VueResource from 'vue-resource';

// 请求前的处理
/* eslint no-unused-vars:off */
function beforeRequest(request) {
  // console.log(request);
  // console.log(request.getBody());
}

// 请求回来后的处理
function requestComplete(response) {
  // response.text();
}

export default (VueTemp) => {
  const Vue = VueTemp;
  // 注册VueResource
  Vue.use(VueResource);

  Vue.http.options.root = api_base;
  Vue.http.interceptor.before = (request, next) => {
    // override before interceptor
    next();
  };
  // 请求总线
  Vue.http.interceptors.push((request, next) => {
    beforeRequest(request);

    // continue to next interceptor
    next((response) => {
      // modify response
      requestComplete(response);
    });
  });
};
