<template>
  <v-container fluid class="ma-0 pa-0">
    <NavTop />
    <NavDrawer />
    <v-row class="mt-8"><!-- Phantom row --></v-row>
    <v-main>
      <v-row class="mt-12">
        <v-col lg="3" md="1" cols="1">
          <!-- Fills extra space in the row -->
        </v-col>
        <v-col cols="12" lg="9" offset-lg="3" class="mt-12 text-left">
          <p v-if="loaded" class="ml-12 mt-12">
            <span>
              <router-link :to="{ path: '/'}"
                           class="mr-1">Home</router-link>
              <v-icon small color="black">mdi-chevron-right</v-icon>
              <router-link :to="{ path: '/family/' + floraData[0].family_name, params: { family_name: floraData[0].family_name }}"
                           class="mr-1">
                {{ floraData[0].family_name }}
              </router-link>
              <v-icon small color="black">mdi-chevron-right</v-icon>
              <router-link :to="{ path: '/genus/' + floraData[0].genus, params: { genus: floraData[0].genus }}"> {{ floraData[0].genus }}</router-link>
            </span>
          </p>
          <p v-if="loaded" class="font-weight-medium ml-12" :class="{'display-1': $vuetify.breakpoint.lgAndUp, 'headline': $vuetify.breakpoint.mdAndDown}">
            <em>{{ floraData[0].scientific_name }}</em> <span :class="{'body-2': $vuetify.breakpoint.lgAndUp, 'caption': $vuetify.breakpoint.mdAndDown}">{{ floraData[0].author }}</span>
            <v-btn v-if="admin" small dark color="#036358" class="float-right mr-6 elevation-6" @click.native="imageManager">Edit Images</v-btn>
            <v-divider></v-divider>
          </p>
        </v-col>
      </v-row>
      <v-row>
        <FloraMobile  :floraData="floraData"
                      :imageData="imageData"
                      :imagesFilter="imagesFilter"
                      :mapBaseURL="mapBaseURL"
                      :locationData="locationData"
                      :citationUrl="citationURL"
                      :admin="admin"
                      :priorityImageSrc="priorityImageSrc"
                      :priorityImageSrcHover="priorityImageSrcHover"
                      :priorityImageCaption="priorityImageCaption"
                      :priorityImagePhotographer="priorityImagePhotographer"
                      v-show="loaded && $vuetify.breakpoint.smAndDown">
          <component :loaded="loaded" :key="text_key" :template="textData" :is="dynamic_text"></component>
        </FloraMobile>
        <FloraDesktop :floraData="floraData"
                      :imageData="imageData"
                      :imagesFilter="imagesFilter"
                      :mapBaseURL="mapBaseURL"
                      :locationData="locationData"
                      :citationUrl="citationURL"
                      :admin="admin"
                      :priorityImageSrc="priorityImageSrc"
                      :priorityImageSrcHover="priorityImageSrcHover"
                      :priorityImageCaption="priorityImageCaption"
                      :priorityImagePhotographer="priorityImagePhotographer"
                      v-show="$vuetify.breakpoint.mdAndUp && loaded">
          <component :loaded="loaded" :key="text_key" :template="textData" :is="dynamic_text"></component>
        </FloraDesktop>
      </v-row>
      <v-row>
        <v-col cols="10" lg="8" sm="10" offset-lg="3" offet-md="2" offset="1" class="mt-4 text-justify">
          <p v-if="loaded" class="body-2"><span class="font-weight-bold">Citation:</span><br>
            <span class="font-italic">MICHIGAN FLORA ONLINE.</span> A. A. Reznicek, E. G. Voss, & B. S. Walters. February 2011. University of Michigan. Web. {{ getDate }} <br>
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
import FloraMobile from '@/views/templates/FloraRecord/FloraMobile.vue';
import FloraDesktop from '@/views/templates/FloraRecord/FloraDesktop.vue';
import DynamicText from '@/components/dynamicText';


export default {
  name: 'FloraRecord',
  components: {
    NavTop,
    NavDrawer,
    TheFooter,
    FloraMobile,
    FloraDesktop,
    DynamicText,
  },
  data() {
    return {
      crumbs: [],
      date: new Date(),
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ],
      dynamic_text: 'DynamicText',
      text_key: 0,
      isMobile: false,
    };
  },
  beforeCreate() {
    this.$store.dispatch('floraRecord/getRecordData');
  },
  created() {
    this.citationUrl = this.$route.path;
  },
  methods: {
    imageManager() {
      const { id } = this.$router.currentRoute.params;
      const path = `_pid_${id}`;
      this.$router.push({ name: 'Image Manager', query: { path } }).catch(() => {});
      this.$router.go();
    },
    onResize() {
      this.isMobile = window.innerWidth < 1264;
    },
  },
  computed: {
    ...mapState('currentUser', {
      authenticated: state => state.authenticated,
      email: state => state.email,
      admin: state => state.admin,
    }),
    ...mapState('floraRecord', {
      floraData: state => state.floraData,
      textData: state => state.textData,
      imageData: state => state.imageData,
      mapBaseURL: state => state.mapBaseURL,
      locationData: state => state.locationData,
      priorityImageSrc: state => state.priorityImageSrc,
      priorityImageSrcHover: state => state.priorityImageSrcHover,
      priorityImageCaption: state => state.priorityImageCaption,
      priorityImagePhotographer: state => state.priorityImagePhotographer,
      citationURL: state => state.citationURL,
      loaded: state => state.loaded,
    }),
    getDate() {
      return `${this.monthNames[this.date.getMonth()]}, ${this.date.getDate()}, ${this.date.getFullYear()}`;
    },
    imagesFilter() {
      // returns array of existing images.
      return this.imageData.filter(image => image.exists);
    },
  },
  watch: {
    $route: {
      // with immediate set to true, handler gets called on first mount as well
      immediate: true,
      // handler will be called every time the route changes.
      // keeps component data in sync
      // reset component state and fetch new data
      async handler() {
        this.text_key += 1; // changing the key value assigned resets the component
        await this.$store.dispatch('floraRecord/getRecordData');
      },
    },
  },
};
</script>

<style scoped>

  .map-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    display: inline-block;
  }


  .lightbox {
    /** Default lightbox to hidden */
    display: none;

    /** Position and style */
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    text-align: center;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
  }

  .lightbox img {
    /** Pad the lightbox image */
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .lightbox:target {
    /** Remove default browser outline */
    outline: none;

    /** Unhide lightbox **/
    display: block;
  }
  .v-application p {
    margin-bottom: 12px !important;
  }
  .v-data-footer ::v-deep {
    justify-content: flex-start !important;

  }
  [v-cloak] {
    display: none;
  }
  .edit-link {
    text-align: right;
    transition: .1s;
  }
  .edit-link:hover {
    font-weight: bold;
  }
  a {
    text-decoration: none;
  }

</style>
