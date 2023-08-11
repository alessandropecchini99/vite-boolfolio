<script>
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      arrPost: [],
    };
  },
  created() {
    axios.get(this.store.baseUrl + "api/posts/random").then((response) => {
      this.arrPost = response.data.results;
    });
  },
};
</script>

<template>
  <h1>AppHome</h1>
  <div class="row row-cols-3 g-0">
    <div class="col" v-for="post in arrPost" :key="post.id">
      <router-link
        class="d-block w-100 h-100"
        :to="{ name: 'posts.show', params: { slug: post.slug } }"
      >
        <img
          class="w-100 h-100"
          :src="this.store.getImageUrl(post.upImage)"
          :alt="post.title"
        />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  height: 80vh;
  padding: 4em;
}

.col {
  height: calc(100% / 3);
}

img {
  object-fit: cover;
}
</style>
