<template>
  <v-container fluid class="ma-0 pa-0">
    <NavTop />
    <v-row class="mt-8"></v-row>
    <v-main class="mt-12">
      <v-row class="mt-12">
        <v-col lg="3" md="1" cols="1">
          <!-- Fills extra space in the row -->
        </v-col>
        <v-col cols="10" lg="8" sm="10" class="mt-12 text-justify">
          <p class="text-left" :class="{'display-1': $vuetify.breakpoint.mdAndUp, 'headline': $vuetify.breakpoint.smOnly, 'subheading': $vuetify.breakpoint.xsOnly}">
            <em>{{ responseData[0].scientific_name }}</em>
            <span v-if="responseData[0].subspecies" class="subtitle-1"> subsp. </span>{{ responseData[0].subspecies }}
            <span v-if="responseData[0].variety" class="subtitle-1"> var. </span><em>{{ responseData[0].variety }}</em>
            <span :class="{'title': $vuetify.breakpoint.mdAndUp, 'subheading': $vuetify.breakpoint.smOnly, 'body-2': $vuetify.breakpoint.xsOnly}">&nbsp;&nbsp;-&nbsp;&nbsp;{{ responseData[0].family }}</span>
          </p>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="3" md="1" cols="1">
          <NavDrawer />
        </v-col>
        <v-col cols="10" lg="8" sm="10" class="text-justify">
          <v-data-iterator hide-default-footer hide-default-header :items="responseData">
            <template v-slot:item="props">
              <v-row>
                <v-col>
                      <p><span class="font-weight-bold">Herbarium:</span>&nbsp;<span v-if="props.item.herbaria">{{ props.item.herbaria }}</span></p>
                      <p><span class="font-weight-bold">Catalog number:</span>&nbsp;<span v-if="props.item.herbaria === 'MICH'">{{ props.item.catalog_number }}</span></p>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                      <p><span class="font-weight-bold">Collectors:</span>&nbsp;{{ props.item.collectors_data }}</p>
                      <p><span class="font-weight-bold">Accompanying Collectors:</span>&nbsp;{{ props.item.accompanying_collectors }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                      <p><span class="font-weight-bold">Location:</span>&nbsp;{{ addCounty(props.item.location_data) }}</p>
                      <p><span class="font-weight-bold">Latitude & Longitude:</span><span v-if="props.item.latitude && props.item.longitude"> {{ props.item.latitude }}°, {{ props.item.longitude }}°</span></p>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                      <p><span class="font-weight-bold">Habitat:</span>&nbsp;{{ props.item.habitat }}</p>
                      <p><span class="font-weight-bold">Specimen Notes:</span>&nbsp;{{ props.item.specimen_notes }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                      <p><span class="font-weight-bold">Determiner:</span>&nbsp;
                        <span v-if="props.item.confidence1">{{ props.item.confidence1 }}</span>
                        <span v-if="props.item.determiner1">, {{ props.item.determiner1}}</span>
                        <span v-if="props.item.determination_year1">, {{ props.item.determination_year1 }}</span>
                        <span v-if="props.item.remarks1">, {{ props.item.remarks1 }}</span>
                      </p>
                      <p><span class="font-weight-bold">Determination History:</span>&nbsp;
                        <span v-if="props.item.determination_history"> {{ props.item.determination_history }};</span>
                        <span v-if="props.item.genus3"><i> {{ props.item.genus3 }} {{ props.item.species3 }}</i> </span>
                        <span v-if="props.item.subspecies3"> subsp. <i>{{ props.item.subspecies3 }}</i></span>
                        <span v-if="props.item.variety3"> var. <i>{{ props.item.variety3 }}</i></span>
                        <span v-if="props.item.forma3"> f. <i>{{ props.item.forma3 }}</i></span>
                        <span v-if="props.item.confidence3">, {{ props.item.confidence3 }}</span>
                        <span v-if="props.item.determiner3">, {{ props.item.determiner3 }}</span>
                        <span v-if="props.item.determination_year3">, {{ props.item.determination_year3 }}</span>
                        <span v-if="props.item.remarks3">, {{ props.item.remarks3 }}</span>
                        <span v-if="props.item.genus3">;</span>
                        <span v-if="props.item.genus2"><i> {{ props.item.genus2 }} {{ props.item.species2 }}</i> </span>
                        <span v-if="props.item.subspecies2"> subsp. <i>{{ props.item.subspecies2 }}</i></span>
                        <span v-if="props.item.variety2"> var. <i>{{ props.item.variety2 }}</i></span>
                        <span v-if="props.item.forma2"> f. <i>{{ props.item.forma2 }}</i></span>
                        <span v-if="props.item.confidence2">, {{ props.item.confidence2 }}</span>
                        <span v-if="props.item.determiner2">, {{ props.item.determiner2 }}</span>
                        <span v-if="props.item.determination_year2">, {{ props.item.determination_year2 }}</span>
                        <span v-if="props.item.remarks2">, {{ props.item.remarks2 }}</span>
                        <span v-if="props.item.genus2">;</span>
                      </p>
                </v-col>
              </v-row>
            </template>
          </v-data-iterator>
        </v-col>
      </v-row>
    </v-main>
    <TheFooter />
  </v-container>
</template>

<script>
import axios from 'axios';
import NavTop from '@/components/NavTop.vue';
import NavDrawer from '@/components/NavDrawer.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'Specimen Record',
  components: {
    NavTop,
    NavDrawer,
    TheFooter,
  },
  data: () => ({
    responseData: [],
    record: {
      common_name: '',
      scientific_name: '',
      genus: '',
      genus2: '',
      genus3: '',
      family: '',
      species: '',
      species2: '',
      species3: '',
      subspecies1: '',
      subspecies2: '',
      subspecies3: '',
      catalog_number: '',
      catalog_path: '',
      catalog_data: '',
      collectors: '',
      collectors_number: '',
      collectors_data: '',
      collection_date: '',
      subspecies: '',
      variety: '',
      variety2: '',
      variety3: '',
      forma1: '',
      forma2: '',
      forma3: '',
      county: '',
      locality: '',
      location_data: '',
      latitude: '',
      longitude: '',
      identity: '',
      specimen_notes: '',
      determiner1: '',
      determiner2: '',
      determiner3: '',
      determination_year1: '',
      determination_year2: '',
      determination_year3: '',
      confidence1: '',
      confidence2: '',
      confidence3: '',
      remarks1: '',
      remarks2: '',
      remarks3: '',
      determination_history: '',
      accompanying_collectors: '',
      habitat: '',
      herbaria: '',
    },
  }),
  created() {
    this.getRecord(this.$route.params.catalog_path);
  },
  methods: {
    getRecord(catalogPath) {
      const path = '/api/v1.0/spec_search_sp?catalog_number=';
      const request = path + catalogPath;
      return axios.get(request)
        .then((response) => {
          // Currently queries based on catalog_number can return multiple substring matches.
          // The first result seems to be the correct one; using that as a (temporary?) quick fix.
          const data = [response.data[0]];
          this.responseData = this.responseFilter(data);
          console.log(data);
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    },
    responseFilter(resp) { // Filters response object for relevant data
      const keys = this.dataKeys(this.record);
      return resp.reduce((arr, e) => {
        const obj = {};
        Object.keys(e).forEach((key) => {
          // eslint-disable-next-line no-unused-expressions
          keys.includes(key) ? obj[key] = e[key] : null;
        });
        console.log(obj.collection_date);
        obj.scientific_name = `${obj.genus} ${obj.species}`;
        obj.collector = obj.collectors && obj.collectors !== 'Collectors not displayed'
          ? obj.collectors : 'Collectors not displayed';
        obj.collector_number = obj.collectors_number && obj.collectors_number !== 'Collector number not displayed'
          ? ` ${obj.collectors_number}` : '';
        obj.collection_date = obj.collection_date.replace(/-/g, '/');
        obj.collection_date = obj.collection_date && obj.collection_date !== 'Collection date not displayed'
          ? ` - ${obj.collection_date}` : '';
        obj.collectors_data = `${obj.collector}${obj.collector_number}${obj.collection_date}`;
        obj.location_data = 'USA, Michigan'; // Next two lines to filter null values.
        obj.location_data = obj.county ? `${obj.location_data}, ${obj.county}` : obj.location_data;
        obj.location_data = obj.locality ? `${obj.location_data}: ${obj.locality}` : obj.location_data;
        obj.catalog_data = `MICH${obj.catalog_number}`;
        arr.push(obj);
        return arr;
      }, []);
    },
    dataKeys(obj) { // Gets keys from initial record object
      return Object.entries(obj)
        .reduce((arr, e) => {
          arr.push(e[0]);
          return arr;
        }, []);
    },
    addCounty(locationString) {
      const temp = locationString.split(':');
      return `${temp[0]} County:${temp[1]}`;
    },
  },
};
</script>

<style scoped>
  .v-data-iterator > div:nth-child(odd){
    border-left: 6px solid #00274c;
  }
  .v-data-iterator > div:nth-child(even){
    border-left: 6px solid #b0bec5;
  }

  .v-data-table__wrapper table {
    width: 100vw;
    table-layout: fixed;
  }

  .v-data-table__wrapper table tbody tr {
    max-width: 100%;
    position: relative;
    display: block;
  }

  .v-data-table__wrapper table tbody tr:nth-child(odd) {
    border-left: 6px solid #00274c;
  }

  .v-data-table__wrapper table tbody tr:nth-child(even) {
    border-left: 6px solid #b0bec5;
  }

  .v-data-table__wrapper table tbody tr td {
    display: flex;
    border-bottom: 1px solid #fafafa;
    height: auto;
    padding: 10px;
    word-wrap: break-word;
  }

  .v-data-table__wrapper table tbody tr td ul li:before {
    padding-right: .5em;
    text-align: left;
    color: #999;
  }

  .theme--light.v-data-table tbody tr:hover:not(.v-datatable__expand-row) {
    background: transparent;
  }

  .flex-content {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .flex-item {
    padding: 2px;
    height: auto;
    font-weight: bold;
  }
</style>
