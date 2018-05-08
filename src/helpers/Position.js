/**
 * Utilities for checking current position of element in viewport
 *
 * @author: Giang Dao
 */
export default {
  isBeforeViewPort(rect) {
    return (rect.left + rect.width) < (rect.width / 3) ||
      (rect.top + rect.height) < (rect.height / 3);
  },
  isAfterViewPort(rect) {
    // eslint-disable-next-line
    return rect.left > ((window.innerWidth || document.documentElement.clientWidth) - (rect.width / 3)) ||
    // eslint-disable-next-line
      rect.top > ((window.innerHeight || document.documentElement.clientHeight) - (rect.height / 3));
  },
  inViewPort(rect) {
    // eslint-disable-next-line
    const inX = (rect.left + rect.width) >= (rect.width / 3) && rect.left <= ((window.innerWidth || document.documentElement.clientWidth) - (rect.width / 3));
    // eslint-disable-next-line
    const inY = (rect.top + rect.height) >= (rect.height / 3) && rect.top <= ((window.innerHeight || document.documentElement.clientHeight) - (rect.height / 3));

    return inX && inY;
  },
  inAnimationViewPort(rect) {
    // eslint-disable-next-line
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    // eslint-disable-next-line
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    // eslint-disable-next-line
    const inX = rect.left >= (-0.6 * windowWidth) && rect.left <= windowWidth * 2;
    // eslint-disable-next-line
    const inY = rect.top >= (-0.6 * windowHeight) && rect.top <= windowHeight * 2;

    return inX && inY;
  },
  inOrAfterViewPort(rect) {
    // eslint-disable-next-line
    const inX = rect.left <= ((window.innerWidth || document.documentElement.clientWidth) - (rect.width / 3));
    // eslint-disable-next-line
    const inY = rect.top <= ((window.innerHeight || document.documentElement.clientHeight) - (rect.height / 3));
    return inX && inY;
  },
};
