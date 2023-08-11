<script>
import PostCard from "./PostCard.vue";
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      arrPosts: [],
      arrTypes: [],
      page: 1,
      total: 0,
      store,
    };
  },
  methods: {
    loadMore() {
      axios
        .get(this.store.baseUrl + `api/posts?page=${this.page + 1}`)
        .then((response) => {
          this.arrPosts = this.arrPosts.concat(response.data.results.data);
          this.page++;
        });
    },
    resetCard() {
      axios.get(this.store.baseUrl + "api/posts").then((response) => {
        this.arrPosts = response.data.results.data;
        this.total = response.data.results.total;
        this.page = 1;
      });
    },
    getPosts() {
      axios.get(this.store.baseUrl + "api/posts").then((response) => {
        this.arrPosts = response.data.results.data;
        this.total = response.data.results.total;
      });
    },
  },
  created() {
    this.getPosts();
  },
  components: {
    PostCard,
  },
};
</script>

<template>
  <div class="container">
    <h1 class="mb-4">POST LIST</h1>

    <!-- CARDS -->
    <div class="d-flex gap-5 flex-wrap justify-content-center mb-3">
      <PostCard v-for="post in arrPosts" :key="post.id" :card="post" />
    </div>

    <!-- LOAD MORE -->
    <div class="d-flex gap-2 align-items-center justify-content-center">
      <button
        v-if="arrPosts.length != total"
        @click="loadMore"
        class="btn btn-primary mb-3"
      >
        Carica altri post
      </button>
      <button @click="resetCard()" class="btn btn-secondary mb-3">Reset</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
