/**
 * Created by jason on 17/10/9.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Cookie from 'js-cookie';

import Home from './main/Home/Home';
import Login from './main/Login/Login';
import RouterConfigs from './configs/RouterConfigs';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: '/login',
    component: Login
  }, {
    path: '/home',
    component: Home,
    children: RouterConfigs
  }, {
    path: '/',
    redirect: '/home'
  }]
});

/* eslint no-unused-vars:off */
// 全局守卫，监听路由变化
router.beforeEach((to, from, next) => {
  // 路由变化之前处理
  const token = Cookie.get('token');
  if (to.path !== '/login' && !token) {
    next('/login');
  } else if (to.matched.length === 0) {
    // 如果未匹配到路由
    if (from.name) {
      // 如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
      next({ name: from.name });
    } else {
      next('/home');
    }
  } else {
    next();
  }
});
// 路由改变之后
router.afterEach((to, from) => {
  // 路由变化之后处理
});

export default router;
