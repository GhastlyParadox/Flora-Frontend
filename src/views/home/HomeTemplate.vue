<template>
  <v-container fluid class="ma-0 pa-0">
    <v-main>
      <p class="text-right">
        <router-link class="subtitle-1"
                     v-if="admin"
                     :to="{ path: '/admin/edit-home/' + pageID, params: { id: pageID }}"
                     target="_blank">Edit</router-link>
      </p>
      <v-row no-gutters>
        <v-col cols="12">
          <DynamicText :key="text_key" :loaded="loaded" :is="dynamic" :template="home_text"></DynamicText>
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import DynamicText from '@/components/dynamicText';

export default {
  name: 'HomeTemplate',
  components: { DynamicText },
  data() {
    return {
      text: undefined,
      data_loaded: false,
      text_key: 0,
      dynamic: 'DynamicText',
    };
  },
  props: {
    pageID: String,
    pageTitle: String,
  },
  created() {
    this.text_key += 1; // resets text component
    this.$store.commit('homeText/pushHomeID', this.pageID);
    this.$store.dispatch('homeText/getHomeText');
  },
  mounted() {
    this.$store.commit('homeText/pushLoadState', true);
  },
  computed: {
    ...mapState('homeText', {
      loaded: state => state.loaded,
      home_text: state => state.home_text,
    }),
    ...mapState('currentUser', {
      authenticated: state => state.authenticated,
      email: state => state.email,
      admin: state => state.admin,
    }),
  },
  watch: {
    home_text(update) {
      this.text = update;
    },
    loaded(update) {
      this.data_loaded = update;
    },
    $route: {
      // handler will be called every time the route changes.
      // reset component state and fetch new data
      async handler() {
        await this.$store.dispatch('genusData/getGenusData');
      },
    },
  },
};
</script>

<style>
.anchor {
  margin-top: -120px;
  padding-bottom: 120px;
  display: block;
}

.MF-key-family {
  text-align: right;
}

a {
  text-decoration: underline;
}

a:hover{
  font-weight: bold;
}
</style>
