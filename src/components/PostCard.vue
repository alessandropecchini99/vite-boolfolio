<script>
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    card: Object,
  },
};
</script>

<template>
  <!-- CARDS -->
  <div class="card" style="width: 18rem">
    <img
      :src="this.store.getImageUrl(card.upImage)"
      class="card-img-top"
      :alt="card.title"
    />
    <div class="card-body d-flex flex-column">
      <h6>{{ card.id }}</h6>
      <h5 class="card-title">{{ card.title }}</h5>
      <p v-if="card.content.length > 80" class="card-text mt-auto">
        {{ card.content.slice(0, 80) }}...
      </p>
      <p v-else class="card-text">{{ card.content }}</p>
      <router-link
        :to="{ name: 'posts.show', params: { slug: card.slug } }"
        class="btn btn-primary mt-auto"
        >View</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
