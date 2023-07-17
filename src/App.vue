<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import AppNav from "./components/AppNav.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: {
    AppNav,
    AppFooter,
  },
};
</script>

<template>
  <AppNav />

  <router-view></router-view>

  <AppFooter />
</template>

<style lang="scss">
body {
  background-color: grey;
  color: white;
}
</style>
