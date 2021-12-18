<template>
  <v-container class="mt-6">
    <v-main>
      <v-row>
        <p class="count ml-5" v-if="isMobile">Records: {{ results.length }}</p>
        <p class="count ml-7" v-else>Records returned: {{ results.length }}</p>
        <v-spacer/>
        <download-excel
          class="download mr-6"
          :data='results'>
          Download Results
          <v-icon>mdi-download</v-icon>
        </download-excel>
      </v-row>
      <v-row>
        <v-col>
          <v-toolbar dark color="primary">
            <v-btn class="mr-8" small light v-on:click="$emit('formReset')">Reset Search</v-btn>
            <v-toolbar-title class="white--text hidden-xs-only">Search Results</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-search" color="#fafafa" label="Search" single-line hide-details></v-text-field>
          </v-toolbar>
        </v-col>
      </v-row>
      <v-row v-resize="onResize">
        <v-col style="max-height: 70vh; overflow-y: auto">
          <v-data-table :mobile-breakpoint="NaN" :headers="headers" :items="results" :search="search" :pagination.sync="pagination" :disable-pagination="true" :hide-default-footer="true" :hide-default-header="isMobile" :class="{mobile: isMobile}">
            <template v-slot:item="props">
              <router-link v-if="!isMobile" tag="tr" :to="{ path: '/record/' + props.item.plant_id, params: { id: props.item.plant_id }}">
                <td class="text-left link">{{ props.item.scientific_name.charAt(0).toUpperCase() + props.item.scientific_name.slice(1).toLocaleLowerCase() }}</td>
                <td class="text-left">{{ props.item.common_name }}</td>
                <td class="text-left">{{ props.item.family_name }}</td>
                <td class="text-left">{{ props.item.c }}</td>
                <td class="text-left">{{ props.item.w }}</td>
                <td class="text-left">{{ props.item.wet }}</td>
                <td class="text-left">{{ props.item.phys }}</td>
                <td class="text-justify">{{ props.item.st }}</td>
              </router-link>
              <tr v-else>
                <td>
                  <ul class="flex-content mobile">
                    <router-link tag="li" class="flex-item text-left" data-label="Scientific Name" :to="{ path: `/record/` + props.item.plant_id }">
                      <span class="link">{{ props.item.scientific_name.charAt(0).toUpperCase() + props.item.scientific_name.slice(1).toLowerCase() }}</span>
                    </router-link>
                    <li class="flex-item text-left" data-label="Common Name">{{ props.item.common_name }}</li>
                    <li class="flex-item text-left" data-label="Family">{{ props.item.family_name }}</li>
                    <li class="flex-item text-left" data-label="C">{{ props.item.c }}</li>
                    <li class="flex-item text-left" data-label="W">{{ props.item.w }}</li>
                    <li class="flex-item text-left" data-label="WET">{{ props.item.wet }}</li>
                    <li class="flex-item text-left" data-label="NA-PHYS">{{ props.item.phys }}</li>
                    <li class="flex-item text-left" data-label="Status">{{ props.item.st }}</li>
                  </ul>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>

<script>
export default {
  name: 'FloraResults',
  props: {
    results: {
      type: Array,
    },
  },
  data: () => ({
    pagination: {
      sortBy: 'name',
      rowsPerPage: 10,
    },
    search: '',
    isMobile: false,
    headers: [
      { text: 'Scientific Name', value: 'scientific_name' },
      { text: 'Common Name', value: 'common_name' },
      { text: 'Family', value: 'family_name' },
      { text: 'C', value: 'c' },
      { text: 'W', value: 'w' },
      { text: 'WET', value: 'wet' },
      { text: 'NA-PHYS', value: 'phys' },
      { text: 'Status', value: 'st' },
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
  },
};
</script>

<style scoped>
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
    padding: 10px;
    width: auto;
    height: auto;
    font-weight: bold;
  }

  .link {
    text-decoration: underline;
    cursor: pointer;
  }

  .download {
    cursor: pointer;
  }
</style>
