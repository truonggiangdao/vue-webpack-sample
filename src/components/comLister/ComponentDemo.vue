<template>
  <div>
    <p>{{ componentName }}</p>
    <div class="pa-5">
      <transition name="fade" :duration="600">
        <loading v-if="componentName === 'Loading' && showLoading" :backdrop="false"/>
      </transition>

      <transition name="fade" :duration="600">
        <img-default v-if="componentName === 'Img Default'" src="static/abc.png"/>
      </transition>

      <transition name="fade" :duration="600">
        <div v-if="componentName === 'Auto Focus'">
          <div>
            <label for="inputText">Enter text:</label>
            <input type="text" name="inputText" v-model="inputText" v-focus />
          </div>

          <div>
            <label>Result text:</label>
            <h1 v-html="$options.filters.toHtmlChars(inputText)"></h1>
          </div>
        </div>
      </transition>
    </div>
    <div>
      <router-link to="/components-list">Go back</router-link>
    </div>
  </div>
</template>

<script>
  /**
   * The component for rendering list of child components
   *
   * @author: Giang Dao
   */
  export default {
    name: 'component-demo',
    data() {
      return {
        componentName: '',
        inputText: '',
        showLoading: true,
      };
    },
    mounted() {
      this.componentName = this.$route.params.comName;
      this.initComponent();
    },
    methods: {
      initComponent() {
        setTimeout(() => {
          this.showLoading = false;
        }, 3000);
      },
    },
    computed: {
    },
  };
</script>

<style scoped lang="stylus">
</style>
