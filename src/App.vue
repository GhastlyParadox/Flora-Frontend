<template>
  <v-app id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />  <!-- This caches search results -->
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!--
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    -->
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>
