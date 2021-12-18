<template>
  <div id="lightgallery">
  </div>
</template>

<script>
import 'lightgallery.js';
import 'lightgallery.js/dist/css/lightgallery.css';
import 'lg-thumbnail.js/dist/lg-thumbnail';

export default {
  name: 'LightGallery',
  props: {
    galleryItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openGallery() {
      const dynamicElements = [];
      this.galleryItems.forEach((value) => {
        console.log(value);
        dynamicElements.push({
          src: value.src,
          thumb: value.thumb,
          subHtml: value.subHtml,
          caption: value.alt,
        });
      });

      const lg = document.getElementById('lightgallery');
      window.lightGallery(lg, {
        mode: 'lg-slide',
        download: false,
        thumbnail: true,
        dynamic: true,
        preload: 2,
        dynamicEl: dynamicElements,
      });

      // eslint-disable-next-line no-unused-vars
      lg.addEventListener('onCloseAfter', (event, index, fromTouch, fromThumb) => {
        this.$emit('close-gallery');
        window.lgData[lg.getAttribute('lg-uid')].destroy();
      }, false);

      window.lightGallery(lg);
    },
  },
  mounted() {
    this.openGallery();
  },
};
</script>

<style scoped>

  .lg > .lg-sub-html ::v-deep {
    text-align: right;
  }

</style>
