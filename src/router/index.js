import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
import Router from 'vue-router';
import TheGlossary from '@/views/home/pages/TheGlossary.vue';
import TheLinks from '@/views/home/pages/TheLinks.vue';
import TheReferences from '@/views/home/pages/TheReferences.vue';
import FloraMap from '@/views/home/pages/FloraMap.vue';
import FamilyKey from '@/views/home/pages/FamilyKey.vue';
import HomeIntro from '@/views/home/pages/HomeIntro.vue';
import TheInformation from '@/views/home/pages/TheInformation.vue';
import TheMaps from '@/views/home/pages/TheMaps.vue';
import MapCompleteness from '@/views/home/pages/MapCompleteness.vue';
import TheAliens from '@/views/home/pages/TheAliens.vue';
import ThePhotos from '@/views/home/pages/ThePhotos.vue';
import TheChanges from '@/views/home/pages/TheChanges.vue';
import TheFerns from '@/views/home/pages/TheFerns.vue';
import ToContribute from '@/views/home/pages/ToContribute.vue';
import TheAcknowledgements from '@/views/home/pages/TheAcknowledgments.vue';
import TheBrowser from '@/views/browse/TheBrowser.vue';
import FamilyChanges from '@/views/home/pages/FamilyChanges.vue';
import FloraChanges from '@/views/home/pages/FloraChanges.vue';
import FamilyTemplate from '@/views/templates/Family&Genus/FamilyTemplate.vue';
import GenusTemplate from '@/views/templates/Family&Genus/GenusTemplate.vue';
import FloraSearch from '@/views/search/FloraSearch.vue';
import FloraResults from '@/views/search-results/FloraResults.vue';
import FloraRecord from '@/views/templates/FloraRecord/FloraRecord.vue';
import SpecimenSearch from '@/views/search/SpecimenSearch.vue';
import SpecimenResults from '@/views/search-results/SpecimenResults.vue';
import SpecimenRecord from '@//views/templates/SpecimenRecord.vue';
import LightGallery from '@/components/LightGallery.vue';
import EditFamily from '@/views/admin/EditFamily.vue';
import EditGenus from '@/views/admin/EditGenus.vue';
import EditSpecies from '@/views/admin/EditSpecies.vue';
import EditHome from '@/views/admin/EditHome.vue';
import ImageManager from '@/views/admin/Image Manager/ImageManager.vue';

Vue.use(Router);

export default new Router({
  name: 'router',
  mode: 'history',
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeIntro,
      meta: {
        title: 'Michigan Flora',
      },
    },
    {
      path: '/browse',
      name: 'Browse',
      component: TheBrowser,
    },
    {
      path: '/glossary',
      name: 'Glossary',
      component: TheGlossary,
    },
    {
      path: '/links',
      name: 'Links',
      component: TheLinks,
    },
    {
      path: '/references',
      name: 'References',
      component: TheReferences,
    },
    {
      path: '/flora-map',
      name: 'Flora Map',
      component: FloraMap,
    },
    {
      path: '/family-key',
      name: 'Family Key',
      component: FamilyKey,
    },
    {
      path: '/information',
      name: 'Information',
      component: TheInformation,
    },
    {
      path: '/maps',
      name: 'Maps',
      component: TheMaps,
    },
    {
      path: '/map-completeness',
      name: 'MapCompleteness',
      component: MapCompleteness,
    },
    {
      path: '/aliens',
      name: 'Aliens',
      component: TheAliens,
    },
    {
      path: '/photos',
      name: 'Photos',
      component: ThePhotos,
    },
    {
      path: '/changes',
      name: 'Changes',
      component: TheChanges,
    },
    {
      path: '/ferns',
      name: 'Ferns',
      component: TheFerns,
    },
    {
      path: '/contribute',
      name: 'Contribute',
      component: ToContribute,
    },
    {
      path: '/acknowledgments',
      name: 'Acknowledgments',
      component: TheAcknowledgements,
    },
    {
      path: '/family-changes',
      name: 'Family Changes',
      component: FamilyChanges,
    },
    {
      path: '/flora-changes',
      name: 'Flora Changes',
      component: FloraChanges,
    },
    {
      path: '/search',
      name: 'Search',
      component: FloraSearch,
      meta: { keepAlive: true },
    },
    {
      path: '/search-results',
      name: 'Flora Results',
      component: FloraResults,
    },
    {
      path: '/record/:id',
      name: 'Flora Record',
      component: FloraRecord,
      props: {
        default: true,
      },
    },
    {
      path: '/specimen-search',
      name: 'Specimen Search',
      component: SpecimenSearch,
      meta: { keepAlive: true },
    },
    {
      path: '/specimen-results',
      name: 'Specimen Results',
      component: SpecimenResults,
    },
    {
      path: '/specimen-record/:catalog_path',
      name: 'Specimen Record',
      component: SpecimenRecord,
      props: {
        default: true,
      },
    },
    {
      path: '/family/:family_name',
      name: 'family',
      component: FamilyTemplate,
      props: {
        default: true,
      },
    },
    {
      path: '/genus/:genus_name',
      name: 'genus',
      component: GenusTemplate,
      props: {
        default: true,
      },
    },
    {
      path: '/light-gallery',
      name: 'light-gallery',
      component: LightGallery,
    },
    {
      path: '/admin/edit-family/:family_name',
      name: 'Edit Family',
      component: EditFamily,
      props: {
        default: true,
      },
    },
    {
      path: '/admin/edit-genus/:genus_name',
      name: 'Edit Genus',
      component: EditGenus,
      props: {
        default: true,
      },
    },
    {
      path: '/admin/edit-species/:id',
      name: 'Edit Species',
      component: EditSpecies,
      props: {
        default: true,
      },
    },
    {
      path: '/admin/edit-home/:id',
      name: 'Edit Home Page',
      component: EditHome,
      props: {
        default: true,
      },
    },
    {
      path: '/admin/fm/species-images/:id',
      name: 'Image Manager',
      component: ImageManager,
      props: route => ({
        default: true,
        path: route.query.path,
      }),
      meta: { keepAlive: true },
    },
  ],
});
