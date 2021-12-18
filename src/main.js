import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import JsonExcel from 'vue-json-excel';
import store from './_store/index';
import App from './App.vue';
import router from './router';
// eslint-disable-next-line import/no-duplicates
import DynamicText from './components/dynamicText';
// eslint-disable-next-line import/no-duplicates
import eventPropagator from './mixins/eventPropagator';

Vue.config.devtools = true;

const opts = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#00274c',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
      dark: {
        primary: '#00274c',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
  icons: {
    iconfont: 'mdiSvg',
  },
  breakpoint: {
    thresholds: {
      xs: 600,
      sm: 980,
      md: 1400,
      lg: 1800,
    },
    scrollBarWidth: 24,
  },
};

Vue.use(Vuetify);

Vue.use(Vuex);

Vue.component('ValidationProvider', ValidationProvider);

extend('required', {
  ...required,
  message: 'This field is required',
});

Vue.component('downloadExcel', JsonExcel);

Vue.config.productionTip = false;

const vm = new Vue({
  el: '#app',
  data: { loading: false },
  router,
  store,
  components: { App, DynamicText },
  mixins: { eventPropagator },
  template: '<App/>',
  vuetify: new Vuetify(opts),
  computed: {
    propsData() { return { value: this.value }; },
  },
});

router.beforeEach((to, from, next) => {
  vm.loading = true;
  next();
});

global.vm = vm;
