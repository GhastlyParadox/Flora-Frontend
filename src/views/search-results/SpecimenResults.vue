<template>
  <v-container class="mt-6">
    <v-main>
      <v-row>
        <p class="count ml-5" v-if="isMobile">Records: {{ results.length }}</p>
        <p class="count ml-5" v-else>Records returned: {{ results.length }}</p>
        <v-spacer/>
        <download-excel
          class="download mr-6"
          :data='results'>
          Download Results
          <v-icon>mdi-download</v-icon>
        </download-excel>
      </v-row>
      <v-toolbar dark color="primary">
        <v-btn class="mr-8" small light v-on:click="$emit('formReset')">Reset Search</v-btn>
        <v-toolbar-title class="white--text hidden-xs-only">Specimen Results</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="mdi-search" color="#fafafa" label="Search" single-line hide-details></v-text-field>
      </v-toolbar>
      <v-row v-resize="onResize">
        <v-col style="max-height: 70vh; overflow-y: auto" class="mr-2">
          <v-data-table :mobile-breakpoint="NaN"
                        :headers="headers"
                        :items="results"
                        :items-per-page="50"
                        :search="search"
                        hide-default-header
                        :footer-props="{itemsPerPageText: 'Items per Page', itemsPerPage: 50, itemsPerPageOptions: [50, 100, 200, -1]}">
            <template v-slot:item="props">
              <tr>
                <td>
                  <div class="table-content">
                    <v-card class="table-item text-left">
                      <p class="table-item ml-sm-1 mb-0">
                        <span :class="{'title': $vuetify.breakpoint.mdAndUp, 'subtitle-1': $vuetify.breakpoint.smAndDown}" class="font-weight-bold">
                          <em>{{ props.item.scientific_name }}</em>
                          <span v-if="props.item.subspecies" class="subtitle-2"> subsp. </span>{{ props.item.subspecies }}
                          <span v-if="props.item.variety" class="subtitle-2"> var. </span>{{ props.item.variety }}
                          - {{ props.item.family }}
                        </span>
                        <br>
                        <span v-if="props.item.collectors !== 'Collectors hidden'">
                          {{ props.item.collectors }}, {{ props.item.collectors_number }}, Collected {{ props.item.collection_date }}.
                          <br>
                        </span>
                        <span v-if="props.item.collectors === 'Collectors hidden'">
                          {{ props.item.collectors }}, {{ props.item.collection_date }}
                          <br>
                        </span>
                        <span>{{ addCounty(props.item.location_data) }}<span v-if="props.item.latitude && props.item.longitude">; {{ props.item.latitude }}°, {{ props.item.longitude }}°</span><br></span>
                        <span v-if="props.item.catalog_number[0] !== '#'">MICH{{ props.item.catalog_number }}<br></span>
                        <router-link class="record-link" :to="{ path: `/specimen-record/` + props.item.catalog_path }"><span class="font-weight-medium subtitle-1">View Full Record</span></router-link>
                      </p>
                    </v-card>
                  </div>
                </td>
              </tr>
            </template>
            <template v-slot:top="{ pagination, options, updateOptions }">
              <v-data-footer
                :pagination.sync="pagination"
                :options="options"
                :items-per-page="50"
                :itemsPerPageOptions="[50, 100, 200, -1]"
                @update:options="updateOptions" />
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>

<script>
export default {
  name: 'SpecimenResults',
  props: {
    results: {
      type: Array,
    },
  },
  created() {
    // console.log(this.results);
  },
  data: () => ({
    search: '',
    footerProps: {},
    isMobile: false,
    headers: [
      { text: 'Catalog', value: 'catalog_number' },
      { text: 'Scientific Name', value: 'scientific_name' },
      { text: 'Family', value: 'family' },
      { text: 'Collectors', value: 'collector' },
      { text: 'Collector\'s Number', value: 'collectors_number' },
      { text: 'Date Collected', value: 'collection_date' },
      { text: 'Location', value: 'location_data' },
      { text: 'Record', value: '' },
    ],
  }),
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 1264;
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
    addCounty(locationString) {
      const temp = locationString.split(':');
      return `${temp[0]} County:${temp[1]}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .mobile {
    color: #333;
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
    display: block;
    width: 100%;
    border-bottom: 1px solid #f5f5f5;
    height: auto;
  }

  .v-data-table__wrapper table tbody tr td ul li:before {
    content: attr(data-label);
    padding-right: .5em;
    text-align: left;
    display: block;
    color: #999;

  }

  .table-content {
    padding: 0;
    margin: 0;
    list-style: none;
    display: block;
  }

  .table-item {
    padding: 5px;
    width: 100%;
    height: auto;
    font-weight: bold;
    max-height: max-content;
  }

  .record-link {
    text-decoration: underline;
    cursor: pointer;
  }

  .count {
    display: flex;
    justify-content: flex-start;
  }

  .download {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }
  .theme--light.v-data-table .v-data-footer {
    border-top: none;
  }
  .v-list__tile__title {
    min-width: 3em;
  }


</style>
