<script>
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      post: [],
    };
  },
  methods: {
    getImageUrl(image) {
      return image ? image : this.store.baseUrl + "storage/default.jpeg";
    },
  },
  created() {
    // richiedo i dati del post
    axios
      .get(this.store.baseUrl + "api/posts/" + this.$route.params.slug)
      .then((response) => {
        console.log(response.data);
        this.post = response.data;
      });
  },
};
</script>

<template>
  <h3>ID: {{ post.id }}</h3>
  <img :src="getImageUrl(post.upImage)" alt="prova" style="width: 150px" />
  <h1>Title: {{ post.title }}</h1>
  <h5>Content: {{ post.content }}</h5>
</template>

<style lang="scss" scoped></style>
