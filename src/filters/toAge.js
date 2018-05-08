/**
 * Filter: toHtmlChars
 * Split words into characters
 *
 * @author: Giang Dao
 */
import Vue from 'vue';

Vue.filter('toAge', (value) => {
  if (!value) {
    return '';
  }
  if (Number(value) <= 0) {
    return '';
  }
  const currentYear = new Date().getFullYear();
  if (currentYear - Number(value) <= 0) {
    return '';
  }
  return String(currentYear - Number(value));
});
