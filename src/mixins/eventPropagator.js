import Vue from 'vue';

export default Vue.mixin({
  methods: {
    $propagatedEmit(event, payload) {
      let vm = this.$parent;
      while (vm) {
        vm.$emit(event, payload);
        vm = vm.$parent;
      }
    },
  },
});
