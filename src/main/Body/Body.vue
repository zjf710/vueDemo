<template>
  <div class="zeus-business-container">
    <div class="zeus-component-container" v-for="(currentView, key) in currentViews" :key="key">
      <component :is="currentView.component" v-bind="currentView.props">
        <!-- 组件在 vm.currentview 变化时改变！ -->
      </component>
    </div>
  </div>
</template>

<script>
  import DefaultForm from '../../components/Form/DefaultForm';
  import './index.scss';

  export default {
    name: 'Body',
    props: {
      componentList: {
        type: Array
      }
    },
    data() {
      const currentViews = [];
      const components = {
        DefaultForm
      };

      this.componentList.forEach((componentProps) => {
        currentViews.push({
          props: componentProps,
          component: components[componentProps.component]
        });
      });
      return {
        currentViews
      };
    },
    components: {
      DefaultForm
    }
  };
</script>
