/**
 * Utilities for doing math
 *
 * @author: Giang Dao
 */
export default {
  getRandomInt(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  },
};
