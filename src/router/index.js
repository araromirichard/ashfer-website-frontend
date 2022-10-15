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
            component: () =>
                import ("../views/contactUs/indexPage.vue"),
        },
        {
            path: "/our-clients",
            name: "our clients",
            component: () =>
                import ("../views/ourClients/indexPage.vue"),
        },
        {
            path: "/blog-posts",
            name: "blog.index",
            component: () =>
                import ("../views/blog/indexPage.vue"),
        },
        {
            path: "/blog-posts/:slug",
            name: "blog.show",
            component: () =>
                import (
                    /* webpackChunkName: "blog-detail" */
                    "../views/blog/showBlog.vue"
                ),
            props: true,
        },
        {
            path: "/csr",
            name: "csr",
            component: () =>
                import ("../views/csr/indexPage.vue"),
        },
    ],
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        }
        return savedPosition || { top: 0, left: 0 };
    },
    linkActiveClass: "ashfer-active-link",
});

export default router;