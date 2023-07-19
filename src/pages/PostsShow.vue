<script>
import { store } from "../store";
import axios from "axios";
import { DateTime } from "luxon";
import App404 from "./App404.vue";

export default {
  components: {
    App404,
  },
  data() {
    return {
      store,
      post: [],
      luxon: DateTime,
      is404: false,
    };
  },
  created() {
    // richiedo i dati del post
    axios
      .get(this.store.baseUrl + "api/posts/" + this.$route.params.slug)
      .then((response) => {
        if (response.data.success) {
          this.post = response.data.results;
        } else {
          // this.$router.push({ name: "error404" });
          this.is404 = true;
        }
      });
  },
};
</script>

<template>
  <App404 v-if="is404" />
  <div v-else-if="post">
    <h3>ID: {{ post.id }}</h3>
    <img
      :src="this.store.getImageUrl(post.upImage)"
      alt="prova"
      style="width: 150px"
    />
    <h1>Title: {{ post.title }}</h1>
    <h5>Content: {{ post.content }}</h5>
    <h6>Last modified: {{ this.luxon.now().toFormat("dd/MM/yyyy") }}</h6>
  </div>
</template>

<style lang="scss" scoped></style>
