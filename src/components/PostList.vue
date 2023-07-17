<script>
import axios from "axios";

import PostCard from "./PostCard.vue";
export default {
  data() {
    return {
      arrPost: [],
      currentPage: 1,
      nPages: 0,
    };
  },
  methods: {
    getPosts() {
      axios
        .get("http://localhost:8000/api/posts", {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.arrPost = response.data.data;
          this.nPages = response.data.last_page;
        });
    },
  },
  created() {
    axios
      .get("http://localhost:8000/api/posts", {
        params: {
          page: this.currentPage,
        },
      })
      .then((response) => {
        this.arrPost = response.data.data;
        this.nPages = response.data.last_page;
      });
  },
  watch: {
    currentPage() {
      this.getPosts();
    },
  },
  components: {
    PostCard,
  },
};
</script>

<template>
  <div
    class="w-100 d-flex flex-column align-items-center justify-content-center"
  >
    <h1>POST LIST</h1>

    <!-- POST LIST -->
    <ul>
      <li v-for="post in arrPost" :key="post.id">
        {{ post.id }} - {{ post.title }}
      </li>
    </ul>

    <!-- PAGINATOR -->
    <nav>
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage == 1 }">
          <a class="page-link" href="#" @click="currentPage--">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="page in nPages"
          :key="page"
          class="page-item"
          :class="{ active: page == currentPage }"
        >
          <a class="page-link" href="#" @click="currentPage = page">{{
            page
          }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage == nPages }">
          <a class="page-link" href="#" @click="currentPage++">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <!-- POST CARDS -->
  <div class="text-center mt-5">
    <PostCard />
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style-type: none;
}
</style>
