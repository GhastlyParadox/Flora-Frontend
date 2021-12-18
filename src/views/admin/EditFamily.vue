<template>
  <v-container fluid class="ma-0 pa-0">
    <NavTop />
    <v-content class="mt-12">
      <v-row class="mt-12"></v-row>
      <v-row class="mt-12">
        <v-col class="mt-12 text-justify" cols="10" offset-lg="3" lg="8" offset="1">
          <router-link :to="{ path: '/family/' + this.$route.params.family_name, params: { family_id: this.$route.params.family_name }}"
                       target="_blank">
            <p :class="{'display-1': $vuetify.breakpoint.lgAndUp, 'headline': $vuetify.breakpoint.mdAndDown}">
              {{
              this.$route.params.family_name.charAt(0).toUpperCase() +
              this.$route.params.family_name.slice(1).toLowerCase()
              }}
            </p>
          </router-link>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="3" md="1" cols="1">
          <NavDrawer />
        </v-col>
        <v-col cols="10" lg="8" sm="10" class="mt-4">
          <ckeditor :key="editorConfig.editorKey" v-model="family_text" :config="editorConfig" :editor-url="editorConfig.editorUrl"></ckeditor>
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
    </v-content>
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
  name: 'EditFamily',
  components: {
    NavTop,
    NavDrawer,
    TheFooter,
    ckeditor: ckeditor.component,
  },
  data() {
    return {
      family_name: '',
      // Clone family_text for local manipulation
      family_text: _.cloneDeep(this.$store.state.familyData.family_text),
      editorConfig: {
        allowedContent: true, // For HTML source editing
        editorUrl: 'https://ghastlyparadox.github.io/flora-ckeditor4/ckeditor.js',
        // Key for editor reset: https://michaelnthiessen.com/force-re-render/
        editorKey: 1,
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
    this.$store.dispatch('familyData/getFamilyData');
  },
  created() {
    this.family_name = this.$route.params.family_name;
  },
  methods: {
    ...mapActions('familyData', [
      'setUpdatedText',
    ]),
    // eslint-disable-next-line no-unused-vars
    handleSave(event) {
      const that = this;
      // Create JSON, strip outer div tag
      const textObj = JSON.stringify(that.family_text.replace(/^<div[^>]*>|<\/div>$/gm, '').trim());
      that.loaderOverlay = true;
      that.loading = true;
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'put',
      };
      axios.put(`/admin/edit-family/${that.family_name}`, textObj, config).then((response) => {
        console.log(response);
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
      // this.$emit('formSent');
      // this.$store.commit('familyData/updateText', this.text); // After successful POST
    },
    forceRerender() {
      this.editorConfig.editorKey += 1;
      this.family_text = _.cloneDeep(this.$store.state.familyData.family_text);
      this.loading = false;
      this.error = false;
      this.success = null;
    },
    onResize() {
      this.isMobile = window.innerWidth < 1264;
    },
  },
  computed: {
    getName() {
      return this.$store.getters['familyData/getName'];
    },
    storeText() {
      return _.cloneDeep(this.$store.state.familyData.family_text);
    },
    getLoadState() {
      return this.$store.getters['familyData/loadState'];
    },
  },
  watch: {
    storeText(newValue) {
      this.family_text = newValue;
    },
    loader() { // For button animation
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
