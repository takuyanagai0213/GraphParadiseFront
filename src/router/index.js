import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/user/new",
    name: "UserNew",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/user/User.vue"),
  },
  {
    path: "/user/update",
    name: "UserInfo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/user/UserInfo.vue"),
  },
  {
    path: "/admin/user_list",
    name: "UserList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/UserList.vue"),
  },
  {
    path: "/graph",
    name: "Graph",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/graph/Graph.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
