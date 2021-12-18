<template>
  <v-container fluid class="ma-0 pa-0">
    <NavTop />
    <v-main class="mt-12">
      <v-row class="mt-12"></v-row>
      <v-row class="mt-12">
        <v-col class="mt-12 text-left font-weight-regular" cols="11" offset="1" md="10" lg="8" offset-lg="3">
          <p :class="{'headline': $vuetify.breakpoint.mdAndUp, 'title': $vuetify.breakpoint.smAndDown}">Genera in <em>Michigan Flora</em> whose family assignments are here changed</p>
          <v-divider class="mb-4"></v-divider>
          <v-row justify="space-between">
            <v-col cols="12" class="d-inline-flex">
              <HomeTemplate :pageID="this.$options.name" :pageTitle="title"></HomeTemplate>
            </v-col>
          </v-row>
        </v-col>
        <NavDrawer />
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
  name: 'FamilyChanges',
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
      title: 'Family Changes',
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
table{
  width: 100%;
}
  td {
    max-width: 66vw;
    white-space: pre-line;
  }

</style>
