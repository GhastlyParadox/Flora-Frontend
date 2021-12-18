<template>
  <v-container fluid class="ma-0 pa-0">
    <NavTop />
    <v-main class="mt-12">
      <v-row class="mt-12"></v-row>
      <v-row class="mt-12">
        <v-col class="mt-12 text-justify" cols="10" offset-lg="3" lg="8" offset="1">
          <router-link :to="{ path: '/record/' + $route.params.id, params: { id: $route.params.id }}"
                       target="_blank">
            <p :class="{'display-1': $vuetify.breakpoint.lgAndUp, 'headline': $vuetify.breakpoint.mdAndDown}">
              {{
              scientific_name
              }}
            </p>
          </router-link>
        </v-col>
      </v-row>
      <v-row align="stretch">
        <v-col lg="3" md="1" cols="1" align-self="start">
          <NavDrawer />
        </v-col>
        <v-col cols="8">
          <v-tabs class="elevation-2" v-model="tab" background-color="primary" dark>
            <v-tab v-for="item in items" :key="item.tab" @change="activeTab(item)">
              {{ item.tab }}
            </v-tab>
            <v-spacer></v-spacer>
            <v-dialog
              v-model="priorityDialog"
              persistent
              max-width="max-content"
              v-if="galleryActive"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-if="galleryActive"
                       color="cyan darken-3"
                       class="mt-1 mr-2"
                       @click="setAsPriority">Priority</v-btn>
              </template>
              <v-card color="primary" dark>
                <v-card-title class="headline">
                  Set this image as priority?
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="red accent-1"
                    x-large
                    text
                    @click="priorityDialog = false"
                  >
                    No
                  </v-btn>
                  <v-btn
                    color="green accent-1"
                    text
                    x-large
                    @click="setAsPriority"
                  >
                    Yes
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item.tab">
              <v-card flat>
                <v-card-text class="mt-2 ml-1">
                  <component v-bind:is="item.content"
                             :species_id="species_id"
                             :path="path"
                             :imageData="imageData"
                             :loading="loading">
                  </component>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-main>
    <TheFooter />
  </v-container>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapActions, mapGetters } from 'vuex';
import NavTop from '@/components/NavTop.vue';
import NavDrawer from '@/components/NavDrawer.vue';
import TheFooter from '@/components/TheFooter.vue';
import ImageGallery from '@/views/admin/Image Manager/ImageGallery.vue';
import ImageUploader from '@/views/admin/Image Manager/ImageUploader.vue';
import ImageEdit from '@/views/admin/Image Manager/ImageEdit.vue';

export default {
  name: 'ImageManager',
  components: {
    NavTop,
    NavDrawer,
    TheFooter,
    // eslint-disable-next-line vue/no-unused-components
    ImageGallery,
    // eslint-disable-next-line vue/no-unused-components
    ImageUploader,
    ImageEdit,
  },
  props: {
    path: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      species_id: this.$router.currentRoute.params.id,
      tab: null,
      items: [
        { tab: 'Gallery', content: 'ImageGallery' },
        { tab: 'Edit', content: 'ImageEdit' },
        { tab: 'Upload', content: 'ImageUploader' },
      ],
      dialog: false,
      // priorityDialog: false,
      // priorityTab: false,
      galleryActive: true,
      componentKey: 0,
      // imageData: _.cloneDeep(this.$store.state.speciesImages.imageData),
    };
  },
  beforeCreate() {
    this.$store.dispatch('speciesImages/getSpeciesImages');
  },
  methods: {
    ...mapActions('speciesImages', [
      'setSelectedImageAsPriority',
    ]),
    setAsPriority() {
      // this.priorityDialog = false;
      this.$store.dispatch('speciesImages/setSelectedImageAsPriority', this.selectedImageObj.image_id);
      this.$router.go();
    },
    activeTab(item) {
      // disables the priority button when upload form is active
      this.galleryActive = false;
      this.galleryActive = item.tab === 'Gallery';
    },
    forceRerender() {
      this.componentKey += 1;
    },
  },
  computed: {
    ...mapState('currentUser', {
      authenticated: state => state.authenticated,
      email: state => state.email,
      admin: state => state.admin,
    }),
    ...mapState('speciesImages', {
      scientific_name: state => state.scientific_name,
      imageData: state => state.imageData,
      priorityImageSrc: state => state.priorityImageSrc,
      priorityImageSrcHover: state => state.priorityImageSrcHover,
      priorityImagePhotographer: state => state.priorityImagePhotographer,
      priorityImageObject: state => state.priorityImageObject,
      loading: state => state.loading,
    }),
    ...mapGetters('speciesImages', [
      'selectedImageObj',
    ]),
    dialogItems() {
      console.log(this.items.filter((item, i) => i !== 0));
      return this.items.filter((item, i) => i !== 0);
    },
  },
  watch: {
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
</style>
