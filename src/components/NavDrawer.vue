<template>
  <div class="nav-drawer-fixed">
    <v-navigation-drawer height="auto"
                         width="300"
                         hide-overlay
                         :mini-variant.sync="mini"
                         v-model="drawer"
                         class="primary elevation-6 hidden-md-and-down">
      <v-list :two-line="$vuetify.breakpoint.xlOnly">
        <v-divider/>
        <v-list-item v-for="item in menu" :key="item.title">
          <v-list-item-content>
            <v-btn block color="primary" :to="item.link">
               <span style="white-space: normal; width: 300px;">
                {{ item.title }}
               </span>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-menu id="mobile-nav">
      <template v-slot:activator="{ on, hover }">
        <v-icon :class="`elevation-${hover ? 12 : 2}`"
                left
                dark
                v-on="on"
                class="primary ml-2 rounded hidden-lg-and-up">mdi-forwardburger</v-icon>
      </template>
      <v-list width="385">
        <v-list-item v-for="item in menu" :key="item.icon">
          <v-list-item-content>
            <v-btn small dark class="primary" text block :to="item.link">
              {{ item.title }}
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'NavDrawer',
  data: () => ({
    drawer: true,
    activator: true,
    menu: [
      { title: 'Introduction', link: '/' },
      { title: 'The Information', link: '/information' },
      { title: 'The Maps', link: '/maps' },
      { title: 'Completeness of the County Level Maps', link: '/map-completeness' },
      { title: 'Aliens', link: '/aliens' },
      { title: 'The Photos', link: '/photos' },
      { title: 'Taxonomic & Nomenclatural Changes', link: '/changes' },
      { title: 'Ferns & Other Spore Bearing Vascular Plants', link: '/ferns' },
      { title: 'Contributing to the Website', link: '/contribute' },
      { title: 'Acknowledgments', link: '/acknowledgments' },
    ],
    mini: false,
    right: null,
  }),
};
</script>

<style scoped>

  @media screen and (max-width: 415px) {

    .v-btn--left {
      left: 3px;
    }

  }

  .nav-drawer-fixed {
    position: fixed;
    top: 25%;
    z-index: 12;
  }

  .menu-btn-fixed{
    position: fixed;
  }

  #mobile-nav{
    z-index: 12;
    background-color: primary;
    position: fixed;
  }

  .mobile-button{
    font-size: 0.55em;
  }

  .v-menu__content > div{
    background-color: #00274c;

  }

  .theme--dark.v-list > div {
    background-color: #00274c;
  }

  .drawer-items{
    overflow: auto;
  }

  * {
    transition: none !important
  }
</style>
