<template>
  <v-container fluid class="ma-0 pa-0">
    <NavTop />
    <v-main class="mt-12">
      <v-row class="mt-12"></v-row>
      <v-row class="mt-12">
        <v-col class="mt-12 text-justify" cols="9" offset="1" md="10" lg="8" offset-lg="3">
          <p :class="{'display-1': $vuetify.breakpoint.lgAndUp, 'headline': $vuetify.breakpoint.mdAndDown}">The Glossary</p>
          <v-divider></v-divider>
        </v-col>
        <v-col cols="3">
          <NavDrawer />
        </v-col>
        <v-col class="text-justify font-weight-regular" cols="9" offset="1" md="10" lg="8" offset-lg="3">
          <HomeTemplate :pageID="this.$options.name" :pageTitle="title"></HomeTemplate>
        </v-col>
      </v-row>
    </v-main>
    <TheFooter />
  </v-container>
</template>

<script>
import NavTop from '@/components/NavTop.vue';
import NavDrawer from '@/components/NavDrawer.vue';
import TheFooter from '@/components/TheFooter.vue';
import HomeTemplate from '@/views/home/HomeTemplate.vue';

export default {
  name: 'TheGlossary',
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
      title: 'Glossary',
    };
  },
  computed: {
    getUserAdminStatus() {
      return this.$store.getters['currentUser/userAdmin'];
    },
  },
};
</script>

<style scoped>


</style>
