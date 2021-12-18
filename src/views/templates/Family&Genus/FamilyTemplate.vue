<template>
  <v-container fluid class="ma-0 pa-0">
    <NavTop />
    <v-main class="mt-12">
      <v-row class="mt-12"></v-row>
      <v-row class="mt-12">
        <v-col class="mt-12 text-justify" cols="10" offset-lg="3" lg="8" offset="1">
          <p :class="{'display-1': $vuetify.breakpoint.lgAndUp, 'headline': $vuetify.breakpoint.mdAndDown}">
            {{
            $route.params.family_name.charAt(0).toUpperCase() +
            $route.params.family_name.slice(1).toLowerCase()
            }}
            <router-link class="subtitle-1" v-if="admin"
                         :to="{ path: '/admin/edit-family/' + $route.params.family_name, params: { family_name: $route.params.family_name }}"
                         target="_blank">Edit</router-link>
          </p>
          <v-divider class="mb-3"></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="3" md="1" cols="1">
          <NavDrawer />
        </v-col>
        <v-col cols="10" lg="8" sm="10" class="mt-4 text-justify">
          <DynamicText class="family-text font-weight-medium"
                       ref="familyText"
                       :loaded="data_loaded"
                       :key="text_key"
                       :template="text"
                       :is="dynamic">
          </DynamicText>
          <DataTable v-if="data_loaded" :key="table_key" :species_data="species_data" />
          <v-toolbar v-else dark color="primary">
            <v-toolbar-title v-if="$route.params.family_name" class="white--text hidden-xs-only">Loading species in {{ $route.params.family_name }}...</v-toolbar-title>
            <v-toolbar-title v-if="$route.params.genus_name" class="white--text hidden-xs-only">Loading species in {{ $route.params.genus_name }}...</v-toolbar-title>
          </v-toolbar>

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10" lg="8" sm="10" offset-lg="3" offet-md="2" offset="1" class="mt-4 text-justify">
          <p class="body-2"><span class="font-weight-bold">Citation:</span><br>
            <span class="font-italic">MICHIGAN FLORA ONLINE.</span> A. A. Reznicek, E. G. Voss, & B. S. Walters. February 2011. University of Michigan. Web. {{ getDate }}  <br>
            https://mifloradev.lsa.umich.edu/flora-demo/#{{ citationUrl }}
          </p>
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
import DynamicText from '@/components/dynamicText';
import DataTable from '@/views/templates/Family&Genus/DataTable.vue';

export default {
  name: 'FamilyTemplate',
  components: {
    NavTop,
    NavDrawer,
    TheFooter,
    DynamicText,
    DataTable,
  },
  data() {
    return {
      citationUrl: '',
      isMobile: false,
      isActive: false,
      transition: 'scale-transition',
      dynamic: 'DynamicText',
      text: undefined,
      species_data: [],
      data_loaded: false,
      text_key: 0,
      table_key: 0,
      date: new Date(),
    };
  },
  beforeCreate() {
    // console.log('beforeCreate');
    this.$store.dispatch('familyData/getFamilyText');
    this.$store.dispatch('familyData/getFamilyData');
  },
  created() {
    this.citationUrl = this.$route.path;
    this.text_key += 1; // changing the key value assigned resets the component
    this.table_key += 1; // changing the key value assigned resets the component
  },
  computed: {
    ...mapState('currentUser', {
      authenticated: state => state.authenticated,
      email: state => state.email,
      admin: state => state.admin,
    }),
    ...mapState('familyData', {
      family_name: state => state.family_name,
      family_text: state => state.family_text,
      family_species: state => state.family_species,
      loaded: state => state.loaded,
    }),
    getDate() {
      return `${this.date.toLocaleString('default', { month: 'long' })} ${this.date.getDate()}, ${this.date.getFullYear()}`;
    },
  },
  watch: {
    // these populate local data objects with store values
    family_text(update) {
      // console.log('family_text watch triggered');
      this.text = update;
    },
    loaded(update) {
      // console.log('loaded update watch triggered');
      // console.log(update);
      this.data_loaded = update;
    },
    family_species: {
      handler(update) {
        // console.log('family_species watch triggered');
        this.species_data = update;
      },
      deep: true,
    },
    $route: {
      // handler will be called every time the route changes.
      // keeps component data in sync
      // reset component state and fetch new data
      async handler() {
        if (!this.$route.hash) {
          // console.log('route handler');
          await this.$store.dispatch('familyData/getFamilyText');
          await this.$store.dispatch('familyData/getFamilyData');
        }
      },
    },
  },
};

</script>

<style lang="scss">
  .mobile {
    color: #333;
  }

  @media screen and (max-width: 1263px) {
    .mobile .v-data-table__wrapper table tbody tr {
      max-width: 100%;
      position: relative;
      display: block;
    }

    .mobile .v-data-table__wrapper table tbody tr:nth-child(odd) {
      border-left: 6px solid #00274c;
    }

    .mobile .v-data-table__wrapper table tbody tr:nth-child(even) {
      border-left: 6px solid #b0bec5;
    }

    .mobile .v-data-table__wrapper table tbody tr td {
      display: flex;
      width: 100%;
      border-bottom: 1px solid #f5f5f5;
      height: auto;
      padding: 10px;
    }

    .mobile .v-data-table__wrapper table tbody tr td ul li:before {
      content: attr(data-label);
      padding-right: .5em;
      text-align: left;
      display: block;
      color: #999;

    }

  }
  .flex-content {
    padding: 0px;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  .flex-item {
    padding: 5px;
    width: 50%;
    height: auto;
    font-weight: bold;
  }

  .link {
    text-decoration: underline;
    cursor: pointer;
    padding-left: 0.25em;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  .couplet {
    padding-left: 1em;
    margin-bottom: 1.5em;
    margin-top: 1.5em;
  }
  /*.hover {
    position: absolute;
    opacity: 0;
    -webkit-transition: opacity 0.5ms ease-out;
  }*/
  .thumb{
    position: relative;
    opacity:1;
    -webkit-transition: opacity 0.5s ease-in;
  }
  /*.img:hover {
    & .thumb {
      opacity: 0;
      position: absolute;
    }
    & .hover {
      opacity: 1;
      position: relative;
      -webkit-transition: opacity 0.5s ease-in;
    }
  }*/
  a {
    text-decoration: underline;
  }
  a:not(.route):not([href]) {
    position: relative;
    top: -106px;
  }
  .family-text ::v-deep .anchor {
    margin-top: -120px;
    padding-bottom: 120px;
    display: block;
  }
  .MF-key-species {
    text-align: right;
    font-style: italic;
    transition: .1s;
  }
  .family-text ::v-deep .MF-key-species a:hover {
     font-weight: bold;
   }
  .family-text ::v-deep h3{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  ::v-deep .v-data-footer {
    justify-content: flex-start !important;
  }
  td {
    max-width:100%;
    white-space:nowrap;
    padding: 10px;
    position:relative;
  }
</style>
