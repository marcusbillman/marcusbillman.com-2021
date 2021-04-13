import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Portfolio from "@/views/Portfolio.vue";
import Contact from "@/views/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        index: 0,
      },
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio,
      meta: {
        index: 1,
      },
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
      meta: {
        index: 2,
      },
    },
  ],
});

export default router;
