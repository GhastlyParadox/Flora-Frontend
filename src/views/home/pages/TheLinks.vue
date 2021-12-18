<template>
  <v-container fluid class="ma-0 pa-0">
    <NavTop />
    <v-main class="mt-12">
      <v-row class="mt-12"></v-row>
      <v-row class="mt-12">
        <v-col cols="3" class="mt-12">
          <v-row class="mt-12"></v-row>
          <v-row class="mt-6"></v-row>
          <NavDrawer />
        </v-col>
        <v-col class="mt-12 text-left font-weight-regular" cols="8">
          <p :class="{'display-1': $vuetify.breakpoint.lgAndUp, 'headline': $vuetify.breakpoint.mdAndDown}">Links</p>
          <v-divider></v-divider>
          <v-row class="mt-8">
            <HomeTemplate :pageID="this.$options.name" :pageTitle="title"></HomeTemplate>
          </v-row>
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
  name: 'TheLinks',
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
      title: 'Links',
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
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration:underline;
    font-weight: bold;
  }

</style>
