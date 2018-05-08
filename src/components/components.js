/**
 * Global components to be used in this application
 *
 * @author: Giang Dao
 */
import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VTextField,
  VList,
  VDialog,
  VSubheader,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCard,
  VParallax,
  transitions,
} from 'vuetify';
import VueMoment from 'vue-moment';
import Dash from './shared/Dash';
import Loading from './shared/Loading';
import ImgDefault from './shared/ImgDefault';

Vue.component('dash', Dash);
Vue.component('loading', Loading);
Vue.component('img-default', ImgDefault);

Vue.use(Vuetify, {
  components: {
    VApp,
    VTextField,
    VList,
    VDialog,
    VSubheader,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCard,
    VParallax,
    transitions,
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    white: '#FFFFFF',
  },
});
Vue.use(VueMoment);
