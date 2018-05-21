/**
 * The main Vue.js application file
 *
 * @author: Giang Dao
 */
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './components/App';

import './components/components';
import './directives/directives';
import './filters/filters';
import './assets/styles';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h('App'),
  components: { App },
});
