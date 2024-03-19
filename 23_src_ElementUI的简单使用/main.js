import Vue from 'vue';
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入ElementUI组件库
import {Button, Row} from 'element-ui'

import App from './App.vue'

Vue.config.productionTip = false

// 应用ElementUI
// Vue.use(ElementUI)

// 声明全局组件（可以自己改名字）
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);


new Vue({
    el:'#app',
    render : h => h(App)
})