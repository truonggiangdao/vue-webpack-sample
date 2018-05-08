<template>
  <div>
    <div v-if="components.length > 0">
      <h2 class="text-xs-center">Components</h2>
      <p v-for="(component, i) in components" :key="i">
        <strong>#{{ i+1 }}</strong>
        <span>{{ component.name }}</span>
        <router-link :to="'/components-list/demo/' + component.name">See demo</router-link>
      </p>
    </div>

    <div v-if="directives.length > 0">
      <h2 class="text-xs-center">Directives</h2>
      <p v-for="(directive, i) in directives" :key="i">
        <strong>#{{ i+1 }}</strong>
        <span>{{ directive.name }}</span>
        <router-link :to="'/components-list/demo/' + directive.name">See demo</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  /**
   * The component for rendering list of child components
   *
   * @author: Giang Dao
   */
  import { mapMutations } from 'vuex';

  export default {
    name: 'component-list',
    data() {
      return {
        title: 'Component Page',
        childrents: [
          {
            type: 'c',
            name: 'Loading',
          },
          {
            type: 'c',
            name: 'Img Default',
          },
          {
            type: 'd',
            name: 'Auto Focus',
          },
        ],
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
    computed: {
      components() {
        return this.childrents.filter(c => c.type === 'c');
      },
      directives() {
        return this.childrents.filter(c => c.type === 'd');
      },
    },
  };
</script>

<style scoped lang="stylus">
</style>
