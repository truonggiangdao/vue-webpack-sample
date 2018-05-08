<template>
  <div :class="{'loading-wp': true, 'backdrop': backdrop}">
    <div class="loading">
      <div :class="{'active': count >= 1 && count <= 3 || count == 8}">&nbsp;</div>
      <div :class="{'active': count >= 5}">&nbsp;</div>
      <div :class="{'active': count >= 1 && count <= 2 || count >= 7}">&nbsp;</div>
      <div :class="{'active': count == 1 || count >= 6}">&nbsp;</div>
    </div>
  </div>
</template>

<script>
  /**
   * To create Loading spinner
   *
   * @author: Giang Dao
   */
  export default {
    name: 'loading',
    props: {
      backdrop: Boolean,
    },
    data() {
      return {
        count: 8,
        interval: null,
      };
    },
    mounted() {
      setTimeout(() => {
        this.$data.interval = setInterval(() => {
          if (this.$data.count === 8) {
            this.$data.count = 1;
          } else {
            this.$data.count += 1;
          }
        }, 300);
      }, 0);
    },
    beforeDestroy() {
      if (this.$data.interval) {
        clearInterval(this.$data.interval);
      }
    },
  };
</script>

<style scoped lang="stylus">
.loading-wp
  position fixed
  width 100%
  height 100vh
  top 0
  left 0
  background-color transparent
  z-index 9999

  &.backdrop
    background-color rgba(255, 255, 255, 0.8)

  .loading
    background-color transparent
    position absolute
    width 48px
    height 48px
    top 50%
    left 50%
    transform translate(-50%, -75%)
    display flex
    flex-wrap wrap
    box-shadow none

    > div
      width 20px
      height 20px
      margin 2px
      background-color rgba(66, 66, 68, 1)
      transition all 0.5s ease-in-out

      &.active
        background-color rgba(6, 160, 186, 1)
</style>
