<template>
  <v-container fluid class="ma-0 pa-0">
    <NavTop />
    <v-main class="mt-12">
      <v-row class="mt-12"></v-row>
      <v-row class="mt-12">
        <v-col class="mt-12 text-justify" cols="10" offset="1" lg="8" offset-lg="3" >
          <p :class="{'display-1': $vuetify.breakpoint.lgAndUp, 'headline': $vuetify.breakpoint.mdAndDown}">
            {{ $route.params.genus_name }}
            <router-link class="subtitle-1" v-if="admin"
                         :to="{ path: '/admin/edit-genus/' + $route.params.genus_name, params: { genus_name: $route.params.genus_name }}"
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
          <DynamicText class="genus-text font-weight-medium"
                       ref="genusText"
                       :loaded="data_loaded"
                       :template="text"
                       :key="text_key"
                       :is="dynamic">
          </DynamicText>
          <DataTable v-if="data_loaded" :key="table_key" :species_data="species_data" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10" lg="8" sm="10" offset-lg="3" offet-md="2" offset="1" class="mt-4 text-justify">
          <p class="body-2"><span class="font-weight-bold">Citation:</span><br>
            <span class="font-italic">MICHIGAN FLORA ONLINE.</span> A. A. Reznicek, E. G. Voss, & B. S. Walters. February 2011. University of Michigan. Web. {{ getDate }} <br>
            https://mifloradev.lsa.umich.edu/flora-demo/#{{ this.citationUrl }}
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
  name: 'GenusTemplate',
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
      isIntersecting: false,
      date: new Date(),
    };
  },
  beforeCreate() {
    console.log('beforeCreate');
    this.$store.dispatch('genusData/getGenusText');
    this.$store.dispatch('genusData/getGenusData');
  },
  created() {
    this.citationUrl = this.$route.path;
    this.text_key += 1; // resets text component
    this.table_key += 1; // resets table component
  },
  computed: {
    ...mapState('currentUser', {
      authenticated: state => state.authenticated,
      email: state => state.email,
      admin: state => state.admin,
    }),
    ...mapState('genusData', {
      genus_name: state => state.genus_name,
      genus_text: state => state.genus_text,
      genus_species: state => state.genus_species,
      loaded: state => state.loaded,
    }),
    getDate() {
      return `${this.date.toLocaleString('default', { month: 'long' })} ${this.date.getDate()}, ${this.date.getFullYear()}`;
    },
  },
  watch: {
    // these populate local data objects with store values
    genus_text(update) {
      this.text = update;
    },
    loaded(update) {
      this.data_loaded = update;
    },
    genus_species: {
      handler(update) {
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
          await this.$store.dispatch('genusData/getGenusText');
          await this.$store.dispatch('genusData/getGenusData');
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
    .mobile table.v-data-table tr {
      max-width: 100%;
      position: relative;
      display: block;
    }

    .mobile table.v-data-table tr:nth-child(odd) {
      border-left: 6px solid #00274c;
    }

    .mobile table.v-data-table tr:nth-child(even) {
      border-left: 6px solid #b0bec5;
    }

    .mobile table.v-data-table tr td {
      display: flex;
      width: 100%;
      border-bottom: 1px solid #f5f5f5;
      height: auto;
      padding: 10px;
    }

    .mobile table.v-data-table tr td ul li:before {
      content: attr(data-label);
      padding-right: .5em;
      text-align: left;
      display: block;
      color: #999;

    }
    .v-datatable__actions__select
    {
      width: 50%;
      margin: 0px;
      justify-content: flex-start;
    }
    .mobile .theme--light.v-data-table tbody tr:hover:not(.v-datatable__expand-row) {
      background: transparent;
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
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  .link {
    padding-left: 0.25em;
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
  .genus-text ::v-deep .anchor {
    margin-top: -120px;
    padding-bottom: 120px;
    display: block;
  }
  .MF-key-species {
    text-align: right;
    font-style: italic;
    transition: .1s;
  }
  .genus-text ::v-deep .MF-key-species a:hover {
    font-weight: bold;
  }
  .genus-text ::v-deep h3{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  ::v-deep .v-data-footer  {
    justify-content: flex-start !important;
  }
  td {
    max-width:100%;
    white-space:nowrap;
    padding: 10px;
    position:relative;
  }

</style>
