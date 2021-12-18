<template>
  <v-container fluid class="header-container ma-0 pa-2 elevation-6">
    <v-row>
      <v-col id="logo">
        <div class="ml-3">
          <a href="https://lsa.umich.edu/herbarium"><img id="herbarium-logo" class="v-responsive" src="@/assets/images/herbarium-logo.png" /></a>
        </div>
      </v-col>
      <v-col id="menu">
        <v-toolbar flat dark color="#00274c" class="nav-toolbar">
          <v-toolbar-items class="hidden-md-and-down" v-show="$vuetify.breakpoint.lgAndUp">
            <v-btn
              v-for="item in menu"
              :key="item.icon"
              :to="item.link"
              text
              small
              v-on:click.native="$emit('formReset')"
            >{{ item.title }}</v-btn>
          </v-toolbar-items>
          <v-menu id="mobile-nav">
            <template v-slot:activator="{ on }">
              <v-icon v-show="$vuetify.breakpoint.mdAndDown" v-on="on" dark class="right-side mr-3">mdi-backburger</v-icon>
            </template>
            <v-list v-on="on">
              <v-list-item v-for="item in menu" :key="item.icon">
                <v-list-item-content>
                  <v-btn text block dark :to="item.link">{{ item.title }}</v-btn>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NavTop',
  props: {
    formReset: Function,
  },
  data() {
    return {
      menu: [
        { title: 'Home', link: '/' },
        { title: 'Browse', link: '/browse' },
        { title: 'Search', link: '/search' },
        { title: 'Specimen Search', link: '/specimen-search' },
        { title: 'Flora Map', link: '/flora-map' },
        { title: 'Family Key', link: '/family-key' },
        { title: 'Glossary', link: '/glossary' },
        { title: 'References', link: '/references' },
        { title: 'Links', link: '/links' },
      ],
    };
  },
};
</script>

<style scoped>
  ::v-deep #menu {
    flex-grow: unset;
  }
  #logo{
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  #herbarium-logo {
    display: block;
  }
  .nav-toolbar{
    max-width: 50%;
    -webkit-transform: translate3d(0,0,0);
  }
  .header-container {
    background: #00274c;
    position: fixed;
    z-index: 5;
  }
  .v-menu__content > div{
    background-color: #00274c;
    z-index: 12;
  }
  * {
    transition: none !important
  }

</style>
