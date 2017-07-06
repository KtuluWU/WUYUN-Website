// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store.js'
import VueI18n from 'vue-i18n'
import fr from './i18n/fr'
import en from './i18n/en'
import zh from './i18n/zh'
// import VueResource from 'vue-resource'

// Vue.config.productionTip = false

/************ Plugin Vue-Resource *****************/
// Vue.use(VueResource);
/**************************************************/

/************** Plugin Vue-i18n *******************/
Vue.use(VueI18n);
const locales = {
  fr: fr,
  en: en,
  cn: zh
};

Vue.config.lang = store.state.lang;

Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
});
/***************************************************/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
