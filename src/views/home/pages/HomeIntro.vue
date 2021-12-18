<template>
  <v-container fluid class="ma-0 pa-0">
    <NavTop />
    <v-row class="mt-8">
      <!-- Space -->
    </v-row>
    <v-main class="mt-12">
      <v-row class="mt-12">
        <v-col lg="3" md="1" cols="1">
          <!-- Fills extra space in the row -->
        </v-col>
        <v-col cols="10" lg="8" sm="10" class="mt-12 text-justify">
          <p :class="{'display-1': $vuetify.breakpoint.lgAndUp, 'headline': $vuetify.breakpoint.mdAndDown}">Introduction</p>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col lg="3" md="1" cols="1">
          <NavDrawer />
        </v-col>
        <v-col cols="10" lg="8" offset-lg="3" sm="10" class="mt-4 text-justify font-weight-regular">
          <HomeTemplate :pageID="this.$options.name" :pageTitle="title"></HomeTemplate>
        </v-col>
      </v-row>
    </v-main>
    <TheFooter />
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import NavTop from '@/components/NavTop.vue';
import NavDrawer from '@/components/NavDrawer.vue';
import TheFooter from '@/components/TheFooter.vue';
import HomeTemplate from '@/views/home/HomeTemplate.vue';

export default {
  name: 'HomeIntro',
  components: {
    NavTop,
    NavDrawer,
    TheFooter,
    HomeTemplate,
  },
  data() {
    return {
      drawer: true,
      clipped: false,
      title: 'Introduction',
    };
  },
  computed: {
    ...mapState('currentUser', {
      admin: state => state.admin,
    }),
  },
};
</script>

<style scoped>
  a {
    font-weight: bold;
  }

</style>
