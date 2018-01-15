<template>
  <div class="zeus-menu">
    <router-link class="menu-item" v-for="item in menu" :to="`/${item.name}`">
        <span class="icon-container">
          <i :class="`anticon icon-${item.iconName}`" />
        </span>
      <span>{{item.title}}</span>
    </router-link>
  </div>
</template>

<script>
  import { menu } from '../../configs/Soul';
  import './index.scss';

  export default {
    name: 'Menu',
    data() {
      return {
        menu
      };
    }
  };
</script>
