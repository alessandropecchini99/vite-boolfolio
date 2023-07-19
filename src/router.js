import { createRouter, createWebHistory } from "vue-router";

// importo i componenti che definiscono le varie pagine
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import PostsIndex from "./pages/PostsIndex.vue";
import PostsShow from "./pages/PostsShow.vue";
import App404 from "./pages/App404.vue";

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
    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error404",
      component: App404,
    },
  ],
});

export { router };
