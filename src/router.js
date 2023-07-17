import { createRouter, createWebHistory } from "vue-router";

// importo i componenti che definiscono le varie pagine
import AppHome from "./pages/AppHome.vue";
import PostsIndex from "./pages/PostsIndex.vue";
import PostsShow from "./pages/PostsShow.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/posts",
      name: "posts.index",
      component: PostsIndex,
    },
    {
      path: "/posts/:slug",
      name: "posts.show",
      component: PostsShow,
    },
  ],
});

export { router };
