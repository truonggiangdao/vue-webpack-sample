import Vue from 'vue';
import Vuex from 'vuex';
import * as orientations from './orientations.const';

Vue.use(Vuex);

/**
 * Main App Store
 *
 * @author: Giang Dao
 */
export default new Vuex.Store({
  state: {
    showLoadIcon: false,
    title: '',
    menuOpen: false,
    clickingStack: [],
    loadingStack: [],
    openDialogs: [],
    error: null,
    device: null, // Object|null tell if user is on mobile device
    orientation: null, // String (portrait|landscape)
    onSmallScreen: false,
    onLandscapeSmallScreen: false,
  },
  getters: {
    loadingIcon({ showLoadIcon }) {
      return showLoadIcon;
    },
    loading({ loadingStack }) {
      return loadingStack.length > 0;
    },
    isMenuOpen(state) {
      return state.menuOpen;
    },
    isClickingDisabled(state) {
      return state.clickingStack.length > 0;
    },
    isDialogOpen({ openDialogs }) {
      return openDialogs.length > 0;
    },
    getSiteTitle({ title }) {
      return title;
    },
    getDevice({ device }) {
      return device;
    },
    getOrientation({ orientation }) {
      return orientation;
    },
    isMobilePortrait({ device, orientation, onSmallScreen, onLandscapeSmallScreen }) {
      if (!device) {
        return onSmallScreen && !onLandscapeSmallScreen;
      }
      return device && device.phone && orientation === orientations.PORTRAIT;
    },
    IsPortrait({ orientation }) {
      return orientation === orientations.PORTRAIT;
    },
    IsLandscape({ orientation }) {
      return orientation === orientations.LANDSCAPE;
    },
    getOnSmallScreen({ onSmallScreen }) {
      return onSmallScreen;
    },
    getOnLandscapeSmallScreen({ onLandscapeSmallScreen }) {
      return onLandscapeSmallScreen;
    },
  },
  mutations: {
    setLoadingIcon(state, param) {
      // eslint-disable-next-line
      console.log('here', Boolean(param));
      // eslint-disable-next-line
      state.showLoadIcon = Boolean(param);
    },
    disableBtnClick(state) {
      state.clickingStack.push(new Date().toISOString());
      setTimeout(() => {
        state.clickingStack.pop();
      }, 500);
    },
    toggleLoading(state, payload) {
      if (payload) {
        state.loadingStack.push(new Date().toISOString());
      } else {
        state.loadingStack.pop();
      }
    },
    toggleMenu(state, payload) {
      if (typeof payload === 'boolean') {
        state.menuOpen = payload;
      } else {
        state.menuOpen = !state.menuOpen;
      }
    },
    setSiteTitle(state, newTitle) {
      if (typeof newTitle === 'string') {
        state.title = newTitle;
      } else {
        state.title = '';
      }
    },
    setDevice(state, payload) {
      if (typeof payload === 'object') {
        state.device = {
          phone: (payload.phone && payload.phone !== false),
          tablet: (payload.tablet && payload.tablet !== false),
        };
      }
    },
    setOrientation(state, payload) {
      if (typeof payload === 'string') {
        if (payload === orientations.PORTRAIT) {
          state.orientation = orientations.PORTRAIT;
        } else {
          state.orientation = orientations.LANDSCAPE;
        }
      }
    },
    setOnSmallScreen(state, payload) {
      state.onSmallScreen = (payload && payload !== false);
    },
    setOnLandscapeSmallScreen(state, payload) {
      state.onLandscapeSmallScreen = (payload && payload !== false);
    },
    toggleDialog(state, payload) {
      if (payload) {
        state.openDialogs.push(new Date().toISOString());
      } else {
        state.openDialogs.pop();
      }
    },
  },
  modules: {
  },
});
