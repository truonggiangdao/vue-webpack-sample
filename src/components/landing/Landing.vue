<template>
  <post-list></post-list>
</template>

<script>
  /**
   * The component for rendering the landing page which will show list of all posts
   *
   * @author: Giang Dao
   */
  import { mapMutations } from 'vuex';

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
    },
  };
</script>

<style scoped>
</style>
