import { Button } from 'vue-ydui/dist/lib.px/button';
import {
  Confirm,
  Alert,
  Toast,
  Notify,
  Loading
} from 'vue-ydui/dist/lib.px/dialog';
import { CellGroup, CellItem } from 'vue-ydui/dist/lib.px/cell';
import { Input } from 'vue-ydui/dist/lib.px/input';
import { Layout } from 'vue-ydui/dist/lib.px/layout';
import { NavBar } from 'vue-ydui/dist/lib.rem/navbar';

export default (VueTemp) => {
  const Vue = VueTemp;
  // 注册组件
  Vue.prototype.$dialog = {
    confirm: Confirm,
    alert: Alert,
    toast: Toast,
    notify: Notify,
    loading: Loading
  };

  Vue.component('zsButton', Button);
  Vue.component('zsCellGroup', CellGroup);
  Vue.component('zsCellItem', CellItem);
  Vue.component('zsInput', Input);
  Vue.component('zsLayout', Layout);
  Vue.component('zsNavBar', NavBar);
};
