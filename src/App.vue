<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import PostList from "./components/PostList.vue";
export default {
  components: {
    PostList,
  },
};
</script>

<template>
  <PostList />
</template>

<style lang="scss">
body {
  background-color: grey;
  color: white;
}
</style>
