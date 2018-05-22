<template>
  <div>
    <Btn text="Btn C"/>
    <post-list></post-list>
  </div>
</template>

<script>
  /**
   * The component for rendering the landing page which will show list of all posts
   *
   * @author: Giang Dao
   */
  import { mapMutations } from 'vuex';
  import Btn from '../popupPage/btn';

  export default {
    name: 'landing',
    data() {
      return {
        title: 'Landing Page',
      };
    },
    mounted() {
      this.setTitle(this.title);
    },
    methods: {
      ...mapMutations({
        setTitle: 'setSiteTitle',
      }),
    },
    components: {
      Btn,
    },
  };
</script>

<style scoped>
</style>
