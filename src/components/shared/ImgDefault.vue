<template>
  <img v-show="imgLoaded || imgError" :src="imgError ? defaultSrc : src">
</template>

<script>
  /**
   * An img element
   * check if src is not availabe then show default img instead
   *
   * @author: Giang Dao
   */
  export default {
    name: 'img-default',
    props: {
      src: String,
    },
    data() {
      return {
        defaultSrc: 'static/not_found.jpg',
        imgLoaded: false,
        imgError: false,
      };
    },
    methods: {
      checkImgAvailable(imgSrc, onSuccess, onError) {
        const img = new Image();
        img.src = imgSrc;
        img.onload = onSuccess;
        img.onerror = onError;
      },
      onImgLoadSuccess() {
        this.$data.imgLoaded = true;
      },
      onImgLoadError() {
        this.$data.imgError = true;
      },
    },
    mounted() {
      this.checkImgAvailable(this.src, this.onImgLoadSuccess, this.onImgLoadError);
    },
  };
</script>

<style scoped lang="stylus">
</style>
