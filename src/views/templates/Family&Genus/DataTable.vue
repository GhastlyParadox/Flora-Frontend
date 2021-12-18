<template>
  <v-col v-resize="onResize" style="padding-top:56px">
    <v-toolbar dark color="primary">
      <v-toolbar-title v-if="$route.params.family_name" class="white--text hidden-xs-only">All species found in {{ $route.params.family_name }}</v-toolbar-title>
      <v-toolbar-title v-if="$route.params.genus_name" class="white--text hidden-xs-only">All species found in {{ $route.params.genus_name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-search" color="#fafafa" label="Search" single-line hide-details></v-text-field>
    </v-toolbar>
    <v-lazy v-model="isActive" :options="{threshold: .25}" transition="fade-transition">
      <v-container fluid>
        <v-data-iterator
          :items="species_data"
          :search="search"
          hide-default-footer
          disable-pagination
          >
          <template v-slot:item="props">
            <v-row>
              <v-col class="results-col sci-name" cols="12" md="4">
                <router-link class="link text-justify" tag="p" :to="{ path: '/record/' + props.item.plant_id, params: { id: props.item.plant_id }}">
                  {{ props.item.scientific_name }}
                </router-link>
              </v-col>
              <v-col class="results-col common-name" cols="12" md="4">
                <router-link class="link text-justify" tag="p" :to="{ path: '/record/' + props.item.plant_id, params: { id: props.item.plant_id }}">
                  {{ props.item.common_name.join(", ")  }}
                </router-link>
              </v-col>
              <v-col class="results-col species_img" cols="12" md="4">
                <router-link class="link text-justify" tag="div" :to="{ path: '/record/' + props.item.plant_id, params: { id: props.item.plant_id }}">
                  <v-img :src="props.item.srcExists ? props.item.thumbPath : props.item.placeholder"
                         height="125"
                         contain
                         alt=""
                         rel="prefetch"
                         as="image"
                         class="thumb ma-2"
                  />
                </router-link>
              </v-col>
            </v-row>
          </template>
        </v-data-iterator>
      </v-container>
      <!--v-data-table style="max-height: 50vh; overflow-y: auto"
                    :headers="headers"
                    hide-default-footer
                    hide-default-header
                    :items="species_data"
                    :search="search"
                    :disable-pagination="true"
                    :class="{mobile: isMobile}">
        <template v-slot:item="props">
          <router-link class="link text-justify" tag="tr" :to="{ path: '/record/' + props.item.plant_id, params: { id: props.item.plant_id }}">
            <td class="text-justify"></td>
            <td class="text-justify" style="white-space: pre">{{ isMobile ? ' '.repeat(6) + props.item.common_name.join(", ") : props.item.common_name.join(", ") }}</td>
            <td v-if="!isMobile" class="img">
              <v-img :src="props.item.srcExists ? props.item.thumbPath : props.item.placeholder"
                     height="125"
                     contain
                     alt=""
                     rel="prefetch"
                     as="image"
                     class="thumb ma-2"
              />
             </td>
            <td v-if="!isMobile" style="width: 10vw">
              &nbsp;
            </td>
          </router-link-->

          <!--router-link v-else class="link text-justify" tag="tr" :to="{ path: '/record/' + props.item.plant_id, params: { id: props.item.plant_id }}">
            <td class="text-justify">{{ props.item.scientific_name }}</td>
            <td style="width: 30vw" class="text-right">{{ props.item.common_name.join(", ") }}</td>
          </router-link-->

        <!--/template>
      </v-data-table-->
    </v-lazy>
  </v-col>
</template>

<script>


export default {
  name: 'DataTable',
  props: {
    species_data: Array,
    // changing key to species_key gets rid of a console error, but I'm not sure if it breaks something else...
    key: Number,
    data_loaded: Boolean,
  },
  data() {
    return {
      headers: [
        { text: 'Species', value: 'scientific_name', width: '25%' },
        { text: 'Common Name', value: 'common_name', width: '25%' },
        { text: 'Image', value: '', show: false },
        { text: '', value: '', show: false },
      ],
      pagination: {
        sortBy: 'name',
        rowsPerPage: 10,
        search: '',
        totalItems: 0,
      },
      search: '',
      citationUrl: '',
      isMobile: false,
      isActive: false,
      data: [],
      transition: 'scale-transition',
      isIntersecting: false,
    };
  },
  computed: {
    show_headers() {
      return this.headers.filter(x => x.show);
    },
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 760;
    },
  },
  watch: {
    // populates local data object with store value
    species_data(update) {
      this.data = update;
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
  .results-col {
    padding-top: 0;
    padding-bottom: 0;
  }
  .row {
    border-bottom: 1px solid #f5f5f5;
  }
  @media screen and (max-width: 959px) {
    .common-name {
      padding-left: 3em;
    }
  }
</style>
