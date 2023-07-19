<script>
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      page: 1,
      arrPosts: [],
      total: 0,
      store,
    };
  },
  created() {
    axios.get(this.store.baseUrl + "api/posts?page=1").then((response) => {
      this.arrPosts = response.data.results.data;
      this.total = response.data.results.total;
    });
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
      axios.get(this.store.baseUrl + "api/posts?page=1").then((response) => {
        this.arrPosts = response.data.results.data;
        this.total = response.data.results.total;
        this.page = 1;
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <h1 class="mb-4">POST CARD</h1>
    <!-- CARDS -->
    <div class="d-flex gap-5 flex-wrap justify-content-center mb-3">
      <div
        v-for="post in arrPosts"
        :key="post.id"
        class="card"
        style="width: 18rem"
      >
        <img
          :src="this.store.getImageUrl(post.upImage)"
          class="card-img-top"
          :alt="post.title"
        />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">{{ post.title }}</h5>
          <p v-if="post.content.length > 80" class="card-text mt-auto">
            {{ post.content.slice(0, 80) }}...
          </p>
          <p v-else class="card-text">{{ post.content }}</p>
          <router-link
            :to="{ name: 'posts.show', params: { slug: post.slug } }"
            class="btn btn-primary mt-auto"
            >View</router-link
          >
        </div>
      </div>
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
