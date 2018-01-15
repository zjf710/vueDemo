<template>
  <default-form
    :onSubmit="login"
    :formItems="formItems"
  />
</template>

<script>
  import Cookie from 'js-cookie';
  import DefaultForm from '../../components/Form/DefaultForm';

  export default {
    name: 'Login',
    components: {
      DefaultForm
    },
    data() {
      return {
        formItems: [{
          name: 'username',
          label: '用户名',
          placeholder: '请输入用户名',
          required: true
        }, {
          name: 'password',
          type: 'password',
          label: '密码',
          placeholder: '请输入密码',
          required: true
        }]
      };
    },
    methods: {
      login(params) {
        this.$http.post('auth/login', params)
          .then((res) => {
            const {
              status,
              token,
              message
            } = res.data;

            if (status === 200) {
              // 1天过期
              Cookie.set('token', token, {
                expires: 1
              });
              this.$router.push('/');
            } else {
              this.$dialog.toast({
                closeOnClickModal: true,
                mes: message || '登录失败',
                timeout: 3000
              });
            }
          });
      }
    }
  };
</script>
