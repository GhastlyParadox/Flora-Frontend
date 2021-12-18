<template class="mobile">
  <v-col cols="11">
    <v-row align="stretch" align-sm="stretch" justify-sm="space-around">
      <v-col cols="10" offset="1" sm="6" offset-sm="2" class="text-justify ml-12 text-body-2">
        <p>
          <span class="font-weight-bold">Common Name:</span> {{ flora_data[0].common_name }} <br>
          <span class="font-weight-bold">Coefficient of Conservatism:</span> {{ flora_data[0].c }} <br>
          <span class="font-weight-bold">Coefficient of Wetness:</span> {{ flora_data[0].w }} <br>
          <span class="font-weight-bold">Wetness Index:</span> {{ flora_data[0].wet }} <br>
          <span class="font-weight-bold">Physiognomy:</span> {{ flora_data[0].phys }} <br>
          <span v-if="flora_data[0].st" class="font-weight-bold">Status:</span> {{ flora_data[0].st}} <br>
        </p>
      </v-col>
      <v-col cols="10" offset="1" sm="4"   @click="showGallery">
        <v-hover>
          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto">
            <v-img :src="priorityImageSrcHover ? priorityImageSrcHover : imagesFilter.length ? imagesFilter[0].src : placeholderUrl"
                   class="elevation-3"
                   :alt="priorityImageSrcHover ? priorityImageCaption : imagesFilter.length ? imagesFilter[0].caption : 'Using placeholder image'">
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-hover>
        <p v-if="priorityImageSrcHover && priorityImagePhotographer" class="mt-3 caption text-right">{{ priorityImagePhotographer }}</p>
        <p v-else-if="!priorityImageSrcHover && imagesFilter.length && imagesFilter[0].photographer" class="mt-3 caption text-right">{{ imagesFilter[0].photographer }}</p>
        <p v-if="priorityImageSrcHover && priorityImageCaption" class="mt-3 body-1 text-center">{{ priorityImageCaption }}</p>
        <p v-if="!priorityImageSrcHover && imagesFilter.length && imagesFilter[0].caption && imagesFilter[0].caption!=='NULL'" class="mt-3 body-1 text-center">{{ imagesFilter[0].caption }}</p>
        <LightGallery
          v-if="galleryVisible" :gallery-items="galleryItems" @close-gallery="hideGallery">
        </LightGallery>
      </v-col>
      <v-col cols="11" class="text-justify text-sm-left ml-9">
        <!--
        mounts DynamicText
        -->
        <slot></slot>
        <!--
        mounts DynamicText
        -->
        <router-link v-if="admin"
                     class="body-1 edit-link float-right mt-2"
                     :to="{ path: '/admin/edit-species/' + $route.params.id, params: { id: $route.params.id }}"
                     target="_blank">Edit Text</router-link>
      </v-col>
      <v-col cols="10" offset="1" sm="7" class="mt-6">
        <iframe width="100%" height="100%" :src="mapBaseURL"></iframe>
      </v-col>
      <v-col cols="10" offset="1" sm="3" order-sm="5" class="mt-6">
        <v-toolbar dark color="primary">
          <v-toolbar-title class="white--text">Locations</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <!--v-data-table style="max-height: 400px; overflow-y: auto"
                      dense
                      hide-default-footer
                      hide-default-header
                      :items="locationData"
                      class="elevation-3">
          <template v-slot:item="props">
            <tr>
              <td class="text-justify">{{ props.item }}</td>
            </tr>
          </template>
        </v-data-table-->
        <v-simple-table dense style="max-height: 400px; overflow-y: auto">
          <template v-slot:default>
            <tbody>
            <tr v-for="item in locationData"
                :key="item">
              <td class="text-justify">{{ item }}</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import LightGallery from '@/components/LightGallery.vue';

export default {
  name: 'FloraMobile',
  components: {
    LightGallery,
  },
  props: {
    floraData: Array,
    imageData: Array,
    imagesFilter: Array,
    textData: String,
    mapBaseURL: String,
    locationData: Array,
    admin: Boolean,
    priorityImageSrc: String,
    priorityImageSrcHover: String,
    priorityImagePhotographer: String,
    priorityImageCaption: String,
  },
  data() {
    return {
      search: '',
      dynamic: 'dynamic',
      headers: [
        { text: 'County/Area', value: 'location' },
      ],
      transition: 'scale-transition',
      placeholderUrl: '/static/img/comingsoon_hover.png',
      isMobile: false,
      galleryVisible: false,
      flora_data: [],
    };
  },
  methods: {
    showGallery() {
      this.galleryVisible = false;
      this.galleryItems = {};
      this.galleryVisible = true;
      this.galleryItems = this.imagesFilter;
    },
    hideGallery() {
      this.galleryItems = {};
      this.galleryVisible = false;
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
    forceRerender() {
      console.log('event passed back');
    },
  },
  watch: {
    // This keeps local data in sync
    floraData(updateObj) {
      this.flora_data = updateObj;
    },
  },
};
</script>

<style scoped>
  .lightbox {
    /** Default lightbox to hidden */
    display: none;

    /** Position and style */
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    text-align: center;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
  }

  .lightbox img {
    /** Pad the lightbox image */
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .lightbox:target {
    /** Remove default browser outline */
    outline: none;

    /** Unhide lightbox **/
    display: block;
  }
  .v-application p {
    margin-bottom: 12px !important;
  }
  .v-data-footer ::v-deep {
    justify-content: flex-start !important;

  }
  [v-cloak] {
    display: none;
  }

</style>
