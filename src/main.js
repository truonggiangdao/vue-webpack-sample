/**
 * The main Vue.js application file
 *
 * @author: Giang Dao
 */
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './components/App';

require('./components/components.js');
require('./directives/directives.js');
require('./filters/filters.js');
require('./assets/styles.js');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h('App'),
  components: { App },
});
