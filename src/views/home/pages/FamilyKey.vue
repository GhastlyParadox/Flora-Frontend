<template>
  <v-container fluid class="ma-0 pa-0">
    <NavTop />
    <v-main class="mt-12">
      <v-row class="mt-12"></v-row>
      <v-row class="mt-12">
        <v-col class="mt-12 text-justify" cols="9" offset="1" md="10" lg="8" offset-lg="3" >
          <p :class="{'display-1': $vuetify.breakpoint.lgAndUp, 'headline': $vuetify.breakpoint.mdAndDown}">General Keys to Families and Special Groups</p>
          <v-divider></v-divider>
        </v-col>
        <v-col cols="3">
          <NavDrawer />
        </v-col>
        <v-col class="text-justify font-weight-regular" cols="9" offset="1" md="10" lg="8" offset-lg="3" >
          <HomeTemplate :pageID="this.$options.name" :pageTitle="title"></HomeTemplate>
        </v-col>
      </v-row>
    </v-main>
    <TheFooter />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import NavTop from '@/components/NavTop.vue';
import NavDrawer from '@/components/NavDrawer.vue';
import TheFooter from '@/components/TheFooter.vue';
import HomeTemplate from '@/views/home/HomeTemplate.vue';

export default {
  name: 'FamilyKey',
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
      title: 'Family Key',
    };
  },
  methods: {
    goto(refName) {
      const element = this.$refs[refName];
      const top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
  computed: {
    ...mapGetters(['currentUser/userAdmin']),
  },
};
</script>

<style scoped>

.anchor {
  margin-top: -120px;
  padding-bottom: 120px;
  display: block;
}

.MF-key-family {
  text-align: right;
}

a {
  text-decoration: underline;
}

a:hover{
  font-weight: bold;
}

</style>
