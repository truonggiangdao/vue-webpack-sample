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
  import PostList from '@/components/landing/PostList';

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
      PostList,
    },
  };
</script>

<style scoped>
</style>
