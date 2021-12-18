<template>
  <v-container fluid class="ma-0 pa-0">
    <NavTop />
    <v-main class="mt-12">
      <v-row class="mt-12"></v-row>
      <v-row class="mt-12">
        <v-col class="mt-12 text-justify" cols="10" offset-lg="3" lg="8" offset="1">
            <p :class="{'display-1': $vuetify.breakpoint.lgAndUp, 'headline': $vuetify.breakpoint.mdAndDown}">
              {{
              this.$route.params.id.split(/(?=[A-Z])/).join(" ")
              }}
            </p>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="3" md="1" cols="1">
          <NavDrawer />
        </v-col>
        <v-col cols="10" lg="8" sm="10" class="mt-4">
          <ckeditor :key="editorConfig.editorKey" v-model="home_text" :config="editorConfig" :editor-url="editorConfig.editorUrl"></ckeditor>
          <v-overlay :value="loaderOverlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
          <v-alert dense text type="success" v-if="success" dismissible>
            Saved!
          </v-alert>
          <v-alert dense text type="error" v-if="error" dismissible>
            Error: {{ this.errorMsg }}
          </v-alert>
          <span>
            <v-btn v-on:click="handleSave"
                   :loading="loading"
                   :disabled="loading"
                   color="primary"
                   class="mt-4 ma-1 text-center"
                   @click="loader = 'loading'">Save</v-btn>
            <v-btn class="mt-4 ma-1"
                   @click="forceRerender()">Reset</v-btn>
          </span>
        </v-col>
      </v-row>
    </v-main>
    <TheFooter />
  </v-container>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import _ from 'lodash';
import ckeditor from '../../../node_modules/ckeditor4-vue/dist/ckeditor';
import NavTop from '@/components/NavTop.vue';
import NavDrawer from '@/components/NavDrawer.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'EditHome',
  components: {
    NavTop,
    NavDrawer,
    TheFooter,
    ckeditor: ckeditor.component,
  },
  data() {
    return {
      home_id: this.$store.state.homeText.home_id,
      home_text: _.cloneDeep(this.$store.state.homeText.home_text), // Clone for local manipulation
      editorConfig: {
        allowedContent: true, // For HTML source editing
        editorUrl: 'https://ghastlyparadox.github.io/flora-ckeditor4/ckeditor.js',
        editorKey: 1, // Form element reset: https://michaelnthiessen.com/force-re-render/
        extraPlugins: 'codemirror',
      },
      loader: null,
      loading: false,
      loaderOverlay: false,
      error: false,
      errorMsg: '',
      success: null,
    };
  },
  beforeCreate() {
    this.$store.commit('homeText/pushHomeID', this.$route.params.id);
    this.$store.dispatch('homeText/getHomeText');
  },
  methods: {
    ...mapActions('homeText', [
      'setUpdatedText',
    ]),
    // eslint-disable-next-line no-unused-vars
    handleSave(event) {
      const that = this;
      // Create JSON, strip outer div tag
      const textObj = JSON.stringify(that.home_text.replace(/^<div[^>]*>|<\/div>$/gm, '').trim());
      that.loaderOverlay = true;
      that.loading = true;
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'put',
      };
      axios.put(`/admin/edit-home/${that.home_id}`, textObj, config).then((response) => {
        that.setUpdatedText(response.config.data);
        that.loading = false;
        that.loaderOverlay = false;
        that.success = true;
        window.location.reload();
        console.log('Saved successfully');
      }).catch((error) => {
        that.loaderOverlay = false;
        that.loading = false;
        that.errorMsg = error;
        console.error(error);
      });
    },
    forceRerender() {
      this.editorConfig.editorKey += 1;
      this.species_text = _.cloneDeep(this.$store.state.homeText.home_text);
      this.loading = false;
      this.error = false;
      this.success = null;
    },
    onResize() {
      this.isMobile = window.innerWidth < 1264;
    },
  },
  computed: {
    storeText() {
      return _.cloneDeep(this.$store.state.homeText.home_text);
    },
    getLoadState() {
      return this.$store.getters['homeText/loadState'];
    },
  },
  watch: {
    storeText(newValue) {
      this.home_text = newValue;
    },
    // For button animation
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      // eslint-disable-next-line no-return-assign
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
};
</script>

<style scoped>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

</style>
