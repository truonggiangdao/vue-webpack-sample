/**
 * Filter: friendlyDate
 * Show datetime in format of "how long from now"
 *
 * @author: Giang Dao
 */
import Vue from 'vue';

Vue.filter('friendlyDate', (value) => {
  if (!value) {
    return '';
  }
  if (value.constructor !== Date) {
    return '';
  }
  return Vue.moment(value).fromNow();
});
