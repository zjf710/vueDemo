/**
 * Created by jason on 17/10/9.
 */

import Vue from 'vue';
// import Vuex from 'vuex';

import App from './App';
import router from './router';
import RegisterFilters from './lib/RegisterFilters';
import RegisterComponent from './lib/RegisterComponent';
import RegisterHttpService from './lib/HttpService';
import './index.scss';

// 注册普通组件
RegisterComponent(Vue);
// 注册过滤器
RegisterFilters(Vue);
// 注册http组件
RegisterHttpService(Vue);

// Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  router,
  el: '#root',
  template: '<App />',
  components: { App }
});
