import Vue from 'vue';

/* This component renders text from the database, which wouldn't render properly otherwise. */


// this loads a skeleton animation in place of the component while data is loading
export const Loading = {
  template: '<div><v-skeleton-loader type="paragraph"></v-skeleton-loader></div>',
};

export default Vue.component('DynamicText', {
  name: 'DynamicText',
  functional: true,
  props: {
    template: String,
    data: { type: Object, default: () => ({}) },
    loaded: Boolean,
    key: Number,
  },
  render(h, context) {
    const { template } = context.props;
    const dynComponent = {
      template,
      data() { return context.props.data; },
    };
    // const component = context.props.loaded ? dynComponent : Loading;
    // return h(component);
    return h(dynComponent);
  },
});
