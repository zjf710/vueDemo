<template>
  <div id="root">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    beforeCreate() {
      // 设备判断
      const u = navigator && navigator.userAgent;
      const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      this.$root.isiOS = isiOS;
    }
  };
</script>
