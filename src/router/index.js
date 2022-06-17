import { createRouter, createWebHistory } from "vue-router";
import indexPage from "../views/HomeView/indexPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: indexPage,
    },
    {
      path: "/about-us",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/aboutUs/indexPage.vue"),
    },
    {
      path: "/our-business",
      name: "our-business",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ourBusiness/indexPage.vue"),
    },
    {
      path: "/contact",
      name: "contact-us",
      component: () => import("../views/contactUs/indexPage.vue"),
    },
    {
      path: "/our-clients",
      name: "our clients",
      component: () => import("../views/ourClients/indexPage.vue"),
    },
    // {
    //     path: "/blog",
    //     name: "contact-us",
    //     component: () =>
    //         import ("../views/contactUs/indexPage.vue"),
    // },
    {
      path: "/csr",
      name: "csr",
      component: () => import("../views/csr/indexPage.vue"),
    },
  ],
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    window.scrollTo(0, 0);
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
  linkActiveClass: "ashfer-active-link",
});

export default router;
