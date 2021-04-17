import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import All from "../views/All.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/all",
    name: "All",
    component: All,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
