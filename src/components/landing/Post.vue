<template>
  <p>
    <strong>{{ post.id }}</strong>
    <span>{{ post.title }}</span>
  </p>
</template>

<script>
  /**
   * Showing a single post
   *
   * @author: Giang Dao
   */
  export default {
    name: 'post',
    props: {
      post: Object,
    },
  };
</script>

<style scoped>
</style>
