import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Filter from './assets/js/filter'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

for (let i in Filter) {
  Vue.filter(Filter[i].name, Filter[i].handler)
}

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
