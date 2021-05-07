import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";

import Home from "@/views/Home.vue";
import Portfolio from "@/views/Portfolio.vue";
import CaseStudy from "@/views/CaseStudy.vue";
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
      path: "/portfolio/:slug",
      name: "Case Study",
      component: CaseStudy,
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

router.beforeEach((to, from) => {
  store.commit("setMenuOpen", false);
});

export default router;
