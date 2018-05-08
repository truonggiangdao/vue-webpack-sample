// dispatch a new scroll event on window when element is scrolled
import Vue from 'vue';

function dispatchScrollEvent() {
  window.dispatchEvent(new Event('scroll'));
}

Vue.directive('scroll-dispatch', (el) => {
  el.addEventListener('scroll', dispatchScrollEvent);
});
