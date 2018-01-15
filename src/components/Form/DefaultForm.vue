<template>
  <form
    class="zues-default-form"
    @submit="submit"
  >
    <zs-cell-group>
      <zs-cell-item v-for="(item, key) in formItemList" :key="key">
        <span slot="left">{{item.label}}：</span>
        <zs-input
          slot="right"
          v-model="item.value"
          :max="item.max"
          :min="item.min"
          :ref="item.name"
          :regex="item.regex"
          :placeholder="item.placeholder || '请输入'"
          :type="item.type"
          :readonly="item.readonly"
        />
      </zs-cell-item>
    </zs-cell-group>
    <zs-button action-type="submit" type="primary" size="large">
      提交
    </zs-button>
  </form>
</template>

<script>
  import _ from 'lodash';
  import './index.scss';

  export default {
    name: 'DefaultForm',
    props: {
      'form-items': {
        type: Array,
        default: () => ([])
      },
      url: {
        type: String,
        default: ''
      },
      onSubmit: {
        type: Function
      }
    },
    data() {
      const {
        formItems
      } = this;

      const formItemList = _.cloneDeep(formItems);

      return {
        formItemList
      };
    },
    methods: {
      submit(e) {
        e.preventDefault();
        const {
          formItemList,
          onSubmit
        } = this;

        for (let i = 0; i < formItemList.length; i += 1) {
          const item = formItemList[i];
          // 验证是否为空
          if ((item.required === undefined || item.required) && !item.value) {
            this.$dialog.toast({
              mes: `${item.label}为必填项`
            });
            return;
          }

          // 如果指定格式，则验证格式
          if (item.regex) {
            const input = this.refs[item.name];
            // 验证格式
            if (input.valid) {
              this.$dialog.toast({
                mes: input.errorMsg
              });
              return;
            }
          }
        }

        // 提供回调
        if (onSubmit) {
          const formFieldValues = {};
          // 绑定form数据
          formItemList.forEach((item) => {
            formFieldValues[item.name] = item.value;
          });
          onSubmit(formFieldValues);
        }
        console.log(this.data);
      }
    }
  };
</script>
