import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/user",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/User.vue"),
  },
  {
    path: "/user_list",
    name: "UserList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UserList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
