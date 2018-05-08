<template>
  <div>
    <div>
      <h2 class="text-xs-center">Posts</h2>
    </div>
    <div v-for="post in posts" :key="post.id">
      <post :post="post"></post>
    </div>
  </div>
</template>

<script>
  /**
   * Showing list of all posts
   *
   * @see: Post.vue for more detail
   * @author: Giang Dao
   */
  import Post from '@/components/landing/Post';

  export default {
    name: 'post-list',
    data() {
      return {
        posts: [
          {
            id: 1,
            title: 'First post',
          },
          {
            id: 2,
            title: 'Second post',
          },
          {
            id: 3,
            title: 'Third post',
          },
        ],
      };
    },
    components: {
      Post,
    },
  };
</script>

<style scoped>
</style>
