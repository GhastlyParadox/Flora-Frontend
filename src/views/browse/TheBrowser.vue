<template>
  <v-container fluid class="ma-0 pa-0">
    <NavTop />
    <v-row class="mt-12">
      <!-- Margin top -->
    </v-row>
    <v-row class="mt-12">
      <!-- Margin top -->
    </v-row>
    <v-row class="mt-12">
      <!-- Margin top -->
    </v-row>
    <NavDrawer />
    <v-main class="mt-12">
      <v-row justify="center">
        <v-col cols="12" lg="10" offset-lg="2">
          <v-item-group id="browse-buttons">
            <v-btn-toggle v-model="toggle" mandatory>
              <v-btn rounded color="primary" class="white--text elevation-2" >Browse by Family</v-btn>
              <v-btn rounded color="primary" class="white--text elevation-2">Browse by Genus</v-btn>
            </v-btn-toggle>
          </v-item-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="10" offset-lg="2">
          <v-fade-transition>
            <BrowseFamily v-if="toggle===0" class="mt-5" />
            <BrowseGenus v-else class="mt-5" />
          </v-fade-transition>
        </v-col>
      </v-row>
    </v-main>
    <TheFooter />
  </v-container>
</template>

<script>
import NavTop from '@/components/NavTop.vue';
import NavDrawer from '@/components/NavDrawer.vue';
import BrowseFamily from '@/views/browse/BrowseFamily.vue';
import BrowseGenus from '@/views/browse/BrowseGenus.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'TheBrowser',
  components: {
    NavTop,
    NavDrawer,
    BrowseFamily,
    BrowseGenus,
    TheFooter,
  },
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor
    family_name: '',
  },
  data() {
    return {
      toggle: 0,
    };
  },
};
</script>

<style>

  #browse-buttons{
    z-index: 1;
  }

  .v-btn-toggle > .v-btn.v-btn--active{
    background-color: #001426 !important;
  }


</style>
