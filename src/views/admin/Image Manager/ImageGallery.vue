<template>
  <v-card class="mx-auto elevation-2 mt-3">
    <v-container>
      <v-item-group dark mandatory v-model="selected">
        <v-row>
          <v-col
            v-for="(image, i) in imageData"
            :key="i"
            class="d-flex child-flex"
            cols="2"
          >
            <v-item v-if="image.priority" v-slot:default="{ active, toggle, hover }">
              <v-card shaped>
                <v-fade-transition>
                  <v-overlay
                    v-if="active"
                    absolute
                    color="#036358"
                  >
                  </v-overlay>
                </v-fade-transition>
                <v-img
                  :src="image.thumb"
                  aspect-ratio="1"
                  class="lighten-2"
                  @click="toggle"
                  :class="[`elevation-${active ? 24 : 2}`]"
                ></v-img>
              </v-card>
            </v-item>
            <v-item v-else v-slot:default="{ active, toggle, hover }">
              <v-card>
                <v-fade-transition>
                  <v-overlay
                    v-if="active"
                    absolute
                    color="#036358"
                  >
                  </v-overlay>
                </v-fade-transition>
                <v-img
                  :src="image.thumb"
                  aspect-ratio="1"
                  class="lighten-2"
                  @click="toggle"
                  :class="[`elevation-${active ? 24 : 2}`]"
                ></v-img>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageGallery',
  props: {
    species_id: String,
    path: String,
    imageData: Array,
    loading: Boolean,
  },
  data() {
    return {
      selected: [],
      selectedObj: {},
      absolute: true,
      overlay: false,
    };
  },
  methods: {
    ...mapActions({
      setSelectedImageObj: 'speciesImages/setSelectedImageObj',
    }),
  },
  computed: {
    ...mapGetters('speciesImages', [
      'selectedImageObj',
    ]),
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    selected(newObjIndex, oldObjIndex) {
      this.selectedObj = this.imageData[newObjIndex];
      this.setSelectedImageObj(this.selectedObj);
    },
  },
};
</script>

<style scoped>
  .v-image {
    border-top: 8px #00274c !important;
  }
</style>
