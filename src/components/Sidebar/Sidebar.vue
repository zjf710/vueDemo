<template>
  <div class="zeus-sidebar">
    <div :class="classObject">
      <i class="anticon icon-user" v-on:click="back" />
      <span>标题栏</span>
    </div>
  </div>
</template>

<script>
  import { environment } from 'app.config';

  import './index.scss';

  export default {
    name: 'sidebar',
    data() {
      return {
        environment,
        classObject: {
          'zeus-header': true,
          'ios-header-top': this.$root.isiOS
        }
      };
    },
    methods: {
      back() {
        this.$router.go(-1);
      }
    }
  };
</script>
