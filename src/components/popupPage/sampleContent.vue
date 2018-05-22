<template>
  <div class="text-center">
    <h1>{{myNumber}}</h1>
    <slot></slot>
    <button @click="clickAction()">Click Action</button>
  </div>
</template>

<script>
export default {
  props: {
    text: Object,
    inputNumber: Number,
    clickAction: Function,
  },
  computed: {
    myNumber() {
      return this.inputNumber ? (this.inputNumber * 2) : -1;
    },
  },
  mounted() {
    //
  },
};
</script>

