<template>
  <v-container fluid class="ma-0 pa-0">
    <NavTop @formReset="formReset()" />
    <v-row class="mt-12">
      <!-- Space filler -->
    </v-row>
    <v-row class="mt-3">
      <!-- Space filler -->
    </v-row>
    <v-main>
      <v-row no-gutters align="center">
        <v-col lg="3" md="2" cols="1">
          <NavDrawer />
        </v-col>
        <v-col cols="10" lg="6" offset-lg="6" md="8" offset-md="5" offset-sm="4">
          <v-form v-on:keyup.enter.native="sendFormData" class="form mb-5" v-if="!isSubmitted">
            <div id="title" class="headline font-weight-regular">Specimen Search</div>
            <v-text-field v-model="formData.common_name"
                          label="Common Name"
            ></v-text-field>
            <v-text-field v-model="formData.scientific_name"
                          label="Scientific Name"
            ></v-text-field>
            <v-text-field v-model="formData.genus"
                          label="Genus"
            ></v-text-field>
            <v-text-field v-model="formData.family"
                          label="Family"
            ></v-text-field>
            <v-text-field v-model="formData.collector"
                          label="Collector's Name"
            ></v-text-field>
            <v-text-field v-model="formData.collector_number"
                          label="Collector's Number"
            ></v-text-field>
            <v-text-field v-model="formData.collection_year"
                          label="Collection Year"
            ></v-text-field>
            <v-text-field v-model="formData.location"
                          label="Location"
            ></v-text-field>
            <v-select v-model="formData.county"
                      :items="selectOptions.county_island_select"
                      label="County"
                      multiple
                      clearable
            ></v-select>
            <!-- <ValidationProvider name="Max Results" rules="numeric" v-slot="{ errors }">
              <v-text-field v-model="formData.n_results"
                            label="Max Results"
                            hint="Optional. 0 returns all"
              >
              </v-text-field>
            </ValidationProvider> -->
           <!-- <v-select v-model="formData.county_island"
                      :items="select_options.county_island_select" label="County/Island"></v-select>
            <v-select v-model="formData.sortFirst"
                            :items="select_options.sort_first_select" label="Sort First By"></v-select>
            <v-select v-model="formData.sort_second"
                      :items="select_options.sort_second_select" label="Sort Second By"></v-select> -->
            <span>
              <v-btn v-on:click="sendFormData()"
                     @keyup.enter="sendFormData()"
                     :loading="loading"
                     color="primary"
                     class="mt-4 ma-1"
                     @click="loader = 'loading'">Search</v-btn>
              <v-btn @click="formReset()"
                     class="mt-4 ma-1">Clear</v-btn>
              <v-dialog
                v-model="dialog"
                width="500"
                :fullscreen="$vuetify.breakpoint.xsOnly"
              >
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  class="mt-4 ma-1"
                >
                  Search Tips
                </v-btn>
              </template>
              <v-card>
                <v-card-title
                  class="headline grey lighten-2"
                  primary-title
                >
                  Search Tips
                </v-card-title>

                <v-card-text class="mt-4 text-justify">
                  <ul>
                    <li class="mb-2 subtitle-1" style="color:black">To select multiple criteria for a category use Shift for a continuous range or Control (Ctrl key) for individual items on Windows computers. For Mac, hold down the command button to select multiple options.</li>
                    <li class="mb-2 subtitle-1" style="color:black">Synonyms linking to the three volume Michigan Flora are included in the Scientific Name searches (but not the Genus searches), so entering the genus “Panicum” in the Scientific Name search field will also return species in the genus “Dichanthelium”</li>
                    <li class="mb-2 subtitle-1" style="color:black">A “%” can be used as a wildcard, so “Mu%gia” entered in the Genus field will return all the species in “Muhlenbergia”; “Cat%tail” entered in the Common Name field will return all species of “cat-tails”, which is useful when you’re unsure if the name is hyphenated or two words</li>
                    <li class="mb-2 subtitle-1" style="color:black">Some searches, such as Scientific Name or Collector, can be conducted on partial entries, so entering “bia cor” in the Scientific Name search field will return “Euphorbia corollata”; “Haz” entered in the Collector field will return collections of “A.S. Hazzard” and “Brian T. Hazlett”</li>
                    <li class="mb-2 subtitle-1" style="color:black">For the collection search, to select decades in the year field, use %, so 186%, will return all the collections from the decade of the 1860’s</li>
                    <li class="mb-2 subtitle-1" style="color:black">You can search by day if you place dates in the format: 05/27/1950 or month using a wildcard i.e., 05/%/1950</li>
                  </ul>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    text
                    @click="dialog = false"
                  >
                    Return to search
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            </span>
            <v-col class="mt-4" cols="12" v-if="noResults">
              <p class="title">No results found.</p>
            </v-col>
          </v-form>
          <v-overlay :value="loaderOverlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
        </v-col>
          <v-row class="mt-12">
            <v-col cols="11" lg="8" offset-lg="3" offset="1" class="mt-12" v-if="isSubmitted">
              <SpecimenResults @formReset="formReset()" :results="searchResponse"/>
            </v-col>
          </v-row>
        </v-row>
      </v-main>
      <TheFooter />
    </v-container>
</template>

<script>
import axios from 'axios';
import NavTop from '../../components/NavTop.vue';
import NavDrawer from '@/components/NavDrawer.vue';
import TheFooter from '@/components/TheFooter.vue';
import SpecimenResults from '@/views/search-results/SpecimenResults.vue';

export default {
  name: 'SpecimenSearch',
  components: {
    NavTop,
    NavDrawer,
    TheFooter,
    SpecimenResults,
  },
  data() {
    return {
      searchResponse: [],
      isSubmitted: false,
      noResults: false,
      isError: false,
      submitting: false,
      // eslint-disable-next-line no-use-before-define
      formData: getInitialData(),
      selectOptions: {
        county_island_select: ['Alcona', 'Alger', 'Allegan', 'Alpena', 'Antrim', 'Arenac',
          'Baraga', 'Barry', 'Bay', 'Benzie', 'Berrien', 'Branch', 'Calhoun', 'Cass',
          'Charlevoix', 'Cheboygan', 'Chippewa', 'Clare', 'Clinton',
          'Crawford', 'Delta', 'Dickinson', 'Eaton', 'Emmet', 'Genesee', 'Gladwin', 'Gogebic',
          'Grand Traverse', 'Gratiot', 'Hillsdale', 'Houghton', 'Huron', 'Ingham', 'Ionia',
          'Iosco', 'Iron', 'Isabella', 'Jackson', 'Kalamazoo', 'Kalkaska', 'Kent', 'Keweenaw',
          'Lake', 'Lapeer', 'Leelanau', 'Lenawee', 'Livingston',
          'Luce', 'Mackinac', 'Macomb', 'Manistee', 'Marquette',
          'Mason', 'Mecosta', 'Menominee', 'Midland', 'Missaukee', 'Monroe', 'Montcalm',
          'Montmorency', 'Muskegon', 'Newaygo', 'Oakland', 'Oceana', 'Ogemaw', 'Ontonagon',
          'Osceola', 'Oscoda', 'Otsego', 'Ottawa', 'Presque Isle', 'Roscommon', 'Saginaw',
          'Saint Joseph', 'Sanilac', 'Schoolcraft', 'Shiawassee', 'St. Clair', 'St. Joseph',
          'Tuscola', 'Van Buren', 'Washtenaw', 'Wayne', 'Wexford'],
        sort_first_select: ['Scientific Name (Ascending)', 'Scientific Name (Descending)', 'Family (Ascending)', 'Family (Descending)',
          'County (Ascending)', 'County (Descending)', 'Catalog Number (Ascending)', 'Catalog Number (Descending)'],
        sort_second_select: ['Scientific Name (Ascending)', 'Scientific Name (Descending)', 'Family (Ascending)', 'Family (Descending)',
          'County (Ascending)', 'County (Descending)', 'Catalog Number (Ascending)', 'Catalog Number (Descending)'],
      },
      loader: null,
      loading: false,
      loaderOverlay: false,
      dialog: false,
      dictionary: {
        attributes: {
          // custom attributes
        },
        custom: {
          select: {
            required: 'Select field is required',
          },
        },
      },
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    async sendFormData(event) {
      const path = '/api/v1.0/spec_search_sp?n_results=0&';
      const request = path.concat(this.constructUrl(this.formData));
      this.loaderOverlay = true;
      return axios.get(request)
        .then((response) => {
          if (response.data.message == null) {
            this.searchResponse = this.responseFilter(response.data);
            this.isSubmitted = true;
            this.loaderOverlay = false;
          } else {
            this.noResults = true;
            this.loaderOverlay = false;
          }
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
          this.loaderOverlay = false;
        });
    },
    constructUrl(obj) { // Creates API call URL
      let url = '';
      // eslint-disable-next-line camelcase
      const form_data = Object.entries(obj);
      // eslint-disable-next-line consistent-return
      form_data.forEach((item) => {
        if (item[1]) {
          console.log(item);
          if (Array.isArray(item[1])) {
            url += (`${item[0]}=${item[1].join(',')}&`);
          } else {
            url += (`${item[0]}=${item[1].trim()
              .replace(/[\s]+/g, '%20')
              .trim()}&`);
          }
        }
      });
      return url;
    },
    responseFilter(resp) { // Filters response object for relevant data
      const keys = this.dataKeys(this.formData);
      return resp.reduce((arr, e) => {
        const obj = {};
        // eslint-disable-next-line no-restricted-syntax
        for (const key in e) {
          if (keys.includes(key)) {
            obj[key] = e[key];
          }
        }
        obj.collection_year = obj.collection_date;
        obj.collector = obj.collectors !== null ? obj.collectors : '';
        obj.collector_number = obj.collectors_number !== null ? obj.collectors_number : '';
        obj.scientific_name = `${obj.genus} ${obj.species}`;
        obj.location_data = 'USA, Michigan'; // Next two lines to filter null values.
        obj.location_data = obj.county ? `${obj.location_data}, ${obj.county}` : obj.location_data;
        obj.location_data = obj.locality ? `${obj.location_data}: ${obj.locality}` : obj.location_data;
        obj.catalog_data = (obj.catalog_number ? obj.catalog_number : 'View Record');
        obj.catalog_path = obj.catalog_number[0] === '#' ? obj.catalog_number.slice(1) : obj.catalog_number; // Remove '#' from path.
        arr.push(obj);
        return arr;
      }, []);
    },
    dataKeys(obj) { // Gets keys from initial formData object
      return Object.entries(obj)
        .reduce((arr, e) => {
          arr.push(e[0]);
          return arr;
        }, []);
    },
    formReset() {
      this.isSubmitted = false;
      this.noResults = false;
      // eslint-disable-next-line no-use-before-define
      Object.assign(this.formData, getInitialData());
      this.$refs.form.reset();
    },
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      // eslint-disable-next-line no-return-assign
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
};

function getInitialData() {
  return {
    common_name: '',
    scientific_name: '',
    genus: '',
    family: '',
    species: '',
    subspecies: '',
    variety: '',
    catalog_number: '',
    catalog_path: '',
    catalog_data: '',
    collector: '',
    collectors: '',
    collector_number: '',
    collectors_number: '',
    accompanying_collectors: '',
    collection_date: '',
    collection_year: '',
    determiner1: '',
    determiner2: '',
    determiner3: '',
    determination_history: '',
    county: '',
    location: '',
    place_name: '',
    locality: '',
    location_data: '',
    latitude: '',
    longitude: '',
    habitat: '',
    herbaria: '',
    n_results: null,
    // county: null,
    // sort_first: null,
    // sort_first_direction: null,
    // sort_second: null,
    // sort_second_direction: null,
  };
}
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .results-table{
    margin-top: 10vh;
    margin: 5vh;
  }

.form{
   margin-top: 20vh;
   width: 70%;
 }

  #title{
    margin: 2vh;
  }

  #drawer-container{
    margin-top: 15vh;
    position: relative;
  }
</style>
