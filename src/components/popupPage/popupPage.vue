<template>
  <div>
    <Popup @closed="onPopupClosed"></Popup>
    <Btn text="Btn A"/>
    <Btn text="Btn B"/>
    <v-btn @click="updateLoadingIcon(!showLoadIcon)">Click show Load</v-btn>
    <LoadIcon v-if="showLoadIcon" />
    <div>
      <h1>{{status}}</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Popup from './popup';
import Btn from './btn';
import LoadIcon from './loadIcon';

export default {
  name: 'popup-page',
  components: {
    Popup,
    Btn,
    LoadIcon,
  },
  computed: {
    ...mapGetters({
      showLoadIcon: 'loadingIcon',
    }),
  },
  data() {
    return {
      status: '',
    };
  },
  methods: {
    ...mapMutations({
      updateLoadingIcon: 'setLoadingIcon',
    }),
    onPopupClosed(payload) {
      if (payload) {
        this.status = 'openning';
      } else {
        this.status = 'closing';
      }
    },
  },
};
</script>

