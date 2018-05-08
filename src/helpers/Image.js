/**
 * Utilities for preload images
 *
 * @author: Giang Dao
 */
let responsePool = null;

function checkImgAvailable(imgSrc, onSuccess, onError) {
  const img = new Image();
  img.src = imgSrc;
  img.onload = onSuccess;
  img.onerror = onError;
}
function onImgLoadSuccess() {
  responsePool.push(1);
}
function onImgLoadError() {
  responsePool.push(0);
}
function loadManyImgs(imageSrcs) {
  responsePool = [];
  return new Promise((resolve, reject) => {
    imageSrcs.forEach((imgSrc) => {
      checkImgAvailable(imgSrc, onImgLoadSuccess, onImgLoadError);
    });
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      if (responsePool.length === imageSrcs.length) {
        clearInterval(interval);
        resolve(responsePool);
      }
      if (count > 10000) {
        // 100 seconds => timeout
        clearInterval(interval);
        reject();
      }
    }, 10);
  });
}
function loadImg(imageSrc) {
  return loadManyImgs([imageSrc]);
}

export default {
  load: loadImg,
  loadMany: loadManyImgs,
};
