import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "slash",
    component: () => import("../components/MainPage.vue"),
  },
  {
    path: "/secondPage",
    name: "slash2",
    component: () => import("../components/SecondPage.vue"),
  }
];

console.log(process.env.BASE_URL);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;