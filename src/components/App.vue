<template>
  <v-app>
    <v-toolbar fixed app class="secondary px-3" dark>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/">Landing</v-btn>
        <v-btn flat to="/components-list">Components</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex';
  import DeviceHelper from '@/helpers/Device';

  export default {
    name: 'app',
    data() {
      return {
        interval: null,
      };
    },
    computed: {
      ...mapGetters({
        device: 'getDevice',
        title: 'getSiteTitle',
      }),
    },
    methods: {
      ...mapMutations({
        setDevice: 'setDevice',
        setOrientation: 'setOrientation',
        setOnSmallScreen: 'setOnSmallScreen',
        setOnLandscapeSmallScreen: 'setOnLandscapeSmallScreen',
      }),
      checkDevice() {
        if (DeviceHelper.isDevice()) {
          document.body.classList.add('device');
          if (DeviceHelper.isPhone()) {
            document.body.classList.add('device-phone');
            this.setDevice({ phone: true });
          } else if (DeviceHelper.isTablet()) {
            this.setDevice({ tablet: true });
            document.body.classList.add('device-tablet');
          }
        } else {
          document.body.classList.add('desktop');
        }
      },
      onChangeOrientation() {
        setTimeout(() => {
          const pattern = /landscape*/;
          const orientation = window.screen.orientation
            || window.screen.mozOrientation
            || window.screen.msOrientation;

          this.configOrientation(pattern.test(orientation.type));
        });
      },
      configOrientation(isLandscape) {
        if (isLandscape) {
          document.body.classList.add('landscape');
          document.body.classList.remove('portrait');
          this.setOrientation('landscape');
        } else {
          document.body.classList.remove('landscape');
          document.body.classList.add('portrait');
          this.setOrientation('portrait');
        }
      },
      checkOrientationManually() {
        let isLandscape = false;
        if (window.innerWidth > window.innerHeight) {
          isLandscape = true;
        }
        this.configOrientation(isLandscape);
      },
      onResize() {
        setTimeout(() => {
          const maxWidth = 450;
          const maxHeight = 750;
          const isSmallScreen = window.innerWidth <= maxWidth && window.innerHeight <= maxHeight;
          const isLandscapeSmall = window.innerWidth > window.innerHeight
            && (window.innerHeight <= maxWidth && window.innerWidth <= maxHeight);
          this.setOnSmallScreen(isSmallScreen);
          this.setOnLandscapeSmallScreen(isLandscapeSmall);
        });
      },
    },
    created() {
      this.checkDevice();
      this.onChangeOrientation();
      this.onResize();
    },
    mounted() {
      window.addEventListener('orientationchange', this.onChangeOrientation);
      window.addEventListener('orientationchange', this.onResize);
      window.addEventListener('resize', this.onResize);
      if (this.device && this.device.phone) {
        this.$data.interval = setInterval(this.checkOrientationManually, 300);
      }
    },
    beforeDestroy() {
      window.removeEventListener('orientationchange', this.onChangeOrientation);
      window.removeEventListener('orientationchange', this.onResize);
      window.removeEventListener('resize', this.onResize);
      if (this.$data.interval) {
        clearInterval(this.$data.interval);
      }
    },
  };
</script>
