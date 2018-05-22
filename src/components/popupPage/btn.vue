<template>
  <v-btn @click="handleClick" :disabled="loading">{{text}} - {{num}}</v-btn>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'btn',
  data() {
    return {
      num: 0,
    };
  },
  computed: {
    ...mapGetters({
      loading: 'loadingIcon',
    }),
  },
  props: {
    text: String,
  },
  methods: {
    handleClick() {
      this.num += 1;
      // eslint-disable-next-line
      console.log(this.loading);
    },
  },
};
</script>

