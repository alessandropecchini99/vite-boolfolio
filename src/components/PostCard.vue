<script>
import axios from "axios";

export default {
  data() {
    return {
      page: 1,
      arrPosts: [],
      total: 0,
    };
  },
  created() {
    axios.get("http://localhost:8000/api/posts?page=1").then((response) => {
      this.arrPosts = response.data.data;
      this.total = response.data.total;
    });
  },
  methods: {
    loadMore() {
      axios
        .get(`http://localhost:8000/api/posts?page=${this.page + 1}`)
        .then((response) => {
          this.arrPosts = this.arrPosts.concat(response.data.data);
          this.page++;
        });
    },
  },
};
</script>

<template>
  <h1 class="mb-4">POST CARD</h1>

  <!-- CARDS -->
  <div class="d-flex gap-5 flex-wrap justify-content-center mb-3">
    <div
      v-for="post in arrPosts"
      :key="post.id"
      class="card"
      style="width: 18rem"
    >
      <img :src="post.url_image" class="card-img-top" :alt="post.title" />
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.content }}</p>
      </div>
    </div>

    <!-- LOAD MORE -->
    <div v-if="arrPosts.length != total">
      <button @click="loadMore" class="btn btn-primary mb-3">
        Carica altri post
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
