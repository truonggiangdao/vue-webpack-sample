<template>
  <v-dialog v-model="isOpen" max-width="500px">
    <v-btn slot="activator">Click mine</v-btn>
    <v-card>
      <v-card-title>
        <slot name="title"></slot>
      </v-card-title>
      <v-card-text>
        <slot></slot>
      </v-card-text>
      <v-card-actions>
        <div class="div-center">
          <v-btn color="primary" flat @click.stop="isOpen = false">Close</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    isOpen(val) {
      this.$emit('closed', val);
    },
  },
};
</script>

<style scoped>
.div-center {
  text-align: center;
}
</style>

