<template>
  <zs-layout class="zeus-home">
    <Sidebar slot="navbar" :myMessage="myMessage" />
    <router-view />
  </zs-layout>
</template>

<script>
  import Sidebar from '../../components/Sidebar/Sidebar';

  export default {
    name: 'Home',
    data() {
      return {
        myMessage: 'myMessage12'
      };
    },
    components: {
      Sidebar
    }
  };
</script>
