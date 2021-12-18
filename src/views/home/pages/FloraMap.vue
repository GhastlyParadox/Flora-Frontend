<template>
  <v-container fluid class="ma-0 pa-0">
    <NavTop />
    <v-main class="mt-12">
      <v-row class="mt-12"></v-row>
      <v-row class="mt-12">
        <v-col class="mt-12 text-justify" cols="9" offset="1" md="10" lg="8" offset-lg="3">
          <p :class="{'display-1': $vuetify.breakpoint.lgAndUp, 'headline': $vuetify.breakpoint.mdAndDown}">Flora Map</p>
          <v-divider></v-divider>
        </v-col>
        <v-col cols="3">
          <NavDrawer />
        </v-col>
        <v-row>
          <v-col cols="10" class="map-container mt-6">
            <iframe :src="this.mapURL"></iframe>
          </v-col>
        </v-row>
        </v-row>
        <TheFooter />
    </v-main>
  </v-container>
</template>

<script>
import NavTop from '@/components/NavTop.vue';
import NavDrawer from '@/components/NavDrawer.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'FloraMap',
  components: {
    NavTop,
    NavDrawer,
    TheFooter,
  },
  data: () => ({
    mapURL: 'https://mifloradev.lsa.umich.edu/mi-flora-webmap/index.html',
  }),
};
</script>

<style scoped>
  .map-container >>> iframe {
    width: 100%;
    height: 100vh;
  }
</style>
