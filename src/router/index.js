import { createRouter, createWebHistory } from "vue-router";
import indexPage from "../views/HomeView/indexPage.vue";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
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
            component: () =>
                import ("../views/aboutUs/indexPage.vue"),
        },
        {
            path: "/our-business",
            name: "our-business",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ("../views/ourBusiness/indexPage.vue"),
        },
        {
            path: "/contact",
            name: "contact-us",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ("../views/contactUs/indexPage.vue"),
        },
    ],
});

export default router;