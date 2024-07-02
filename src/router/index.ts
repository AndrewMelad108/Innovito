import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "courses-page",
    component: () => import("../views/Courses/Courses.vue"),
    meta: { layout: "app" },
  },
  {
    path: "/courses/:coursesId",
    name: "courses-info",
    component: () => import("../views/Courses/CoursesInfo.vue"),
    meta: { layout: "app" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
