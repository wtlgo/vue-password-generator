import { createRouter, createWebHashHistory } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        alias: "/home",
        name: "home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/new-password/:id",
        name: "new-password",
        component: () => import("../views/NewPassword.vue"),
        props(route) {
            const props: {
                [key: string]: string | string[] | number;
            } = { ...route.params };
            props["id"] = +props["id"];
            return props;
        },
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/About.vue"),
    },
    { path: "/:pathMatch(.*)*", redirect: { name: "home" } },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
