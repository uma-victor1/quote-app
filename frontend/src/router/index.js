import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import All from "../views/All.vue";
import Quote from "../views/Quote.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/all",
    name: "All",
    component: All
  },
  {
    path: "/quote/:id",
    name: "single quote",
    component: Quote
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
