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
            <div class="headline font-weight-regular mb-5">Search</div>
            <v-text-field v-model="formData.common_name"
                          label="Common Name"
            ></v-text-field>
            <v-text-field v-model="formData.scientific_name"
                          label="Scientific Name"
            ></v-text-field><v-text-field v-model="formData.genus"
                          label="Genus"
            ></v-text-field>
            <v-text-field v-model="formData.family"
                          label="Family"
            ></v-text-field>
            <v-select v-model="formData.na"
                      :items="selectOptions.naSelect" label="Native/Adventive" clearable></v-select>
            <v-select v-model="formData.c"
                      :items="selectOptions.cSelect" label="C" clearable></v-select>
            <v-select v-model="formData.w_wet"
                      :items="selectOptions.wetSelect" label="W/Wetness" clearable></v-select>
            <v-select v-model="formData.phys"
                      :items="selectOptions.physSelect" label="Physiognomy" clearable></v-select>
            <v-select v-model="formData.status"
                      :items="selectOptions.statusSelect" label="State Status" clearable></v-select>
            <v-select v-model="formData.county"
                      :items="selectOptions.countySelect" label="County" clearable></v-select>
            <!-- <ValidationProvider name="Max Results" rules="numeric" v-slot="{ errors }">
              <v-text-field v-model="formData.n_results"
                            label="Max Results"
                            hint="Optional. 0 returns all"
              >
              </v-text-field>
            </ValidationProvider> -->
            <span>
              <v-btn v-on:click="sendFormData"
                     :loading="loading"
                     :disabled="loading"
                     color="primary"
                     class="mt-4 ma-1"
                     @click="loader = 'loading'">Search</v-btn>
              <v-btn class="mt-4 ma-1"
                     @click="formReset()">Clear</v-btn>
              <v-dialog v-model="dialog" width="500" :fullscreen="$vuetify.breakpoint.xsOnly">
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" class="mt-4 ma-1">
                    Search Tips
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline grey lighten-2" primary-title>
                    Search Tips
                  </v-card-title>
                  <v-card-text class="mt-4 text-justify">
                    <ul>
                      <li class="mb-2 subtitle-1" style="color:black">To select multiple criteria for a category use Shift for a continuous range or Control (Ctrl key) for individual items on Windows computers. For Mac, hold down the command button to select multiple options.</li>
                      <li class="mb-2 subtitle-1" style="color:black">Synonyms linking to the three volume Michigan Flora are included in the Scientific Name searches (but not the Genus searches), so entering the genus "Panicum" in the Scientific Name search field will also return species in the genus "Dichanthelium"</li>
                      <li class="mb-2 subtitle-1" style="color:black">A "%" can be used as a wildcard, so "Mu%gia" entered in the Genus field will return all the species in "Muhlenbergia"; "Cat%tail" entered in the Common Name filed will return all species of "cat-tails", which is useful when your're unsure if the name is hyphenated or two words.</li>
                      <li class="mb-2 subtitle-1" style="color:black">Some searches, such as Scientific Name, can be conducted on partial entries, so entering "bia cor" in the Scientific Name search field will return "Euphorbia corollata"</li>
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
            <FloraResults @formReset="formReset()" :results="searchResponse"/>
          </v-col>
        </v-row>
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
import FloraResults from '@/views/search-results/FloraResults.vue';

export default {
  name: 'Search',
  components: {
    NavTop,
    NavDrawer,
    TheFooter,
    FloraResults,
  },
  data() {
    return {
      searchResponse: [],
      noResults: false,
      isSubmitted: false,
      isError: false,
      submitting: false,
      formData: getInitialData(),
      selectOptions: {
        naSelect: ['N', 'A'],
        cSelect: ['*', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        wetSelect: ['5 UPL', '4 FACU-', '3 FACU', '2 FACU+', '1 FAC-', '0 FAC', '-1 FAC+', '-2 FAC-', '-3 FACW', '-4 FACW+', '-5 OBL'],
        physSelect: ['Ad Fern', 'Ad A-Forb', 'Ad B-Forb', 'Ad P-Forb', 'Ad A-Grass', 'Ad P-Grass', 'Ad A-Sedge', 'Ad P-Sedge', 'Ad Shrub', 'Ad Tree', 'Ad A-Vine', 'Ad P-Vine',
          'Ad W-Vine', 'Nt Fern', 'Nt Fern Al', 'Nt A-Forb', 'Nt B-Forb', 'Nt P-Forb', 'Nt A-Grass', 'Nt P-Grass', 'Nt A-Sedge', 'Nt P-Sedge', 'Nt Shrub', 'Nt Tree', 'Nt A-Vine',
          'Nt B-Vine', 'Nt P-Vine', 'Nt W-Vine'],
        statusSelect: ['Extirpated', 'Endangered', 'Threatened', 'Special Concern'],
        countySelect: ['Alcona', 'Alger', 'Allegan', 'Alpena', 'Antrim', 'Arenac', 'Baraga', 'Barry',
          'Bay', 'Benzie', 'Berrien', 'Branch', 'Calhoun', 'Cass', 'Charlevoix', 'Cheboygan',
          'Chippewa', 'Clare', 'Clinton', 'Crawford', 'Delta', 'Dickinson', 'Eaton', 'Emmet',
          'Genesee', 'Gladwin', 'Gogebic', 'Grand Traverse', 'Gratiot', 'Hillsdale', 'Houghton', 'Huron',
          'Ingham', 'Ionia', 'Iosco', 'Iron', 'Isabella', 'Jackson', 'Kalamazoo', 'Kalkaska', 'Kent',
          'Keweenaw', 'Lake', 'Lapeer', 'Leelanau', 'Lenawee', 'Livingston',
          'Luce', 'Mackinac', 'Macomb', 'Manistee', 'Marquette', 'Mason', 'Mecosta',
          'Menominee', 'Midland', 'Missaukee', 'Monroe', 'Montcalm', 'Montmorency', 'Muskegon', 'Newaygo', 'Oakland',
          'Oceana', 'Ogemaw', 'Ontonagon', 'Osceola', 'Oscoda', 'Otsego', 'Ottawa', 'Presque Isle', 'Roscommon',
          'Saginaw', 'Sanilac', 'Schoolcraft', 'Shiawassee', 'St. Clair', 'St. Joseph', 'Tuscola', 'Van Buren',
          'Washtenaw', 'Wayne', 'Wexford'],
      },
      loader: null,
      loading: false,
      loaderOverlay: false,
      dialog: false,
    };
  },
  mounted() {
    this.$root.$on('resetSearch', this.formReset);
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    async sendFormData(event) {
      const path = '/api/v1.0/flora_search_sp?n_results=0&';
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
          if (item[0] === 'w_wet') { // Concatenate W & Wet
            // eslint-disable-next-line no-return-assign
            return url += (`w=${item[1].split(' ')[0]}&?wet=${item[1].split(' ')[1]}&`);
          }
          if (item[0] === 'status') { // Convert literal to abbreviation
            switch (item[1]) {
              case 'Extirpated':
                // eslint-disable-next-line no-return-assign
                return url += ('status=X&');
              case 'Endangered':
                // eslint-disable-next-line no-return-assign
                return url += ('status=E&');
              case 'Threatened':
                // eslint-disable-next-line no-return-assign
                return url += ('status=T&');
              case 'Special Concern':
                // eslint-disable-next-line no-return-assign
                return url += ('status=SC&');
              default:
                return 'Undefined';
            }
          } else {
            // eslint-disable-next-line no-return-assign
            return url += (`${item[0]}=${item[1].trim().replace(/[\s]+/g, '%20').trim()}&`);
          }
        }
      });
      return url;
    },
    // Filters response object for relevant data
    responseFilter(resp) {
      // handle discrepancy between query and return properties
      const changedKeyMap = { family: 'family_name', status: 'st' };
      const keys = this.dataKeys(this.formData).reduce((acc, item) => {
        // eslint-disable-next-line no-prototype-builtins
        if (changedKeyMap.hasOwnProperty(item)) {
          acc.push(changedKeyMap[item]);
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
      return resp.reduce((arr, e) => {
        const obj = {};
        Object.keys(e).forEach((key) => {
          // eslint-disable-next-line no-unused-expressions
          keys.includes(key) ? obj[key] = e[key] : null;
        });
        arr.push(obj);
        return arr;
      }, []);
    },
    // Gets keys from initial formData object
    dataKeys(obj) {
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
    onEnter() {
      this.msg = 'on enter event';
    },
  },
  watch: {
    // For button animation
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      // eslint-disable-next-line no-return-assign
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
  computed: {
    tipsWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm': return '400px';
        default: return '400px';
      }
    },
  },
};

function getInitialData() {
  return {
    plant_id: '',
    scientific_name: '',
    c: '',
    w_wet: '',
    w: null,
    wet: '',
    phys: '',
    na: '',
    family: '',
    genus: '',
    common_name: '',
    n_results: null,
    county: '',
    status: '',
    st: '',
    // county: null,
    // sort_first: null,
    // sort_first_direction: null,
    // sort_second: null,
    // sort_second_direction: null,
  };
}
</script>

<style scoped>
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

.form{
  max-width: max-content;
}

</style>
