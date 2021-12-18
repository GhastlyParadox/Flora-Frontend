<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row id="footer">
      <v-col>
        <v-footer app dark color="primary" class="mt-5 elevation-6">
          <div class="body-2 mr-5"
               v-if="authenticated">Logged in:  {{ email }}</div>
          <v-btn x-small color="primary" href="/auth/logout" v-if="authenticated">Logout</v-btn>
          <v-spacer></v-spacer>
          <div class="body-2"><a href="http://herbarium.lsa.umich.edu">University of Michigan Herbarium</a> | 3600 Varsity Drive | Ann Arbor, MI 48108-2228 | <a href="mailto:eeb-michiganfloraonline@umich.edu">eeb-michiganfloraonline@umich.edu</a> | phone 734.615.6200 | fax 734.998.0038</div>
        </v-footer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TheFooter',
  data() {
    return {
      currentUser: '',
    };
  },
  created() {
    this.$store.dispatch('currentUser/getCurrentUser');
  },
  computed: {
    ...mapState('currentUser', {
      authenticated: state => state.authenticated,
      email: state => state.email,
      admin: state => state.admin,
    }),
  },
};
</script>

<style scoped>
  a {
    color: ivory !important;
  }

  #footer {
    transition: none !important;
  }

</style>
