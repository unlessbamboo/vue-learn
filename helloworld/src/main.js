/* 入口文件 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// 不需要编译器, 此时文件内部的模板会在构建时预编译成 Javascript, 之后就可以直接运行了.
new Vue({
  render: h => h(App),
}).$mount('#app');
