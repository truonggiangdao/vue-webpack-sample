/**
 * Filter: toHtmlChars
 * Split words into characters
 *
 * @author: Giang Dao
 */
import Vue from 'vue';

Vue.filter('toHtmlChars', (value) => {
  if (!value) {
    return '';
  }
  const chars = value.toString().split('');
  let result = '<span class="word-split">';
  chars.forEach((char) => {
    if (char === ' ') {
      result += '</span> <span class="word-split">';
    } else {
      result += `<span class="char-split">${char}</span>`;
    }
  });
  result += '</span>';
  return result;
});
